import React from 'react'
import './HotelDetailsComponent.css'

export default function HotelDetailsComponent(props) {
  let {image, name, description, capacity} = props
  return (
    <div id='containerCardDetails'>
        <div className='cardGeneral'>
            <div className='containerImageCardDetails'>
                <img className='imageCardDetails' src={image} alt={name} />
            </div>
            <div className='bodyCardDetails'>
                <h2 className='titleCardDetails'>{name}</h2>
                <p className='descriptionCardDetails'>{description}</p>
                <p className='capacityCardDetails'>{capacity}</p>
                <div className='btnCardDetails'>View Comments</div>
            </div>
        </div>
    </div>
  )
}