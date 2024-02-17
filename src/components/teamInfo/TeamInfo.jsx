import React from 'react'
import './teaminfo.css'

export default function TeamInfo({
  teamName,
  updateFields
}) {
  return (
    <div>
      <h1>
      Identificación del equipo de robótica

      </h1>
      <div className='inputs-wrapper'>
        <div className="input-label">
          <label htmlFor="nombres">Nombre del equipo de robótica:</label>
          <input 
          value={teamName}
          onChange={e => updateFields({ teamName: e.target.value })}
          placeholder="Nombre" className="input" name="nombres" type="text" />
        </div>

      </div>

      

    </div>
  )
}
