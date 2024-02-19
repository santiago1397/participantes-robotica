import React from 'react'
import './tutor.css'

export default function Tutor({
  tutorLastNames,
  tutorFirstNames,
  tutorCi,
  tutorHomeAddress,
  tutorHomeState,
  tutorHomeMunicipality,
  tutorHomeParish,
  tutorNumber,
  tutorLocalNumber,
  tutorEmail,
  tutorFb,
  tutorX,
  tutorYt,
  tutorIg,
  tutorOtherSM,
  tutorInstitution,
  tutorInstitutionAddress,
  tutorInstitutionState,
  tutorInstitutionMunicipality,
  tutorInstitutionParish,
  updateFields

}) {


  console.log(tutorCi)
  return (
    <div>
      <h1>
        Tutor del proyecto 
      </h1>
      <div className='inputs-wrapper'>
        <div className="input-label">
          <label htmlFor="nombres" className='bolding'>Nombres:</label>
          <input
            value={tutorFirstNames}
            onChange={e => updateFields({ tutorFirstNames: e.target.value })}
            placeholder="Nombres" className="input" name="nombres" type="text" />
        </div>

        <div className="input-label">
          <label htmlFor="apellidos" className='bolding'>Apellidos:</label>
          <input
            value={tutorLastNames}
            onChange={e => updateFields({ tutorLastNames: e.target.value })}
            type="text" placeholder='Apellidos' name="apellidos" className="input" />
        </div>
      </div>

      <div className='inputs-wrapper'>
        <div className="input-label">
          <label htmlFor="cedula" className='bolding'>CI:</label>
          <input
            value={tutorCi}
            onChange={e => updateFields({ tutorCi: e.target.value })}
            placeholder="77777" className="input" name="cedula" type="text" />
        </div>

        <div className="input-label">
          <label htmlFor="email" className='bolding'>Correo electrónico:</label>
          <input
            value={tutorEmail}
            onChange={e => updateFields({ tutorEmail: e.target.value })}
            type="email" placeholder='ejem@gmail.com' name="email" className="input" />
        </div>
      </div>

      <div className='inputs-wrapper'>
        <div className="input-label">
          <label htmlFor="mobile-phone" className='bolding'>Teléfono Celular:</label>
          <input
            value={tutorNumber}
            onChange={e => updateFields({ tutorNumber: e.target.value })}
            placeholder="0424999999" className="input" name="mobile-phone" type="text" />
        </div>

        <div className="input-label">
          <label htmlFor="phone" className='bolding'>Teléfono Habitación:</label>
          <input
            value={tutorLocalNumber}
            onChange={e => updateFields({ tutorLocalNumber: e.target.value })}
            type="text" placeholder='04121234567' name="phone" className="input" />
        </div>
      </div>

      <div className='inputs-wrapper'>
        <div className="input-label">
          <label htmlFor="direction" className='bolding'>Dirección:</label>
          <input
            value={tutorHomeAddress}
            onChange={e => updateFields({ tutorHomeAddress: e.target.value })}
            placeholder="" className="input" name="direction" type="text" />
        </div>
      </div>

      <div className='inputs-wrapper'>
        <div className="input-label">
          <label htmlFor="estado">Estado:</label>
          <input
            value={tutorHomeState}
            onChange={e => updateFields({ tutorHomeState: e.target.value })}
            placeholder="" className="input" name="estado" type="text" />
        </div>

        <div className="input-label">
          <label htmlFor="municipio">Municipio:</label>
          <input
            value={tutorHomeMunicipality}
            onChange={e => updateFields({ tutorHomeMunicipality: e.target.value })}
            type="text" placeholder='' name="municipio" className="input" />
        </div>

        <div className="input-label">
          <label htmlFor="parroquia">Parroquia:</label>
          <input
            value={tutorHomeParish}
            onChange={e => updateFields({ tutorHomeParish: e.target.value })}
            type="text" placeholder='' name="parroquia" className="input" />
        </div>
      </div>

      <div className='bolding'>
        Redes sociales (opcional):
      </div>

      <div className='inputs-wrapper'>
        <div className="input-label">
          <label htmlFor="facebook">Facebook:</label>
          <input
            value={tutorFb}
            onChange={e => updateFields({ tutorFb: e.target.value })}
            className="input" name="facebook" type="text" />
        </div>
        <div className="input-label">
          <label htmlFor="instagram">Instagram:</label>
          <input
            value={tutorIg}
            onChange={e => updateFields({ tutorIg: e.target.value })}
            className="input" name="instagram" type="text" />
        </div>
        <div className="input-label">
          <label htmlFor="x">X:</label>
          <input
            value={tutorX}
            onChange={e => updateFields({ tutorX: e.target.value })}
            className="input" name="x" type="text" />
        </div>
        <div className="input-label">
          <label htmlFor="youtube">Youtube:</label>
          <input
            value={tutorYt}
            onChange={e => updateFields({ tutorYt: e.target.value })}
            className="input" name="youtube" type="text" />
        </div>
      </div>

      <div className='inputs-wrapper'>
        <div className="input-label">
          <label htmlFor="otherSocials" >Otras:</label>
          <input
            value={tutorOtherSM}
            onChange={e => updateFields({ tutorOtherSM: e.target.value })}
            placeholder="" className="input" name="otherSocials" type="text" />
        </div>
      </div>


      <div className='inputs-wrapper'>
        <div className="input-label">
          <label htmlFor="otherSocials" className='bolding'>Nombre de la institución educativa perteneciente:</label>
          <input
            value={tutorInstitution}
            onChange={e => updateFields({ tutorInstitution: e.target.value })}
            placeholder="" className="input" name="otherSocials" type="text" />
        </div>
      </div>

      <div className='inputs-wrapper'>
        <div className="input-label">
          <label htmlFor="tutor-institucion" className='bolding'>Dirección de la institución:</label>
          <input
            value={tutorInstitutionAddress}
            onChange={e => updateFields({ tutorInstitutionAddress: e.target.value })}
            placeholder="" className="input" name="tutor-institucion" type="text" />
        </div>
      </div>

      <div className='inputs-wrapper'>
        <div className="input-label with-select">
          <label htmlFor="estado-institucion">Estado:</label>
          <select
            onChange={e => updateFields({ tutorInstitutionState: e.target.value })}
            name="estado-institucio" id="estado-institucio" placeholder='Estado' className="select" required>
            <option value="Amazonas">Amazonas</option>
            <option value="Anzoátegui">Anzoátegui</option>
            <option value="Apure">Apure</option>
            <option value="Aragua">Aragua</option>
            <option value="Barinas">Barinas</option>
            <option value="Bolívar">Bolívar</option>
            <option value="Carabobo">Carabobo</option>
            <option value="Cojedes">Cojedes</option>
            <option value="Delta Amacuro">Delta Amacuro</option>
            <option value="Distrito Capital">Distrito Capital</option>
            <option value="Falcón">Falcón</option>
            <option value="Guárico">Guárico</option>
            <option value="Lara">Lara</option>
            <option value="Mérida">Mérida</option>
            <option value="Miranda">Miranda</option>
            <option value="Monagas">Monagas</option>
            <option value="Nueva Esparta">Nueva Esparta</option>
            <option value="Portuguesa">Portuguesa</option>
            <option value="Sucre">Sucre</option>
            <option value="Táchira">Táchira</option>
            <option value="Trujillo">Trujillo</option>
            <option value="Vargas">Vargas</option>
            <option value="Yaracuy">Yaracuy</option>
            <option value="Zulia">Zulia</option>
          </select>
        </div>

        <div className="input-label">
          <label htmlFor="municipio-institucion">Municipio:</label>
          <input
            value={tutorInstitutionMunicipality}
            onChange={e => updateFields({ tutorInstitutionMunicipality: e.target.value })}
            type="text" placeholder='' name="municipio-institucion" className="input" />
        </div>

        <div className="input-label">
          <label htmlFor="parroquia-institucion">Parroquia:</label>
          <input
            value={tutorInstitutionParish}
            onChange={e => updateFields({ tutorInstitutionParish: e.target.value })}
            type="text" placeholder='' name="parroquia-institucion" className="input" />
        </div>
      </div>

    </div>
  )
}
