import React from 'react'
import './Arrows.css';


export default function ArrowRight(props) {
  let {evento} = props
  return (
    <div className='ContenedorArrow' onClick={evento}>
          <img className='Arrow' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAKZJREFUSEvtlMENwjAQBMcd0AmUkHRAR6EEOqGEUAJ0QgdE90NRZN8uOC/8tmbkvfUVOp/Smc9f0EzYiegCXIFXkw7yDAI+AQ9gzEjUFxyAO3DMSlRBpCJJHIEkcQVpSU3wzrTk487m4H8peALDulnfRjQDJ2ATHq9zBdGkJtwVpOGOQII7gjNwq2W+bp4zg5DEuuiy7MSv4bcoLXIiSsOdIUvwXQQLDaAoGREMQ18AAAAASUVORK5CYII="/>
    </div>
  )
}
