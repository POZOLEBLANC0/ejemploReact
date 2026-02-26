import React, { useState } from 'react';
import api from './services/api';
import './registrarUsuarios.css';


function RegistrarUsuarios() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const nuevoUsuario = { username, email, password };
        try {
            const response = await api.post('users', nuevoUsuario);
            console.log('Usuario registrado:', response.data);
            alert('¡Usuario registrado exitosamente!');

            // Opcional: Limpiar el formulario
            setUsername(''); setEmail(''); setPassword('');
            
        } catch (error) {
            alert('Error al registrar usuario');
        }
    }

    return (
        <div>
            <h2>Registrar Usuario</h2>
            <form onSubmit={handleSubmit}>
                <label>Nombre de Usuario
                    <input type="text" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}/>
                </label>

                <br />

                <label>Email
                    <input type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                </label>

                <br />

                <label>Contraseña
                    <input type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                </label>
                
                <br />

                <button>Guardar Usuario</button>

            </form>
        </div>
    )
}

export default RegistrarUsuarios;