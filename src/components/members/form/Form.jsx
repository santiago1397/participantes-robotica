import React, { useRef, useState, useEffect } from 'react'
import "./form.css"

export default function Form() {



  async function HandleSubmit(e) {
    await new Promise((resolve) => setTimeout(resolve, 500));
    alert(JSON.stringify(e, null, 2))
    console.log(e)

  }


  return (
    <div className="container">

      <form className="formWrapper" onSubmit={HandleSubmit}>
        <div className='inputs-wrapper'>
          <input placeholder="Nombres" className="input" name="nombres" type="text" required />
          <input type="text" placeholder='Apellidos' name="apellidos" className="input" required />
        </div>
        <div className='inputs-wrapper'>
          <input placeholder="Cédula" className="input" name="nombres" type="text" required />
          <input type="text" placeholder='Edad' name="apellidos" className="input" required />
        </div>

        <div className='inputs-wrapper'>
          <div className="input-label">
            <label htmlFor="nombres">Fecha de Nacimiento:</label>
            <input placeholder="Nombres" className="input" name="nombres" type="date" />
          </div>

          <div className="input-label">
            <label htmlFor="apellidos">Lugar de nacimiento:</label>
            <input type="text" placeholder='' name="apellidos" className="input" />
          </div>
        </div>

        <div className='inputs-wrapper'>
          <div className="input-label">
            <label htmlFor="nombres">Dirección de Vivienda:</label>
            <input placeholder="dirección" className="input" name="nombres" type="text" />
          </div>
        </div>

        <div className='inputs-wrapper'>
          <div className="input-label with-select">
            <label htmlFor="estado">Estado:</label>
            <select name="Estado" id="Estado" placeholder='Estado' className="select" required>
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
            <label htmlFor="municipio">Municipio:</label>
            <input type="text" placeholder='' name="municipio" className="input" />
          </div>

          <div className="input-label">
            <label htmlFor="parroquia">Parroquia:</label>
            <input type="text" placeholder='' name="parroquia" className="input" />
          </div>
        </div>

        <div className='inputs-wrapper'>
          <div className="input-label">
            <label htmlFor="nombres">Nro. Teléfono Celular:</label>
            <input type="text" placeholder='' name="apellidos" className="input" />
          </div>

          <div className="input-label">
            <label htmlFor="apellidos">Nro. Teléfono Hab:</label>
            <input type="text" placeholder='' name="apellidos" className="input" />
          </div>
        </div>

        <div className='inputs-wrapper'>
          <div className="input-label">
            <label htmlFor="nombres">Plantel Educativo donde estudia:</label>
            <input type="text" placeholder='' name="apellidos" className="input" />
          </div>

          <div className="input-label">
            <label htmlFor="apellidos">Grado o Año cursa:</label>
            <input type="text" placeholder='' name="apellidos" className="input" />
          </div>
        </div>


        <div className='inputs-wrapper'>
          <div className="input-label">
            <label htmlFor="nombres">Dirección del plantel Educativo:</label>
            <input placeholder="dirección" className="input" name="nombres" type="text" />
          </div>
        </div>

        <div className='inputs-wrapper'>
          <div className="input-label with-select">
            <label htmlFor="estado">Estado:</label>
            <select name="Estado" id="Estado" placeholder='Estado' className="select" required>
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
            <label htmlFor="municipio">Municipio:</label>
            <input type="text" placeholder='' name="municipio" className="input" />
          </div>

          <div className="input-label">
            <label htmlFor="parroquia">Parroquia:</label>
            <input type="text" placeholder='' name="parroquia" className="input" />
          </div>
        </div>


        <div className="center-button">
          <button className="button" type="submit" >
            submit
          </button>
        </div>
      </form>





    </div>
  )
}