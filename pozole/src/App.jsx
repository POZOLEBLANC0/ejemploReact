import Encabezado from "./encabezado.jsx";
import ContenedorCards from "./cards.jsx";
import Footer from "./footer.jsx";
import { useState } from "react";

function App() {
  const[vista,setVista]=useState('Inicio');
  console.log('Vista actual:', vista);
  return (
    <div>
      <Encabezado cambiarVista={setVista} />
      <ContenedorCards vista={vista} />
      <Footer/>
    </div>
  );
}


export default App