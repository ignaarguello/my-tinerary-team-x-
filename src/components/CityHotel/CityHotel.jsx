import React from 'react'
import './CityHotel.css'
import { Link as LinkRouter  } from 'react-router-dom';


export default function CityHotel(props) {

        let {image,name,description, capacity, id} = props;

    return (
        <div className='card'>
                <img className='imageCardHotels' src={image} alt={image} />
                <h2 className='titleCardHotels'>{name}</h2>
                <p className='descriptionCardHotels'>{description}</p>
                <p className='capacityHotels'>Capacity - {capacity} </p>
                <LinkRouter to={id} className='btnCardHotels'>
                        <div>Discover +</div>
                </LinkRouter>
        </div>
        )
}
