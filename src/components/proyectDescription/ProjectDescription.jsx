import React from 'react'
import './projectdescription.css'

export default function ProjectDescription() {
  return (
    <div>
      <h1>
        Breve descripción de construcción del proyecto de robótica
      </h1>
      <div className='inputs-wrapper'>
        <div className="input-label">
          <label htmlFor="objective bolding">
            1. Materiales Utilizados:
          </label>
          <textarea placeholder="" name="objective" type="text" />
        </div>
      </div>

      <div className='inputs-wrapper'>
        <div className="input-label bolding">
          <label htmlFor="objective">
            2. Dispositivos electrónicos y mecanismos implementados
          </label>
          <textarea placeholder="" name="objective" type="text" />
        </div>
      </div>

      <div className='inputs-wrapper'>
        <div className="input-label bolding">
          <label htmlFor="objective">
            3. Software y lenguaje de programación
          </label>
          <textarea placeholder="" name="objective" type="text" />
        </div>
      </div>

      <div className='inputs-wrapper'>
        <div className="input-label bolding">
          <label htmlFor="objective">
            4. Desarrollo de las etapas
          </label>
          <textarea placeholder="" name="objective" type="text" />
        </div>
      </div>

      <div className='inputs-wrapper'>
        <div className="input-label bolding">
          <label htmlFor="objective">
            5. Área de interes del proyecto de robotica marque con una X:
          </label>
          <div>
          <input type="checkbox" id="security" name="security" value="seguridad" />
          <label for="security"> Seguridad</label><br />
          <input type="checkbox" id="industry" name="industry" value="industrial" />
          <label for="industry"> Industrial</label><br />
          <input type="checkbox" id="service" name="service" value="servicio" />
          <label for="service"> Servicio</label><br />
          <input type="checkbox" id="health" name="health" value="salud" />
          <label for="health"> Salud</label><br />
          <input type="checkbox" id="academic" name="academic" value="academico" />
          <label for="academic"> Académico</label><br />
          <input type="checkbox" id="other" name="other" value="otro" />
          <label for="other"> Otro</label><br />
          </div>
        </div>
      </div>



    </div>
  )
}
