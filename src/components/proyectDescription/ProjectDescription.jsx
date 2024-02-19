import React, { useState } from 'react'
import './projectdescription.css'

export default function ProjectDescription({
  projectMaterials,
  projectElectronics,
  projectSoftware,
  projectPhasesDevelop,
  projectInterestArea,
  updateFields
}) {
  const [devices, setDevices] = useState(false)
  const [software, setSoftware] = useState(false)




  return (
    <div>
      <h1>
        Descripción de proyecto
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
          <div>
            <input
              onClick={e => setDevices(true)}
              type="radio" id="security" name="deviseUse" value="true" />
            <label for="security"> si</label><br />
            <input
              onClick={e => setDevices(false)}
              type="radio" id="security" name="deviseUse" value="false" />
            <label for="security"> no</label><br />
          </div>
          {
            devices ?

              <textarea
                value={projectElectronics}
                onChange={e => updateFields({ projectElectronics: e.target.value })}
                placeholder="" name="objective" type="text" rows={4} />
              :
              ""
          }
        </div>
      </div>

      <div className='inputs-wrapper spacing'>
        <div className="input-label bolding">
          <label htmlFor="objective">
            3. Software y lenguaje de programación
          </label>

          <div>
            <input
              onClick={e => setSoftware(true)}
              type="radio" id="security" name="deviseUse" value="true" />
            <label for="security"> si</label><br />
            <input
              onClick={e => setSoftware(false)}
              type="radio" id="security" name="deviseUse" value="false" />
            <label for="security"> no</label><br />
          </div>
          {
            software ?

              <textarea
                value={projectSoftware}
                onChange={e => updateFields({ projectSoftware: e.target.value })}
                placeholder="" name="objective" type="text" rows={4} />
              :
              ""
          }

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
