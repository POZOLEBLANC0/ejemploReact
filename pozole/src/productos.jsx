
import './productos.css';

function Productos() {
  const servicios = [
    {
      id: 1,
      titulo: "Fisioterapia Deportiva",
      imagen: "./img/fisio-deportiva.jpg", // Reemplaza con tus rutas
      desc: "Recuperación de lesiones y optimización del rendimiento para atletas.",
      precio: 45,
      esPopular: false
    },
    {
      id: 2,
      titulo: "Terapia Manual",
      imagen: "./img/terapia-manual.jpg",
      desc: "Tratamiento directo para contracturas y bloqueos articulares.",
      precio: 60,
      esPopular: true
    },
    {
      id: 3,
      titulo: "Rehabilitación Post-Op",
      imagen: "./img/rehabilitacion.jpg",
      desc: "Acompañamiento profesional tras intervenciones quirúrgicas.",
      precio: 55,
      esPopular: false
    }
  ];

  return (
    <div className="catalogo-container">
      <header className="catalogo-header">
        <h1>Catálogo de Servicios</h1>
        <p>Selecciona el tratamiento especializado que tu cuerpo necesita</p>
      </header>

      <div className="catalogo-grid">
        {servicios.map((s) => (
          <div key={s.id} className={`card ${s.esPopular ? 'popular' : ''}`}>
            {s.esPopular && <span className="tag">Más Solicitado</span>}
            
            <div className="card-image">
              <img src={s.imagen} alt={s.titulo} />
            </div>

            <div className="card-content">
              <h2>{s.titulo}</h2>
              <p>{s.desc}</p>
              
              <div className="card-footer">
                <span className="price">${s.precio}</span>
                <button className="btn-reservar">Reservar Cita</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Productos;