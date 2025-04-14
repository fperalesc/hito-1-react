import React from 'react'
import './cardpizza.css'

export default function Cardpizza({name,price,ingredients,img}) {
  return (
    <div className="card">
       <img className="imagen" src={img} alt="" /> 
       <div id="div-pizza"><h2 id="h2-pizza">Pizza {name}</h2></div>
       <div className="div-ingredientes">
        <span id="span-ingredientes">Ingredientes:</span>
        <p><span>🍕</span>{ingredients.join(", ")}</p>
       </div>
       <div className="div-precio">
        <h2>Precio: ${price.toLocaleString('es-CL')}</h2>
        <span className="span-btn">
            <button className="btn-card1">Ver Más 👀</button>
            <button className="btn-card2">Añadir 🛒</button>
        </span>
       </div>

    </div>
  )
}
