import './promociones.css'

function Promociones(props) {
 let user  = props
 console.info(user);

if(user.name!=""){
    return (
        <div className="promosDiv">
            <h2>Seccion de Promociones </h2>
            <p>En esta seccion se da a conocer la informacion de las promos</p>
            
        </div>
    )
}
return (
    <div> <h2>No hay datos</h2> </div>
)

}

export default Promociones;