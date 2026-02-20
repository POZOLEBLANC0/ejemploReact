import React from 'react';
import './usuarios.css';
import api from './services/api';

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
                            <td>{usuario.nombre}</td>
                            <td>{usuario.apellidos}</td>
                            <td>{usuario.direccion}</td>
                            <td>{usuario.telefono}</td>
                            <td>{usuario.correo}</td>
                            <td>
                                <button className="btneditar">Editar</button>
                            </td>
                            <td>
                                <button className="btneliminar">Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Usuarios;
