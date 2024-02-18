import { useState } from 'react'
import { useMultistepForm } from './useMultiStep'
import { TiTick } from "react-icons/ti";
import './App.css'
import Tutor from './components/tutor/Tutor'
import TeamInfo from './components/teamInfo/TeamInfo'
import ProyectData from './components/proyectData/ProyectData'
import ProyectDescription from './components/proyectDescription/ProjectDescription'
import Members from './components/members/Members'
import ProyectFase from './components/proyecFase/ProyectFase'
import axios from 'axios'
/* import { INITIAL_DATA } from './initialData'; */


function App() {

  const INITIAL_DATA = {
    teamName: "",

    tutorLastNames: "",
    tutorFirstNames: "",
    tutorCi: "",
    tutorHomeAddress: "",
    tutorHomeState: "",
    tutorHomeMunicipality: "",
    tutorHomeParish: "",
    tutorNumber: "",
    tutorLocalNumber: "",
    tutorEmail: "",
    tutorFb: "",
    tutorX: "",
    tutorYt: "",
    tutorIg: "",
    tutorOtherSM: "",
    tutorInstitution: "",
    tutorInstitutionAddress: "",
    tutorInstitutionState: "",
    tutorInstitutionMunicipality: "",
    tutorInstitutionParish: "",

    projectTitle: "",
    projectObjective: "",
    projectProblem: "",
    projectProblemSolving: "",
    projectImportance: "",

    projectMaterials: "",
    projectElectronics: "",
    projectSoftware: "",
    projectPhasesDevelop: "",
    projectInterestArea: "",

    projectConceptDesign: "",
    projectConceptDesignDetails: "",
    projectElements: "",
    projectElementsDetails: "",

  }



  const [teamMembers, setTeamMembers] = useState([])
  const [data, setData] = useState(INITIAL_DATA)

  function updateFields(fields) {
    setData(prev => {
      return { ...prev, ...fields }
    })

  }

  const titles = [
    "información de equipo",
    "datos tutor",
    "datos integrantes",
    "datos proyecto",
    "descripción",
    "fase del proyecto",
  ]


  const { currentStepIndex, step, steps, isFirstStep, isLastStep, next, back, } = useMultistepForm([
    <TeamInfo {...data} updateFields={updateFields} />,
    <Tutor {...data} updateFields={updateFields} />,
    <Members members={teamMembers} setmembers={setTeamMembers} />,
    <ProyectData {...data} updateFields={updateFields} />,
    <ProyectDescription {...data} updateFields={updateFields} />,
    <ProyectFase {...data} updateFields={updateFields} />,
  ])



  async function onSubmit(e) {
    e.preventDefault()
    if (!isLastStep) return next()
    try {
      const teamid = await axios.post("https://participantes-robotica-back.onrender.com/" + "api/equipo/", {
        teamName: data.teamName,
        projectTitle: data.projectTitle,
        projectObjective: data.projectObjective,
        projectProblem: data.projectProblem,
        projectProblemSolving: data.projectProblemSolving,
        projectImportance: data.projectImportance,
        projectMaterials: data.projectMaterials,
        projectElectronics: data.projectElectronics,
        projectSoftware: data.projectSoftware,
        projectPhasesDevelop: data.projectPhasesDevelop,
        projectInterestArea: data.projectInterestArea,
        projectConceptDesign: data.projectConceptDesign,
        projectConceptDesignDetails: data.projectConceptDesignDetails,
        projectElements: data.projectElements,
        projectElementsDetails: data.projectElementsDetails,
      })
      console.log(teamid)


      await axios.post("https://participantes-robotica-back.onrender.com/" + "api/tutores/", {
        tutorLastNames: data.tutorLastNames,
        tutorFirstNames: data.tutorFirstNames,
        tutorCi: data.tutorCi,
        tutorHomeAddress: data.tutorHomeAddress,
        tutorHomeState: data.tutorHomeState,
        tutorHomeMunicipality: data.tutorHomeMunicipality,
        tutorHomeParish: data.tutorHomeParish,
        tutorNumber: data.tutorNumber,
        tutorLocalNumber: data.tutorLocalNumber,
        tutorEmail: data.tutorEmail,
        tutorFb: data.tutorFb,
        tutorX: data.tutorX,
        tutorYt: data.tutorYt,
        tutorIg: data.tutorIg,
        tutorOtherSM: data.tutortutorOtherSMIg,
        teamId: teamid.data,
      })

      /* toast.success('Registrado correctamente', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      }); */


      teamMembers.map(async (item) => {
        await axios.post("https://participantes-robotica-back.onrender.com/" + "api/participantes/", {
          pNames: item.pNames,
          pLastNames: item.pLastNames,
          pci: item.pci,
          page: item.page,
          pdateBirth: item.pdateBirth,
          pplaceBirth: item.pplaceBirth,
          pHomeAddress: item.pHomeAddress,
          pHomeState: item.pHomeState,
          pHomeMunicipality: item.pHomeMunicipality,
          pHomeParish: item.pHomeParish,
          pPhone: item.pPhone,
          pLocalPhone: item.pLocalPhone,
          pSchool: item.pSchool,
          pGrade: item.pGrade,
          pSchoolAddress: item.pSchoolAddress,
          pSchoolState: item.pSchoolState,
          pSchoolMunicipality: item.pSchoolMunicipality,
          pSchoolParish: item.pSchoolParish,
          teamId: teamid.data,
        })
      })
    } catch (err) {
      /* toast.error('Error al registrar', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      }); */
      console.log(err)
    } finally {
      setLoading(false)

    }

    alert("Successful Account Creation")
  }

  return (
    <>
      <div className="topTitle">
        <div className="logo-wrapper">
          <div className="logo logo-left">
            <img className="left-img" src="logo mincyt2.png" alt="" />
          </div>
        </div>

        <h1>
          Participantes de proyectos de la Feria de Innovación "Semilleros Cientificos"

        </h1>

        <div className="logo-wrapper">
          <div className="logo">
            <img className="right-img" src="logo semilleros.png" alt="" />
          </div>
        </div>
      </div>

      <div className="content-container">

        <div className="stepper-container">
          {steps?.map((step, i) => (
            <div
              key={i}
              className={`step-item ${currentStepIndex > i ? "completed" : ""} 
            ${currentStepIndex == i ? "current" : ""}`}
            >
              <div className="step">
                {currentStepIndex > i ? <TiTick size={24} /> : i + 1}
              </div>
              <p className="step-description">{titles[i]}</p>
            </div>
          ))}
        </div>



        <form className="data-formWrapper" onSubmit={onSubmit}>
          {step}
          <div className="button-wrapper">
            {!isFirstStep && (
              <button className="back-button" type="button" onClick={back}>
                ATRÁS
              </button>
            )}
            <button className="next-button" type="submit">
              {isLastStep ? "FINALIZAR" : "SIGUIENTE"}
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
