import React from 'react'
import './CityHotel.css'

export default function CityHotel(props) {

    let {image,name,description, capacity} = props;

    return (
        <div className='card'>
                <img className='imageCardHotels' src={image} alt={image} />
                <h2 className='titleCardHotels'>{name}</h2>
                <p className='descriptionCardHotels'>{description}</p>
                <p className='capacityHotels'>Capacity - {capacity} </p>
                <div className='btnCardHotels'>Discover +</div>
        </div>
        )
}
