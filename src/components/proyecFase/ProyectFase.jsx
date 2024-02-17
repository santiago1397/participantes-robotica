import React from 'react'
import './proyectfase.css'

export default function ProyectFase() {
  return (
    <div>
      <h1>
        Fase o estado actual del proyecto:
      </h1>

      <div className="bolding spacing">
        Marque y especifique:
      </div>


      <div className='inputs-wrapper spacing'>
        <div className="input-label">
          <label htmlFor="objective" className="bolding">
            1. Diseño Conceptual del Proyecto:
          </label>
          <div>
            <input type="radio" id="1a" name="conceptDesign" value="seguridad" />
            <label for="1a"> Idea del Proyecto</label><br />
            <input type="radio" id="2a" name="conceptDesign" value="industrial" />
            <label for="2a"> Diseño de Proyecto</label><br />
            <input type="radio" id="3a" name="conceptDesign" value="servicio" />
            <label for="3a"> Desarrollo de Prototipo</label><br />
            <input type="radio" id="4a" name="conceptDesign" value="salud" />
            <label for="4a"> Otro</label><br />
          </div>
        </div>
      </div>

      <div className='inputs-wrapper spacing'>
        <div className="input-label ">
          <label htmlFor="e1">
            Especifique:
          </label>
          <textarea placeholder="" name="e1" type="text" rows={4} />
        </div>
      </div>

      <div className='inputs-wrapper spacing'>
        <div className="input-label">
          <label htmlFor="objective" className="bolding">
            2. Elementos diferenciadores del proyecto propuesto:
          </label>
          <div>
            <input type="radio" id="1b" name="element" value="Producto o servicio único" />
            <label for="1b"> Producto o servicio único</label><br />
            <input type="radio" id="2b" name="element" value="Sustituye un producto o servicio existente" />
            <label for="2b"> Sustituye un producto o servicio existente</label><br />
            <input type="radio" id="3b" name="element" value="Mejora el desempeño o uso de un producto existente" />
            <label for="3b"> Mejora el desempeño o uso de un producto existente</label><br />
            <input type="radio" id="4b" name="element" value="Introduce mejoras en costos de un producto existente" />
            <label for="4b"> Introduce mejoras en costos de un producto existente</label><br />
            <input type="radio" id="5b" name="element" value="Aporta aspectos novedosos a la enseñanza o práctica de un área de conocimiento" />
            <label for="5b"> Aporta aspectos novedosos a la enseñanza o práctica de un área de conocimiento</label><br />
            <input type="radio" id="6b" name="element" value="Aporta aspectos novedosos de gestión y/o organización social" />
            <label for="6b"> Aporta aspectos novedosos de gestión y/o organización social</label><br />
          </div>
        </div>
      </div>

      <div className='inputs-wrapper spacing'>
        <div className="input-label ">
          <label htmlFor="e2">
            Especifique:
          </label>
          <textarea placeholder="" name="e2" type="text" rows={4} />
        </div>
      </div>


    </div>
  )
}
