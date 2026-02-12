import './sucursales.css';
import Mapa from './mapa';

const branches = [
    {
        id: 1,
        company: "POZOLE Corporation",
        character: "El origen de todo",
        address: "CDMX, México",
        image : "https://cloudfront-eu-central-1.images.arcpublishing.com/prisaradio/6XQ2V2HNRRMDHDJ55MPMNBJ4E4.jpg",
        description: "El origen e pozole corporation",
        lat: 19.43545,
        lng: -99.14113
    },
    {
        id: 2,
        company: "POZOLE Corporation",
        character: "Mi casita bro",
        address: "Huauchinango, Puebla, México",
        image: "https://www.shutterstock.com/image-photo/modern-luxury-home-pool-patio-260nw-2536797209.jpg",
        description: "Mi casa",
        lat: 20.172013685180865,
        lng: -98.04592930158009
    },
    {
        id: 3,
        company: "POZOLE Corporation",
        character: "Mi uni favorita",
        address: "Xicoyork, Puebla, México",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzJaRyIzAD7W0jLZ-kwlsKYHoeY3wF3jpuxQ&s",
        description: "Mi segunda casa, mi uni",
        lat:20.237852700243277, 
        lng: -97.95723612747096
    }
];

function Sucursales() {
    return (
        <section className="branches-section">
            <h2 className="section-title">📍 Sedes Principales</h2>
            <div className="branches-grid">
                {branches.map((branch) => (
                    <article 
                        key={branch.id} 
                        className="branch-card"
                    >
                        <div className="branch-image">
                            <img src={branch.image} alt={branch.address} />
                            <div className="location-badge">📍</div>
                        </div>
                        <div className="branch-info">
                            <h3 className="company-name">{branch.company}</h3>
                            <h4 className="character-ref">{branch.character}</h4>
                            <p className="address-text">📍 {branch.address}</p>
                            <p className="description-text">{branch.description}</p>
                           
                        </div>
                        <div className="branch-map">
                            <Mapa lat={branch.lat} lng={branch.lng} nombre={branch.address} />
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Sucursales;