import './categorias.css';
import { useEffect, useState } from "react";
import api from "./services/cat";

function Categorias() {
    const [categorias, setCategorias] = useState([]); 
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const obtenerCategorias = async () => {
            try {
                const response = await api.get("categories");
                setCategorias(response.data.categories); 
            } catch (error) {
                console.error("Error al obtener categorias:", error);
            } finally {
                setLoading(false);
            }
        };
        obtenerCategorias();
    }, []);
    
    
    if (loading) {
        return <p>Cargando Categorias...</p>;
    }

    return (
        <div className="productos-wrapper">

            <header className="header-titulo">
                <h1 className="miku-main-title">Nuestro Catálogo</h1>
            </header>

            <main className="classMain">
                {categorias.map((category) => (
                    <article className="product-card" key={category.idCategory}>
                        <div className="product-image-container">
                            <img src={category.strCategoryThumb} alt={category.strCategory} />
                        </div>
                        
                        <h2 className="product-title">{category.strCategory}</h2>
                        <span className="product-category">{category.strCategoryDescription}</span>
                        <h4 className="product-id">{category.idCategory}</h4>
                        
                        
                    </article>
                ))}
            </main>
        </div>
    );
}

export default Categorias;