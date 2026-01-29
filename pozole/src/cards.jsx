import './cards.css'; 
function Cards() {
    return (
        <div className="cards-container">
            <Card1 />
            <Card2 />
            <Card3 />
            <Card4 />
        </div>
    )
}


function Card1() {
    return (
        <div className="card1">

            <h3>Lesiones Comunes</h3>
            <p>Información sobre las lesiones más comunes y cómo tratarlas.</p>
        </div>
    )

}

function Card2() {
    return (
        <div className="card2">
            <h3>Autocuidado</h3>
            <p>Consejos y técnicas para el autocuidado físico y mental.</p>
        </div>
    )
}

function Card3() {
    return (
        <div className="card3">
            <h3>Deporte y Ejercicio</h3>
            <p>Guías para mantenerse activo y saludable a través del deporte.</p>
        </div>
        )
    }
function Card4() {
    return (
        <div className="card4">
            <h3>Alimentacion</h3>
            <p>Información específica sobre la alimentación saludable.</p>
        </div>
        )
    }

export default Cards