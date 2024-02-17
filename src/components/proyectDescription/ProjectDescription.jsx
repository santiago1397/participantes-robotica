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
            5. Área de interés del proyecto. Seleccione:
          </label>
          <div>
          <input 
          onClick={e => updateFields({ projectInterestArea: e.target.value })}
          type="radio" id="security" name="interestArea" value="seguridad" />
          <label for="security"> Seguridad</label><br />
          <input 
          onClick={e => updateFields({ projectInterestArea: e.target.value })}
          type="radio" id="industry" name="interestArea" value="industrial" />
          <label for="industry"> Industrial</label><br />
          <input 
          onClick={e => updateFields({ projectInterestArea: e.target.value })}
          type="radio" id="service" name="interestArea" value="servicio" />
          <label for="service"> Servicio</label><br />
          <input 
          onClick={e => updateFields({ projectInterestArea: e.target.value })}
          type="radio" id="health" name="interestArea" value="salud" />
          <label for="health"> Salud</label><br />
          <input 
          onClick={e => updateFields({ projectInterestArea: e.target.value })}
          type="radio" id="academic" name="interestArea" value="academico" />
          <label for="academic"> Académico</label><br />
          <input 
          onClick={e => updateFields({ projectInterestArea: e.target.value })}
          type="radio" id="Mecánica" name="interestArea" value="Mecánica" />
          <label for="Mecánica"> Mecánica</label><br />
          <input 
          onClick={e => updateFields({ projectInterestArea: e.target.value })}
          type="radio" id="Electricidad" name="interestArea" value="Electricidad" />
          <label for="Electricidad"> Electricidad</label><br />
          <input 
          onClick={e => updateFields({ projectInterestArea: e.target.value })}
          type="radio" id="ObrasCiviles" name="interestArea" value="Obras Civiles" />
          <label for="ObrasCiviles"> Obras Civiles</label><br />
          <input 
          onClick={e => updateFields({ projectInterestArea: e.target.value })}
          type="radio" id="Mecatrónica" name="interestArea" value="Mecatrónica" />
          <label for="Mecatrónica"> Mecatrónica</label><br />
          <input 
          onClick={e => updateFields({ projectInterestArea: e.target.value })}
          type="radio" id="Informática" name="interestArea" value="Informática" />
          <label for="Informática"> Informática</label><br />
          <input 
          onClick={e => updateFields({ projectInterestArea: e.target.value })}
          type="radio" id="Agroalimentaria" name="interestArea" value="Agroalimentaria" />
          <label for="Agroalimentaria"> Agroalimentaria</label><br />
          <input 
          onClick={e => updateFields({ projectInterestArea: e.target.value })}
          type="radio" id="Robótica" name="interestArea" value="Robótica" />
          <label for="Robótica"> Robótica</label><br />
          <input 
          onClick={e => updateFields({ projectInterestArea: e.target.value })}
          type="radio" id="other" name="interestArea" value="otro" />
          <label for="other"> Otro</label><br />
          </div>
        </div>
      </div>



    </div>
  )
}
