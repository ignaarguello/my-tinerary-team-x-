import React from 'react'
import '../CityCard/CityCard.css'

export default function CityCard(props) {
    let {image, name, continent} = props
return (
    <div className='card-container'>
        <img src={image} alt='' className='imageCard'/>
        <div id='ContenedorButtonName'>
            <h2 className='titleCard'>{name}</h2>
            <p>{continent}</p>
        </div>
    </div>
)
}