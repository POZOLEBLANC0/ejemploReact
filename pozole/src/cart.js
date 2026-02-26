// Simple cart utilities stored in localStorage under key "cart"
export function getCart() {
  try {
    const raw = localStorage.getItem('cart');
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('Error leyendo carrito desde localStorage', e);
    return [];
  }
}

export function saveCart(cart) {
  try {
    localStorage.setItem('cart', JSON.stringify(cart));
  } catch (e) {
    console.error('Error guardando carrito en localStorage', e);
  }
}

// --- Server sync helpers ---
import api from './services/api';

/**
 * Load purchases (carts) from remote API configured by VITE_API_URL.
 * Behavior:
 * - If `options.cartId` is provided, fetch `/carts/{cartId}`.
 * - Else if `options.userId` is provided, try `/carts/user/{userId}` (fakestore supports `/carts/user/{id}`),
 * - Else fetch `/carts` and pick the last cart in the list.
 * The function will resolve product details for each productId and persist the resulting cart locally.
 */
export async function loadPurchasesFromServer(options = {}) {
  try {
    let cartResp;
    if (options.cartId) {
      cartResp = await api.get(`carts/${options.cartId}`);
    } else if (options.userId) {
      // fakestore has /carts/user/:id
      cartResp = await api.get(`carts/user/${options.userId}`);
      // it may return an array; pick last
      if (Array.isArray(cartResp.data)) cartResp = { data: cartResp.data[cartResp.data.length - 1] };
    } else {
      const list = await api.get('carts');
      const arr = Array.isArray(list.data) ? list.data : [];
      if (arr.length === 0) return [];
      cartResp = { data: arr[arr.length - 1] };
    }

    const serverCart = cartResp.data;
    // serverCart.products: [{productId, quantity}, ...]
    const products = [];
    if (Array.isArray(serverCart.products)) {
      for (const p of serverCart.products) {
        try {
          const prodResp = await api.get(`products/${p.productId}`);
          const prod = prodResp.data;
          products.push({ id: prod.id, title: prod.title, price: prod.price, image: prod.image, quantity: p.quantity });
        } catch (err) {
          console.warn('No se pudo obtener producto', p.productId, err);
        }
      }
    }

    saveCart(products);
    try { window.dispatchEvent(new Event('storage')); } catch {}
    return products;
  } catch (error) {
    console.error('Error cargando compras remotas:', error);
    return getCart();
  }
}

/**
 * Load ALL purchases from remote API (`/carts`) and resolve product details.
 * Returns an array of carts: [{ id, userId, date, products: [{id,title,price,image,quantity}] }, ...]
 */
export async function loadAllPurchasesFromServer(options = {}) {
  try {
    let arr = [];
    const userId = options.userId || import.meta.env.VITE_DEFAULT_USER_ID;
    if (userId) {
      // fakestore supports /carts/user/:id
      const resp = await api.get(`carts/user/${userId}`);
      arr = Array.isArray(resp.data) ? resp.data : [];
    } else {
      const list = await api.get('carts');
      arr = Array.isArray(list.data) ? list.data : [];
    }

    const cartsDetailed = [];
    for (const c of arr) {
      const products = [];
      if (Array.isArray(c.products)) {
        for (const p of c.products) {
          try {
            const prodResp = await api.get(`products/${p.productId}`);
            const prod = prodResp.data;
            products.push({ id: prod.id, title: prod.title, price: prod.price, image: prod.image, quantity: p.quantity });
          } catch (err) {
            console.warn('No se pudo obtener producto', p.productId, err);
          }
        }
      }
      cartsDetailed.push({ id: c.id, userId: c.userId, date: c.date, products });
    }
    return cartsDetailed;
  } catch (error) {
    console.error('Error cargando todas las compras remotas:', error);
    return [];
  }
}

export function addToCart(product) {
  const cart = getCart();
  const idx = cart.findIndex((p) => p.id === product.id);
  if (idx >= 0) {
    cart[idx].quantity = (cart[idx].quantity || 1) + 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  saveCart(cart);
  // notify other tabs
  try { window.dispatchEvent(new Event('storage')); } catch {}
  return cart;
}

export function updateQuantity(id, quantity) {
  let cart = getCart();
  cart = cart.map((p) => (p.id === id ? { ...p, quantity } : p)).filter((p) => p.quantity > 0);
  saveCart(cart);
  try { window.dispatchEvent(new Event('storage')); } catch {}
  return cart;
}

export function removeFromCart(id) {
  let cart = getCart();
  cart = cart.filter((p) => p.id !== id);
  saveCart(cart);
  try { window.dispatchEvent(new Event('storage')); } catch {}
  return cart;
}

export function clearCart() {
  saveCart([]);
  try { window.dispatchEvent(new Event('storage')); } catch {}
}

export function getTotal() {
  const cart = getCart();
  return cart.reduce((sum, it) => sum + Number(it.price || 0) * (it.quantity || 0), 0);
}

export default {
  getCart,
  saveCart,
  addToCart,
  updateQuantity,
  removeFromCart,
  clearCart,
  getTotal,
};
