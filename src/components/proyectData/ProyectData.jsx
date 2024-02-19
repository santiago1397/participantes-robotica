import React from 'react'
import './proyectdata.css'

export default function ProyectData({
  projectTitle,
  projectObjective,
  projectProblem,
  projectProblemSolving,
  projectImportance,
  updateFields
}) {
  return (
    <div>
      <h1>
        Información del Proyecto
      </h1>
      <div className='inputs-wrapper'>
        <div className="input-label bolding">
          <label htmlFor="titulo">Título:</label>
          <input
            value={projectTitle}
            onChange={e => updateFields({ projectTitle: e.target.value })}
            placeholder="titulo del proyecto" className="input" name="titulo" type="text" />
        </div>
      </div>

      <div className='inputs-wrapper'>
        <div className="input-label bolding">
          <label htmlFor="objective">Objetivo General:</label>
          <input
            value={projectObjective}
            onChange={e => updateFields({ projectObjective: e.target.value })}
            placeholder="objetivo" className="input" name="objective" type="text" />
        </div>
      </div>

      <p className="bolding" >
        Describa el impacto de su solución para la sociedad:
      </p>

      <div className='inputs-wrapper spacing'>
        <div className="input-label">
          <label htmlFor="objective">
            1. ¿Cuál es el problema que su proyecto resuelve?
          </label>
          <textarea
            value={projectProblem}
            onChange={e => updateFields({ projectProblem: e.target.value })}
            placeholder="especifique" name="objective" type="text" rows={4} />
        </div>
      </div>

      <div className='inputs-wrapper spacing'>
        <div className="input-label">
          <label htmlFor="objective">
            2. ¿De que forma su solución resolverá el problema que establecieron?
          </label>
          <textarea
            value={projectProblemSolving}
            onChange={e => updateFields({ projectProblemSolving: e.target.value })}
            placeholder="especifique" name="objective" type="text" rows={4} />
        </div>
      </div>

      <div className='inputs-wrapper spacing'>
        <div className="input-label">
          <label htmlFor="objective">
            3. Describa la importancia de su proyecto.
          </label>
          <textarea
            value={projectImportance}
            onChange={e => updateFields({ projectImportance: e.target.value })}
            placeholder="especifique" name="objective" type="text" rows={4} />
        </div>
      </div>


    </div>
  )
}
