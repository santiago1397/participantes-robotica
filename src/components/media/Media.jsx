import React from 'react'
import './media.css'

export default function Media(


) {
  return (
    <div>
      <h1>
        Anexos del proyecto
      </h1>

      <p> Agrege los archivos de multimedia que describan el proyecto</p>

      <div className='spacing'>
        <label htmlFor='file' className='bolding'>Seleccione un máximo de 10 imagenes:</label><br />
        <input type='file' multiple='multiple' id='file' onChange={e => { setFile(e.target.files); console.log(e.target.files) }} /> <br />
        <span >Imagenes permitidas: jpg, jpeg, png.</span><br />
      </div>

      <div className='spacing'>
        <label htmlFor='file' className='bolding'>Cargue un informe descriptivo del proyecto (PDF):</label><br />
        <input type='file' id='file' onChange={e => { setPdf(e.target.files[0]); console.log(e.target.files) }} /> <br />
      </div>

      <div className='spacing' >
        <label htmlFor='file' className='bolding'>Cargue un vídeo de máximo 2min dónde los integrantes del equipo, explican de que se trata su proyecto</label><br />
        <input type='file' id='file' onChange={e => { setVideo(e.target.files[0]); console.log(e.target.files) }} /> <br />
      </div>


    </div>
  )
}
