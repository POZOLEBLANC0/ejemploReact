import React, { useState } from 'react';
import api from './services/api';
import './registrarProductos.css';

function RegistrarProductos() {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const nuevoProducto = { title, price, description, category, image };
        try {
            const response = await api.post('products', nuevoProducto);
            console.log('Producto registrado:', response.data);
            alert('¡Producto registrado exitosamente!');
            // Opcional: Limpiar el formulario
            setTitle(''); setPrice(''); setDescription(''); setCategory(''); setImage('');
        } catch (error) {
            alert('Error al registrar producto');
        }
    }

    return (
        <div className="form-wrapper">
            <div className="card">
                <h2 className="title">Registrar Producto</h2>
                
                <form className="form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>Título</label>
                        <input
                            className="input"
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>

                    <div className="input-group">
                        <label>Precio</label>
                        <input
                            className="input"
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>

                    <div className="input-group">
                        <label>Descripción</label>
                        <textarea
                            className="input-textarea"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>

                    <div className="input-group">
                        <label>Categoría</label>
                        <input
                            className="input"
                            type="text"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        />
                    </div>

                    <div className="input-group">
                        <label>URL de Imagen</label>
                        <input
                            className="input"
                            type="text"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                        />
                    </div>

                    <button className="btn-submit" type="submit">
                         Guardar Producto 
                    </button>
                </form>
            </div>
        </div>
    );
}

export default RegistrarProductos;