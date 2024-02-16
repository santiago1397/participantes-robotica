import React from 'react'
import './proyectdata.css'

export default function ProyectData() {
  return (
    <div>
      <h1>
        Datos del proyecto de robótica
      </h1>
      <div className='inputs-wrapper'>
        <div className="input-label bolding">
          <label htmlFor="titulo">Título:</label>
          <input placeholder="titulo del proyecto" className="input" name="titulo" type="text" />
        </div>
      </div>

      <div className='inputs-wrapper'>
        <div className="input-label bolding">
          <label htmlFor="objective">Objetivo General:</label>
          <input placeholder="objetivo" className="input" name="objective" type="text" />
        </div>
      </div>

      <p className="bolding" >
        Describa el impacto de su solución de robótica para la sociedad:
      </p>

      <div className='inputs-wrapper spacing'>
        <div className="input-label">
          <label htmlFor="objective">
            1. ¿Cuál es el problema que su proyecto esta resolviendo?
          </label>
          <textarea placeholder="especifique" name="objective" type="text" rows={4} />
        </div>
      </div>

      <div className='inputs-wrapper spacing'>
        <div className="input-label">
          <label htmlFor="objective">
            2. ¿Cuál es el problema que su proyecto esta resolviendo?
          </label>
          <textarea placeholder="especifique" name="objective" type="text" rows={4} />
        </div>
      </div>

      <div className='inputs-wrapper spacing'>
        <div className="input-label">
          <label htmlFor="objective">
            3. ¿De que forma su solución robótica resolverá el problema que establecieron?
          </label>
          <textarea placeholder="especifique" name="objective" type="text" rows={4} />
        </div>
      </div>

      <div className='inputs-wrapper spacing'>
        <div className="input-label">
          <label htmlFor="objective">
            4. ¿Por qué su proyecto es importante?
          </label>
          <textarea placeholder="especifique" name="objective" type="text" rows={4} />
        </div>
      </div>


    </div>
  )
}
