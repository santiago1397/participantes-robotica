import React from 'react'
import './teaminfo.css'

export default function TeamInfo({
  teamName,
  updateFields
}) {
  return (
    <div>
      <h1>
      Indentificacion de Proyecto

      </h1>
      <div className='inputs-wrapper'>
        <div className="input-label">
          <label htmlFor="nombres">Nombre del equipo o proyecto:</label>
          <input 
          value={teamName}
          onChange={e => updateFields({ teamName: e.target.value })}
          placeholder="Nombre" className="input" name="nombres" type="text" />
        </div>

      </div>

      

    </div>
  )
}
