import React, { useState, useEffect } from 'react';
import './usuarios.css';
import api from './services/api';
import RegistrarUsuarios from './registrarUsuarios';

function Usuarios() {
const [usuarios, setUsuarios] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  const obtenerUsuarios= async() => {
    try{
      const response = await api.get('users');
      setUsuarios(response.data);
      }catch(error){
        console.error("Error al obtener usuarios:", error);
      }finally {
        setLoading(false);
      }
  };
  obtenerUsuarios();
},[])

if(loading){
  return <p>Cargando usuarios...</p>;
}
    return (
        <div className="tabla-usuarios-container">
              <RegistrarUsuarios />
            <h2>Usuarios</h2>
          
            <table className="tabla-usuarios">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apellidos</th>
                        <th>Direccion</th>
                        <th>Telefono</th>
                        <th>Correo</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map(usuario => (
                        <tr key={usuario.id}>
                            <td>{usuario.id}</td>
                            <td>{(usuario.name && (usuario.name.firstname || usuario.name.first)) || usuario.username || usuario.email || '—'}</td>
                            <td>{(usuario.name && usuario.name.lastname) || '—'}</td>
                            <td>{(usuario.address && (usuario.address.city || usuario.address.street)) || '—'}</td>
                            <td>{usuario.phone || usuario.telephone || '—'}</td>
                            <td>{usuario.email || usuario.correo || '—'}</td>
                            <td>
                                <button className="btneditar">Editar</button>
                            </td>
                            <td>
                                <button className="btneliminar" onClick={() => removeUsuario(usuario.id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
  const removeUsuario = async (usuarioId) => {
        try {
            const response = await api.delete(
                `/users/${usuarioId}`
            );
            console.log("Usuario eliminado:", response.data);
            alert("Usuario eliminado exitosamente");
        } catch (error) {
            console.error("Error al eliminar usuario:", error);
            alert("Error al eliminar usuario");
        }
    }
export default Usuarios;
