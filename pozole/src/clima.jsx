import { useEffect, useState } from "react";
 import './clima.css';

function Clima(){ const [clima, setClima] = useState(null); const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY; const lat= 19.4326; const lng= -99.1332;

useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric&lang=es`)
    .then((res) => res.json())
    .then((data) =>{
        setClima(data);
        console.log("Datos del clima:", data);
    })
    .catch((error) => console.error("Error al obtener el clima:", error));
},[])
return(
    <div className="divClima">
        {
        clima ? (
            <>
                <p>{clima.name}</p>
                <p>Temp: {clima.main.temp}°C</p>
                <p>Humedad: {clima.main.humidity}%</p>
                <p>{clima.weather[0].description}</p>

            </>
        ) : (
            <p>Cargar clima...</p>
        )
        }
    </div>
)
}
export default Clima;