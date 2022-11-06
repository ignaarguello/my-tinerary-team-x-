import React from 'react'
import '../CityHotel/CityHotel.css'

export default function CityHotel(props) {

    let {photo,name,continent, population} = props;

    return (
        <div className='card'>
                <img className='imageCardHotels' src={photo} alt={name} />
                <h2 className='titleCardHotels'>{name}</h2>
                <p className='descriptionCardHotels'>{continent}</p>
                <p className='capacityHotels'>Population - {population} </p>
                <div className='btnCardHotels'>Discover +</div>
        </div>
        )
}