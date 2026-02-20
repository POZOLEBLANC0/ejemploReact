import Logos from './assets/logo.jpg';
import './Encabezado.css'; 
import iconoFacebook from './assets/feibu.png';
import iconoInstagram from './assets/ig.png';
import iconoTwitter from './assets/x.avif';
import iconoLink from './assets/link.png';
import PropTypes from 'prop-types';
import Clima from './clima';


function Encabezado({ cambiarVista }) {
    return (
        <header className='header-container'>
            <Logo />
            <nav>
                <Menu cambiarVista={cambiarVista} />
            </nav>
            <RedesSociales/>
        </header>
    );
}

function Logo() {
    return(
        <div className='logo-container'>
            <img src={Logos} alt="main-logo" className="logo-img" />
        </div>
    );
}

function Menu({cambiarVista}){
    return(
        <div className='menuDiv'>
            <ul className="menu-list">
                <li><button type="button" className="menuButton" onClick={() => { console.log('menu click: Inicio'); cambiarVista('Inicio'); }}>Inicio</button></li>
                <li><button type="button" className="menuButton" onClick={() => { console.log('menu click: AcercaDe'); cambiarVista('AcercaDe'); }}>Acerca de</button></li>
                <li><button type="button" className="menuButton" onClick={() => { console.log('menu click: Productos'); cambiarVista('Productos'); }}>Productos</button></li>
                <li><button type="button" className="menuButton" onClick={() => { console.log('menu click: Sucursales'); cambiarVista('Sucursales'); }}>Sucursales</button></li>
                <li><button type="button" className="menuButton" onClick={() => { console.log('menu click: Contacto'); cambiarVista('Contacto'); }}>Contacto</button></li>
                <li><button type="button" className="menuButton" onClick={() => { console.log('menu click: Usuario'); cambiarVista('Usuario'); }}>Usuarios</button></li>          
            </ul>
        </div>
    )
}

function RedesSociales(){
    return(
        <div className='redesDiv'>
            <ul className="redes-list">
                <li><img src={iconoFacebook} alt="Facebook" /></li>
                <li><img src={iconoInstagram} alt="Instagram" /></li>
                <li><img src={iconoTwitter} alt="Twitter" /></li>
                <li><img src={iconoLink} alt="LinkedIn" /></li>
            </ul>
            <Clima/>
        </div>
    )
}


Menu.propTypes = {
    cambiarVista: PropTypes.func.isRequired
}

Encabezado.propTypes = {
    cambiarVista: PropTypes.func.isRequired
}

export default Encabezado

