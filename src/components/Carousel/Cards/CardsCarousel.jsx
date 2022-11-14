import React from 'react'

export default function CardCarousel(props) {
    let {imageCard, nameCard, evento} = props
  return (
    <div className='containerImageCard' onClick={evento}>
        <img src={imageCard} alt="" className='imageCard'/>
        <div id='ContenedorButtonName'>
            <h2 className='titleCard'>{nameCard}</h2>
            
          </div>
    </div>
  )
}
