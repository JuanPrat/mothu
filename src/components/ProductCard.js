import React from 'react';
import '../App.css';
import '../styles/product-card-style.css'
const ProductCard = () => {
    return (
            <div className="card-container">
                <h1>torta maria luisa de arequipe</h1>
                <img>
                </img>
                <p>Descripcion cortaDescripcion cortaDescripcion cortaDescripcion cortaDescripcion cortaDescripcion corta</p>
                <h2>12000$</h2>
                <div className="buttons-container">
                    <button>Haber Yo veo</button>
                    <button>Agregar al carrito</button>
                </div>
            </div>
    )
}

export default ProductCard;