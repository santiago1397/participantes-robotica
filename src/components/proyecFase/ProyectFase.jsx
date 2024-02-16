import React from 'react'
import './proyectfase.css'

export default function ProyectFase() {
  return (
    <div>
      <h1>
        Fase o estado actual del proyecto:
      </h1>

      (marque con una X y especifique)
      <div className='inputs-wrapper'>
        <div className="input-label">
          <label htmlFor="nombres">Nombres:</label>
          <input placeholder="Nombres" className="input" name="nombres" type="text" />
        </div>

        <div className="input-label">
          <label htmlFor="apellidos">Apellidos:</label>
          <input type="text" placeholder='Apellidos' name="apellidos" className="input" />
        </div>
      </div>



    </div>
  )
}
