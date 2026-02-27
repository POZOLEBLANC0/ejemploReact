import React, { useEffect, useState } from 'react';
import './carrito.css';
import { loadAllPurchasesFromServer } from './cart';
import RegistrarCarritos from './registrarCarrito';

function Carrito() {
  const [carts, setCarts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const defaultUser = import.meta.env.VITE_DEFAULT_USER_ID || '1';
        const all = await loadAllPurchasesFromServer({ userId: defaultUser });
        if (mounted) setCarts(all);
      } catch (e) {
        console.error(e);
      } finally {
        if (mounted) setLoading(false);
      }
    })();
  }, []);

  return (
    <div className="carrito-container">
      <RegistrarCarritos />
      <h2>Tu carrito</h2>

      {loading ? (
        <p>Cargando compras, no desesperes bro...</p>
      ) : carts.length === 0 ? (
        <p className="empty">Compra algo pinche pobre   </p>
      ) : (
        carts.map((cart) => (
          <div key={cart.id} className="cart-record">
            <h3>Compra #{cart.id} — Usuario {cart.userId} — {new Date(cart.date).toLocaleString()}</h3>
            <ul className="cart-list">
              {cart.products.map((item) => (
                <li key={item.id} className="cart-item">
                  <img src={item.image} alt={item.title} className="item-image" />
                  <div className="item-details">
                    <p className="item-title">{item.title}</p>
                    <p className="item-price">${Number(item.price).toFixed(2)} × {item.quantity}</p>
                  
                  </div>
                </li>
              ))}
            </ul>
            <button className="btneliminar" onClick={() => removeCompra(cart.id)}>Eliminar compra</button>
          </div>  
        ))
      )}
    </div>
  );
}
const removeCompra = async (cartId) => {
        try {
            const response = await api.delete(
                `/carts/${cartId}`
            );
            console.log("Compra eliminada:", response.data);
            alert("Compra eliminada exitosamente");
        } catch (error) {
            console.error("Error al eliminar compra:", error);
            alert("Error al eliminar compra");
        }
    }
export default Carrito;


