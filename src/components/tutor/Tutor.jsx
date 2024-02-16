import React from 'react'
import './tutor.css'

export default function Tutor() {
  return (
    <div>
      <h1>
      Tutor del proyecto de robótica
      </h1>
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

      <div className='inputs-wrapper'>
        <div className="input-label">
          <label htmlFor="cedula">CI:</label>
          <input placeholder="77777" className="input" name="cedula" type="text" />
        </div>

        <div className="input-label">
          <label htmlFor="email">Correo electrónico:</label>
          <input type="email" placeholder='ejem@gmail.com' name="email" className="input" />
        </div>
      </div>

      <div className='inputs-wrapper'>
        <div className="input-label">
          <label htmlFor="mobile-phone">Teléfono Celular:</label>
          <input placeholder="0424999999" className="input" name="mobile-phone" type="text" />
        </div>

        <div className="input-label">
          <label htmlFor="phone">Teléfono Habitación:</label>
          <input type="text" placeholder='04121234567' name="phone" className="input" />
        </div>
      </div>

      <div className='inputs-wrapper'>
        <div className="input-label">
          <label htmlFor="direction">Dirección:</label>
          <input placeholder="" className="input" name="direction" type="text" />
        </div>
      </div>

      <div className='inputs-wrapper'>
        <div className="input-label">
          <label htmlFor="estado">Estado:</label>
          <input placeholder="" className="input" name="estado" type="text" />
        </div>

        <div className="input-label">
          <label htmlFor="municipio">Municipio:</label>
          <input type="text" placeholder='' name="municipio" className="input" />
        </div>

        <div className="input-label">
          <label htmlFor="parroquia">Parroquia:</label>
          <input type="text" placeholder='' name="parroquia" className="input" />
        </div>
      </div>

      Redes sociales:

      <div className='inputs-wrapper'>
        <div className="input-label">
          <label htmlFor="facebook">Facebook:</label>
          <input className="input" name="facebook" type="text"  />
        </div>
        <div className="input-label">
          <label htmlFor="instagram">Instagram:</label>
          <input className="input" name="instagram" type="text"  />
        </div>
        <div className="input-label">
          <label htmlFor="x">X:</label>
          <input className="input" name="x" type="text"  />
        </div>
        <div className="input-label">
          <label htmlFor="youtube">Youtube:</label>
          <input className="input" name="youtube" type="text"  />
        </div>
      </div>

    </div>
  )
}
