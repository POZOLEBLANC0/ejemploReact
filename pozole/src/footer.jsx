import Mapa from './mapa'
import './footer.css'
function Footer() {
    return (
        <footer className="footer-container">
            <p>© 2024 Pozole Inc. Todos los derechos reservados.</p>
            <Mapa
                lat={20.172013685180865}
                lng={-98.04592930158009}
                nombre="Pozole Central"
            />
        </footer>
    )
}

export default Footer  