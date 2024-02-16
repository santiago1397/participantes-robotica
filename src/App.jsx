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


function App() {
  const [teamMembers ,setTeamMembers] = useState([])


  const titles = [
    "información de equipo",
    "datos tutor",
    "datos integrantes",
    "datos proyecto",
    "descripción",
    "fase del proyecto",
    ]


  const { currentStepIndex, step, steps, isFirstStep, isLastStep, next, back, } = useMultistepForm([
    <TeamInfo/>,
    <Tutor/>,
    <Members/>,
    <ProyectData/>,
    <ProyectDescription/>,
    <ProyectFase/>,
    ])


  function onSubmit(e) {
    e.preventDefault()
    if (!isLastStep) return next()
    alert("Successful Account Creation")
  }

  return (
    <>
      <div className="topTitle">
        <div className="logo-wrapper">
          <div className="logo">
            logo mincyt
          </div>
        </div>

        <h1>
          Participantes de Proyectos Robótica
        </h1>

        <div className="logo-wrapper">
          <div className="logo">
            logo del evento
          </div>
        </div>
      </div>

      <div className="container">

        <div className="stepper-container">
          {steps?.map((step, i) => (
            <div
            key={i}
            className={`step-item ${currentStepIndex > i ? "completed":""} 
            ${currentStepIndex == i ? "current":""}`}
          >
            <div className="step">
              {currentStepIndex > i ? <TiTick size={24}/> :  i+1 }
            </div>
            <p className="step-description">{titles[i]}</p>
          </div>
          ))}
        </div>
  


        <form className="formWrapper" onSubmit={onSubmit}>
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
