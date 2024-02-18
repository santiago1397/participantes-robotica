import React, { useRef, useState, useEffect } from 'react'
import "./form.css"

export default function Form({ setmembers }) {
  const inicial = {
    pNames: "",
    pLastNames: "",
    pci: "",
    page: "",
    pdateBirth: "",
    pplaceBirth: "",
    pHomeAddress: "",
    pHomeState: "",
    pHomeMunicipality: "",
    pHomeParish: "",
    pPhone: "",
    pLocalPhone: "",
    pSchool: "",
    pGrade: "",
    pSchoolAddress: "",
    pSchoolState: "",
    pSchoolMunicipality: "",
    pSchoolParish: "",
    pParentName:"",
    pParentLastName:"",
    pParentCi:"",
    pParentPhone:"",
    pParentAddress: "",
    teamId: ""
  }


  const [newMember, setNewMember] = useState(inicial)

  function updateFields(fields) {
    setNewMember(prev => {
      return { ...prev, ...fields }
    })

  }

  async function HandleSubmit(e) {
    setmembers(oldArray => [...oldArray, newMember])
    setNewMember(inicial)
    alert(JSON.stringify(e, null, 2))
    console.log(e)

  }


  return (
    <div className="container">

      <form className="formWrapper" onSubmit={HandleSubmit}>
        <div className='inputs-wrapper'>
          <input 
          value={newMember.pNames}
          onChange={e => updateFields({ pNames: e.target.value })}
          placeholder="Nombres" className="input" name="nombres" type="text" required />
          <input 
          value={newMember.pLastNames}
          onChange={e => updateFields({ pLastNames: e.target.value })}
          type="text" placeholder='Apellidos' name="apellidos" className="input" required />
        </div>
        <div className='inputs-wrapper'>
          <input 
          value={newMember.pci}
          onChange={e => updateFields({ pci: e.target.value })}
          placeholder="Cédula" className="input" name="ci" type="text"  />
          <input 
          value={newMember.page}
          onChange={e => updateFields({ page: e.target.value })}
          type="text" placeholder='Edad' name="age" className="input"  />
        </div>

        <div className='inputs-wrapper'>
          <div className="input-label">
            <label htmlFor="datebirth">Fecha de Nacimiento:</label>
            <input 
            value={newMember.pdateBirth}
            onChange={e => updateFields({ pdateBirth: e.target.value })}
            className="input" name="datebirth" type="date" />
          </div>

          <div className="input-label">
            <label htmlFor="placebirth">Lugar de nacimiento:</label>
            <input 
            value={newMember.pplaceBirth}
            onChange={e => updateFields({ pplaceBirth: e.target.value })}
            type="text" name="placebirth" className="input" />
          </div>
        </div>

        <div className='inputs-wrapper'>
          <div className="input-label">
            <label htmlFor="homeaddress">Dirección de Vivienda:</label>
            <input 
            value={newMember.pHomeAddress}
            onChange={e => updateFields({ pHomeAddress: e.target.value })}
            placeholder="dirección" className="input" name="homeaddress" type="text" />
          </div>
        </div>

        <div className='inputs-wrapper'>
          <div className="input-label with-select">
            <label htmlFor="estado">Estado:</label>
            <select 
            onChange={e => updateFields({ pHomeState: e.target.value })}
            name="Estado" id="Estado" placeholder='Estado' className="select" required>
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
            <input 
            value={newMember.pHomeMunicipality}
            onChange={e => updateFields({ pHomeMunicipality: e.target.value })}
            type="text" placeholder='' name="municipio" className="input" />
          </div>

          <div className="input-label">
            <label htmlFor="parroquia">Parroquia:</label>
            <input 
            value={newMember.pHomeParish}
            onChange={e => updateFields({ pHomeParish: e.target.value })}
            type="text" placeholder='' name="parroquia" className="input" />
          </div>
        </div>

        <div className='inputs-wrapper'>
          <div className="input-label">
            <label htmlFor="mobile-phone">Nro. Teléfono Celular:</label>
            <input 
            value={newMember.pPhone}
            onChange={e => updateFields({ pPhone: e.target.value })}
            type="text" placeholder='' name="mobile-phone" className="input" />
          </div>

          <div className="input-label">
            <label htmlFor="phone">Nro. Teléfono Hab:</label>
            <input 
            value={newMember.pLocalPhone}
            onChange={e => updateFields({ pLocalPhone: e.target.value })}
            type="text" placeholder='' name="phone" className="input" />
          </div>
        </div>

        <div className='inputs-wrapper'>
          <div className="input-label">
            <label htmlFor="institution">Plantel Educativo donde estudia:</label>
            <input 
            value={newMember.pSchool}
            onChange={e => updateFields({ pSchool: e.target.value })}
            type="text" placeholder='' name="institution" className="input" />
          </div>

          <div className="input-label with-select">
            <label htmlFor="grade">Grado o Año cursa:</label>
            <select 
            onChange={e => updateFields({ pGrade: e.target.value })}
            name="grade" id="grade" placeholder='' className="select" required>
              <option value="1ero">1ero</option>
              <option value="2do">2do</option>
              <option value="3ero">3ero</option>
              <option value="4to">4to</option>
              <option value="5to">5to</option>
              <option value="6to">6to</option>
              <option value="7mo">7mo</option>
              <option value="8vo">8vo</option>
              <option value="9no">9no</option>
              <option value="4 C. Div">4 C. Div</option>
              <option value="5 C. Div">5 C. Div</option>
              <option value="Universitario">Universitario</option>
            </select>
          </div>
        </div>


        <div className='inputs-wrapper'>
          <div className="input-label">
            <label htmlFor="nombres">Dirección del plantel Educativo:</label>
            <input 
            value={newMember.pSchoolAddress}
            onChange={e => updateFields({ pSchoolAddress: e.target.value })}
            placeholder="dirección" className="input" name="nombres" type="text" />
          </div>
        </div>

        <div className='inputs-wrapper'>
          <div className="input-label with-select">
            <label htmlFor="estado">Estado:</label>
            <select 
            onChange={e => updateFields({ pSchoolState: e.target.value })}
            name="Estado" id="Estado" placeholder='Estado' className="select" required>
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
            <input 
            value={newMember.pSchoolMunicipality}
            onChange={e => updateFields({ pSchoolMunicipality: e.target.value })}
            type="text" placeholder='' name="municipio" className="input" />
          </div>

          <div className="input-label spacing">
            <label htmlFor="parroquia">Parroquia:</label>
            <input 
            value={newMember.pSchoolParish}
            onChange={e => updateFields({ pSchoolParish: e.target.value })}
            type="text" placeholder='' name="parroquia" className="input" />
          </div>
        </div>

        <div className="bolding">
          Datos del representante (opcional):
        </div>

        <div className='inputs-wrapper'>
          <div className="input-label">
            <label htmlFor="nombres" className='bolding'>Nombres del Representante:</label>
            <input 
            value={newMember.pParentName}
            onChange={e => updateFields({ pParentName: e.target.value })}
            placeholder="dirección" className="input" name="nombres" type="text" />
          </div>

          <div className="input-label">
            <label htmlFor="nombres" className='bolding'>Apellidos del Representante:</label>
            <input 
            value={newMember.pParentLastName}
            onChange={e => updateFields({ pParentLastName: e.target.value })}
            placeholder="dirección" className="input" name="nombres" type="text" />
          </div>
        </div>

        <div className='inputs-wrapper'>
          <div className="input-label">
            <label htmlFor="nombres" className='bolding'>Cédula del representante:</label>
            <input 
            value={newMember.pParentCi}
            onChange={e => updateFields({ pParentCi: e.target.value })}
            placeholder="dirección" className="input" name="nombres" type="text" />
          </div>

          <div className="input-label">
            <label htmlFor="nombres" className='bolding'>Teléfono del Representante:</label>
            <input 
            value={newMember.pParentPhone}
            onChange={e => updateFields({ pParentPhone: e.target.value })}
            placeholder="dirección" className="input" name="nombres" type="text" />
          </div>
        </div>

        <div className='inputs-wrapper'>
          <div className="input-label">
            <label htmlFor="nombres" className='bolding'>Dirección del representante:</label>
            <input 
            value={newMember.pParentAddress}
            onChange={e => updateFields({ pParentAddress: e.target.value })}
            placeholder="dirección" className="input" name="nombres" type="text" />
          </div>
        </div>

        <div className="center-button">
          <button className="next-button" type="button" onClick={HandleSubmit}>
            AÑADIR
          </button>
        </div>
      </form>





    </div>
  )
}