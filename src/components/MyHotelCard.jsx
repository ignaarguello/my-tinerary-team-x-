import React from 'react'
import { Link as LinkRouter } from 'react-router-dom';
import '../components/CityHotel/CityHotel.css'

export default function MyHotelCard(props) {

        let {image,name,description, capacity, id} = props;

    return (
            <div className='card-city'>
                <img className='imageCardHotels' src={image} alt={name} />
                <h2 className='titleCardHotels'>{name}</h2>
                <p className='descriptionCardHotels'>{description}</p>
                <p className='capacityHotels'>Capacity - {capacity} </p>
                <LinkRouter to={`edit/${id}`} className='btnCardHotels'><div>Edit</div></LinkRouter>
                <LinkRouter to={id} className='btnCardDelete'><div>Delete</div></LinkRouter>
            </div>
        )
}