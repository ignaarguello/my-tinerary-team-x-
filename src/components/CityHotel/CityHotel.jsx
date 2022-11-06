import React from 'react'
import './CityHotel.css'

export default function CityHotel(props) {

    let {image,name,description} = props;

    return (
        <div className='card'>
                <img className='imageCardHotels' src={image} alt={image} />
                <h2 className='titleCardHotels'>{name}</h2>
                <p className='descriptionCardHotels'>{description}</p>
                <div className='btnCardHotels'>Discover +</div>
        </div>
        )
}
