import './cards.css'; 
import Lesiones from './assets/lesiones.jpg';
import Autocuiaddo from './assets/autocuidado.jpg';
import Deporte from './assets/deporte.jpg';
import Alimentacion from './assets/alimentacion.jpg';

function Cards() {
    return (
        <div className="cards-container">
            <Card1 name = 'Lesiones' descripcion ='Dolor de rodilla'/>
            <Card2 name='Autocuidado' descripcion='Meditacion'/>
            <Card3 name ='Deporte' descripcion='Fubol'/>
            <Card4 name='Alimentacion' descripcion='Comida' saludarfunc = {saludar}/>
        </div>
    )
}


function Card1(props) {
    return (
        <div className="card1">
            <img src={Lesiones} alt={props.name} className="card-image" />
            <h3>{props.name}</h3>
            <p>{props.descripcion}</p>
        </div>
    )

}

function Card2(props) {
    return (
        <div className="card2">
            <img src={Autocuiaddo} alt={props.name} className="card-image" />
            <h3>{props.name}</h3>
            <p>{props.descripcion}</p>
        </div>
    )
}

function Card3(props) {
    return (
        <div className="card3">
            <img src={Deporte} alt={props.name} className="card-image" />
            <h3>{props.name}</h3>
            <p>{props.descripcion}</p>
        </div>
        )
    }
function Card4(props) {
    return (
        <div className="card4">
            <img src={Alimentacion} alt={props.name} className="card-image" />
            <h3>{props.name}</h3>
            <p>{props.descripcion}</p>
            <p>{props.saludarfunc()}</p>
        </div>
        )
    }

function saludar(){
    return(
        <div>
            <h2>Hola tonotos</h2>
        </div>
    )
}

export default Cards