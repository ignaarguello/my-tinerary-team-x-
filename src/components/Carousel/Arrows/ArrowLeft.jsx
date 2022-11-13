import React from 'react'
import './Arrows.css';


export default function ArrowLeft(props) {
  let {evento} = props
  return (
    <div className='ContenedorArrow' onClick={evento}>
        <img className='Arrow' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAK1JREFUSEvtlNsNgzAQBIcO0gkpgZSQSmgh6SgdQAnQSUpAJ4F0imLfGsMf/rZmbtePhpNXczKfSxA2XFLRDeiBd0h1G1SBwQfgvgpeqkQRePgMdMD3KEEV3IbIJaiG5wSHwFMCD1erTg77ryITjEBbQk/VnToDL5mAR8nN8YNFh7wl2S2J3kF1kkhgaaskiuBX8gQ+6gVQBZvEvgkZHr1kdcjsvpIEu4SXIKxtAb+eIBmkl/3TAAAAAElFTkSuQmCC"/>
    </div>
  )
}