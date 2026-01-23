import Logos from './assets/logo.jpg';

function Encabezado(){
    return (
        <div>
            <Logotipo/>
            <Menu/>
        </div>
    )
}
function Logotipo(){
   return(
    <div>
        <img src={Logos} alt="Logotipo"/>
    </div>      
   )
}

function Menu(){    
    return(
        <div>     
            <ul>
                <li>Inicio</li>
                <li>Acerca de</li>
                <li>Productos</li>
                <li>Contacto</li>
                <li>Sucursales</li>
            </ul>
        </div>
    )
}

function redes(){
    return(
        <div>
            <ul>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Linkedin</li>
            </ul>
        </div>
    )
}

export default Encabezado
