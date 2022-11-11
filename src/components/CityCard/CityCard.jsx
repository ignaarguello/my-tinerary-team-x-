import React from 'react'
import { Link as LinkRouter } from 'react-router-dom';
import '../CityCard/CityCard.css'

export default function CityCard(props) {
        // let {id} = useParams()
        let {img,name,continent, population, id} = props;

    return (
        <div className='card-city'>
                <img className='imageCardHotels' src={img} alt={name} />
                <h2 className='titleCardHotels'>{name}</h2>
                <p className='descriptionCardHotels'>{continent}</p>
                <p className='capacityHotels'>Population - {population} </p>
                <LinkRouter to={id} className='btnCardHotels'><div>Discover +</div></LinkRouter>
        </div>
        )
}