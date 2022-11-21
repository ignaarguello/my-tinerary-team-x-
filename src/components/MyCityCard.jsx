import React from 'react'
import { Link as LinkRouter } from 'react-router-dom';
import '../components/CityCard/CityCard.css'

export default function CityCard(props) {

        let {img,name,continent, population, id} = props;

    return (
            <div className='card-city'>
                <img className='imageCardHotels' src={img} alt={name} />
                <h2 className='titleCardHotels'>{name}</h2>
                <p className='descriptionCardHotels'>{continent}</p>
                <p className='capacityHotels'>Population - {population} </p>
                <LinkRouter to={`edit/${id}`} className='btnCardHotels'><div>Edit</div></LinkRouter>
                <LinkRouter to={id} className='btnCardDelete'><div>Delete</div></LinkRouter>
            </div>
        )
}