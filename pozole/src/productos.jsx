import React, { useState, useEffect } from 'react';
import api from './services/api';
import './productos.css';
import RegistrarProductos from './registrarProducto';

function Productos() {
const [productos, setProductos] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  const obtenerProductos= async() => {
    try{
      const response = await api.get('products');
      setProductos(response.data);
      }catch(error){
        console.error("Error al obtener productos:", error);
      }finally {
        setLoading(false);
      }
  };
  obtenerProductos();
},[])

if(loading){
  return <p>Cargando productos...</p>;
}
return(
  <div>
      <RegistrarProductos/>
    <main className='classMain'>
      <header>
        <h1>Nuestro Catalogo</h1>
      </header>
      {productos.map((producto)=>(
        <article key={producto.id}>
            <p>{producto.title}</p>
            <p>{producto.description}</p>
            <p>{producto.price}</p>
            <p>{producto.category}</p>
            <img src={producto.image} alt={producto.title} />

        </article>
      ))}


    </main>

  </div>

)

}
export default Productos;