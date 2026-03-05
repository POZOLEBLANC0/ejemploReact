import './inicioSesion.css';

function InicioSesion(){
    return(
        <div className="inicioSesion">
            <h2>Iniciar Sesión</h2>
            <form>
                <label htmlFor="username">Usuario:</label>
                <input type="text" id="username" name="username" required />
                <label htmlFor="password">Contraseña:</label>
                <input type="password" id="password" name="password" required />
                <button type="submit">Iniciar Sesión</button>
                <button type="button">Cancelar</button>
             <label htmlFor="remember">Recordar Contraseña</label>
            <input type="checkbox" id="remember" name="remember"/>
            <li><a href="">Registrate</a></li>
           
            
            </form>
        </div>
    );
}

export default InicioSesion;