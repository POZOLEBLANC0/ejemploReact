import Logos from './assets/logo.jpg';
import './Encabezado.css'; 


function Encabezado() {
    return (
        <header className="header-container">
            <Logotipo />
            <Menu />
            <Redes />
        </header>
    )
}

function Logotipo() {
    return (
        <div className="logo-container">
            <img src={Logos} alt="Logotipo" className="logo-img" />
        </div>
    )
}

function Menu() {
    return (
        <nav className="menu-container">
            <ul className="menu-list">
                <li>Inicio</li>
                <li>Acerca de</li>
                <li>Productos</li>
                <li>Contacto</li>
                <li>Sucursales</li>
            </ul>
        </nav>
    )
}

function Redes() {
    return (
        <div className="redes-container">
            <ul className="redes-list">
                <li><img src="/src/assets/feibu.png" alt="Facebook" className="redes-img" /></li>
                <li><img src="/src/assets/ig.png" alt="Instagram" className="redes-img" /></li>
                <li><img src="/src/assets/x.avif" alt="Twitter" className="redes-img" /></li>
                <li><img src="/src/assets/link.png" alt="Linkedin" className="redes-img" /></li>
            </ul>
        </div>
    )
}

export default Encabezado

