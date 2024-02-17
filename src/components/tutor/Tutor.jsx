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
  updateFields

}) {


  console.log(tutorCi)
  return (
    <div>
      <h1>
        Tutor del proyecto de robótica
      </h1>
      <div className='inputs-wrapper'>
        <div className="input-label">
          <label htmlFor="nombres" className='bolding'>Nombres:</label>
          <input 
          value={tutorFirstNames}
          onChange={e => updateFields({ tutorFirstNames: e.target.value })}
          placeholder="Nombres"  className="input" name="nombres" type="text" />
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
          onChange={e => updateFields({tutorEmail: e.target.value })}
          type="email" placeholder='ejem@gmail.com' name="email" className="input" />
        </div>
      </div>

      <div className='inputs-wrapper'>
        <div className="input-label">
          <label htmlFor="mobile-phone" className='bolding'>Teléfono Celular:</label>
          <input 
          value={tutorNumber}
          onChange={e => updateFields({tutorNumber: e.target.value })}
          placeholder="0424999999" className="input" name="mobile-phone" type="text" />
        </div>

        <div className="input-label">
          <label htmlFor="phone" className='bolding'>Teléfono Habitación:</label>
          <input 
          value={tutorLocalNumber}
          onChange={e => updateFields({tutorLocalNumber: e.target.value })}
          type="text" placeholder='04121234567' name="phone" className="input" />
        </div>
      </div>

      <div className='inputs-wrapper'>
        <div className="input-label">
          <label htmlFor="direction" className='bolding'>Dirección:</label>
          <input 
          value={tutorHomeAddress}
          onChange={e => updateFields({tutorHomeAddress: e.target.value })}
          placeholder="" className="input" name="direction" type="text" />
        </div>
      </div>

      <div className='inputs-wrapper'>
        <div className="input-label">
          <label htmlFor="estado">Estado:</label>
          <input 
          value={tutorHomeState}
          onChange={e => updateFields({tutorHomeState: e.target.value })}
          placeholder="" className="input" name="estado" type="text" />
        </div>

        <div className="input-label">
          <label htmlFor="municipio">Municipio:</label>
          <input 
          value={tutorHomeMunicipality}
          onChange={e => updateFields({tutorHomeMunicipality: e.target.value })}
          type="text" placeholder='' name="municipio" className="input" />
        </div>

        <div className="input-label">
          <label htmlFor="parroquia">Parroquia:</label>
          <input 
          value={tutorHomeParish}
          onChange={e => updateFields({tutorHomeParish: e.target.value })}
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
          onChange={e => updateFields({tutorFb: e.target.value })}
          className="input" name="facebook" type="text" />
        </div>
        <div className="input-label">
          <label htmlFor="instagram">Instagram:</label>
          <input 
          value={tutorIg}
          onChange={e => updateFields({tutorIg: e.target.value })}
          className="input" name="instagram" type="text" />
        </div>
        <div className="input-label">
          <label htmlFor="x">X:</label>
          <input 
          value={tutorX}
          onChange={e => updateFields({tutorX: e.target.value })}
          className="input" name="x" type="text" />
        </div>
        <div className="input-label">
          <label htmlFor="youtube">Youtube:</label>
          <input 
          value={tutorYt}
          onChange={e => updateFields({tutorYt: e.target.value })}
          className="input" name="youtube" type="text" />
        </div>
      </div>

      <div className='inputs-wrapper'>
        <div className="input-label">
          <label htmlFor="otherSocials" className='bolding'>Otras:</label>
          <input 
          value={tutorOtherSM}
          onChange={e => updateFields({tutorOtherSM: e.target.value })}
          placeholder="" className="input" name="otherSocials" type="text" />
        </div>
      </div>

    </div>
  )
}
