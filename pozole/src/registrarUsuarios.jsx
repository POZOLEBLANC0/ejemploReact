import { useState, useEffect } from 'react'; 
import api from './services/api';
import PropTypes from 'prop-types'; 
import './registrarUsuarios.css';

function RegistrarUsuarios({ usuarioEditado, limpiarSeleccion, onActualizacionExitosa }) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (usuarioEditado) {
            setUsername(usuarioEditado.username);
            setEmail(usuarioEditado.email);
            setPassword('');
        }
        else {
           resetForm();
        }
    }, [usuarioEditado]);

    const resetForm = () => {
        setUsername('');
        setEmail('');
        setPassword('');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const nuevoUsuario = { username, email, password };
        try {
            if(usuarioEditado){
                const respuesta = await api.put(`/users/${usuarioEditado.id}`, nuevoUsuario);
                console.log('¡Usuario actualizado!: ', respuesta.data);
                alert('Usuario actualizado exitosamente');
                limpiarSeleccion();
            }else{
                const respuesta = await api.post('/users', nuevoUsuario);
                console.log('¡Usuario registrado!: ', respuesta.data);
                alert('Usuario registrado exitosamente');
            }

            resetForm();
            if (onActualizacionExitosa) onActualizacionExitosa();
        } catch (error) {
            alert('Error al registrar usuario');
        }
    }

    return (
        <div>
            <h2>{usuarioEditado ? 'Editar Usuario' : 'Registrar Usuario'}</h2> {}
            <form onSubmit={handleSubmit}>
                <label>Nombre de Usuario
                    <input type="text"
                    placeholder = "Nombre de Usuario"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} />
                </label>
                <br />
                <label>Email
                    <input type="email"
                        placeholder = "Correo Electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </label>
                <br />
                <label>Contraseña
                    <input type="password"
                    placeholder = "Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </label>
                <br />
                <button>{usuarioEditado ? 'Actualizar Usuario' : 'Guardar Usuario'}</button>
            </form>
        </div>
    )
}

RegistrarUsuarios.propTypes = {
    usuarioEditado: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), 
        username: PropTypes.string,
        email: PropTypes.string
    }),
    limpiarSeleccion: PropTypes.func.isRequired,
    onActualizacionExitosa: PropTypes.func
};

export default RegistrarUsuarios;