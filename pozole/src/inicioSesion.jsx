import { useState } from 'react';
import { useAuth } from './AuthContext'; 
import './inicioSesion.css';
import api from './services/api';

const Login = ({chVista}) => {
    const { login } = useAuth(); 

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const credenciales = { username, password };
        
        try {
            const respuesta = await api.post('/auth/login', credenciales);
            
            if (respuesta.data.token) {
                login(respuesta.data.token);
                alert('Autenticación exitosa');
                chVista('Inicio');
            } else {
                alert('Credenciales incorrectas');
            }
        } catch (error) {
            console.error('Error en la autenticación', error);
            alert('Error al iniciar sesión. Revisa tus datos.');
        }
    };
    
    return (
        <div className="inicioSesion">
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Usuario:</label>
                <input 
                    type="text" 
                    id="username" 
                    name="username" 
                    required 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                />               
                <label htmlFor="password">Contraseña:</label>
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    required 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <button type="submit">Iniciar Sesión</button>
                <button type="button">Cancelar</button>
                
                <div>
                    <input type="checkbox" id="remember" name="remember" />
                    <label htmlFor="remember">Recordar Contraseña</label>
                </div>       
                <p><a href="/registro">Regístrate</a></p>
            </form>
        </div>
    );
}

export default Login;