import React, { useState } from 'react';
import api from './services/api';


function RegistrarCarritos() {
    const [userId, setUserId] = useState('');
    
    const [productId, setProductId] = useState('');
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const nuevoCarrito = {
            userId: Number(userId),
            products: [
                {
                    id: Number(productId),
                    title: title,
                    price: Number(price),
                    description: description,
                    category: category,
                    image: image
                }
            ]
        };

        try {
            const response = await api.post('carts', nuevoCarrito);
            console.log('Carrito registrado:', response.data);
            alert('¡Carrito guardado exitosamente!');

            setUserId(''); setProductId(''); setTitle(''); 
            setPrice(''); setDescription(''); setCategory(''); setImage('');
            
        } catch (error) {
            console.error(error);
            alert('Error al registrar el carrito');
        }
    }

    return (
        <div className="miku-user-wrapper">
            <div className="miku-user-card" style={{ maxWidth: '500px' }}>
                <h2 className="miku-title">Registrar Carrito</h2>
                
                <form className="miku-form" onSubmit={handleSubmit}>
                    
                    <h3 style={{ color: '#39C5BB', fontSize: '18px', marginBottom: '10px' }}>Datos del Usuario</h3>
                    <div className="input-group">
                        <label>ID del Usuario
                            <input 
                                className="miku-input"
                                type="number" 
                                value={userId}
                                onChange={(e) => setUserId(e.target.value)}
                                required
                            />
                        </label>
                    </div>

                    <hr style={{ border: '1px solid #eee', margin: '20px 0' }} />

                    <h3 style={{ color: '#39C5BB', fontSize: '18px', marginBottom: '10px' }}>Producto en el Carrito</h3>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                        <div className="input-group">
                            <label>ID del Producto
                                <input 
                                    className="miku-input"
                                    type="number" 
                                    value={productId}
                                    onChange={(e) => setProductId(e.target.value)}
                                    required
                                />
                            </label>
                        </div>

                        <div className="input-group">
                            <label>Precio
                                <input 
                                    className="miku-input"
                                    type="number" 
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    required
                                />
                            </label>
                        </div>
                    </div>

                    <div className="input-group">
                        <label>Título
                            <input 
                                className="miku-input"
                                type="text" 
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                        </label>
                    </div>

                    <div className="input-group">
                        <label>Categoría
                            <input 
                                className="miku-input"
                                type="text" 

                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                required
                            />
                        </label>
                    </div>

                    <div className="input-group">
                        <label>Descripción
                            <input 
                                className="miku-input"
                                type="text" 
              
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            />
                        </label>
                    </div>

                    <div className="input-group">
                        <label>URL de la Imagen
                            <input 
                                className="miku-input"
                                type="text" 
                 
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    
                    <button className="btn-miku-submit" style={{ marginTop: '20px' }}>
                        Guardar Carrito
                    </button>

                </form>
            </div>
        </div>
    )
}

export default RegistrarCarritos;