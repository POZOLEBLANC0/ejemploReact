import Encabezado from "./encabezado"   
import Expresiones from "./expresiones"
import Cards from "./cards"
import Footer from "./footer"
import Promociones from "./promociones"


function App() {
  return (
    <div><Encabezado/>
      <Expresiones/>
      <Cards/>
      <Promociones name= "Gadiel"/>
       <Footer/>
    </div>
 
  )
}

export default App