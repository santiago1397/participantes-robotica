import React from 'react'
import './projectdescription.css'

export default function ProjectDescription({
  projectMaterials,
  projectElectronics,
  projectSoftware,
  projectPhasesDevelop,
  projectInterestArea,
  updateFields
}) {
  return (
    <div>
      <h1>
        Breve descripción de construcción del proyecto de robótica
      </h1>
      <div className='inputs-wrapper spacing'>
        <div className="input-label bolding">
          <label htmlFor="objective ">
            1. Materiales Utilizados:
          </label>
          <textarea 
          value={projectMaterials}
          onChange={e => updateFields({ projectMaterials: e.target.value })}
          placeholder="" name="objective" type="text" rows={4} />
        </div>
      </div>

      <div className='inputs-wrapper spacing'>
        <div className="input-label bolding">
          <label htmlFor="objective">
            2. Dispositivos electrónicos y mecanismos implementados
          </label>
          <textarea 
          value={projectElectronics}
          onChange={e => updateFields({ projectElectronics: e.target.value })}
          placeholder="" name="objective" type="text" rows={4}/>
        </div>
      </div>

      <div className='inputs-wrapper spacing'>
        <div className="input-label bolding">
          <label htmlFor="objective">
            3. Software y lenguaje de programación
          </label>
          <textarea 
          value={projectSoftware}
          onChange={e => updateFields({ projectSoftware: e.target.value })}
          placeholder="" name="objective" type="text" rows={4}  />
        </div>
      </div>

      <div className='inputs-wrapper spacing'>
        <div className="input-label bolding">
          <label htmlFor="objective">
            4. Desarrollo de las etapas
          </label>
          <textarea 
          value={projectPhasesDevelop}
          onChange={e => updateFields({ projectPhasesDevelop: e.target.value })}
          placeholder="" name="objective" type="text" rows={4} />
        </div>
      </div>

      <div className='inputs-wrapper'>
        <div className="input-label">
          <label htmlFor="objective" className="bolding">
            5. Área de interés del proyecto de robotica marque con una X:
          </label>
          <div>
          <input 
          onClick={e => {updateFields({ projectPhasesDevelop: e.target.value });console.log(e)}}
          type="checkbox" id="security" name="security" value="seguridad" />
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
