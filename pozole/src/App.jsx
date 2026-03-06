import Encabezado from "./encabezado.jsx";
import ContenedorCards from "./cards.jsx";
import Footer from "./footer.jsx";
import { useState } from "react";
import { AuthProvider } from "./AuthContext.jsx";


function App() {
  const [vista, setVista] = useState('Inicio');
  console.log('Vista actual:', vista);
  return (
    <div>
      <AuthProvider>
        <Encabezado cambiarVista={setVista} />
        <ContenedorCards vista={vista} chVista={setVista} />
      </AuthProvider>

      <Footer />
    </div>
  );
}

export default App;