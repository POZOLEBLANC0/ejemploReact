function Expresiones() {
    const nombre = "Mario";
const apellido = "Banda";

    return(
        <div>
            <h2>Expresiones</h2>
            <h3>Mi nombre es  {nombre}  {apellido}</h3>
            {lista()}
        </div>
    )  
}

function lista(){
    const users=[
        {id:1,name:'Mario', role:'admin'},
        {id:2,name:'Poncho', role:'limpiador de Baños'},
        {id:3,name:'Aaron', role:'Esclavo'}];
    return(
        <div>   
          <table>
            <tbody>
                <tr>
                    <th>Nombre  |</th>
                    <th>Rol</th>
                </tr>
                <tr>
                    {users.map(function(user){
                        return(
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.role}</td>
                            </tr>
                        )
                    })}
                </tr>
            </tbody>
          </table>
        </div>
    )
}

export default Expresiones