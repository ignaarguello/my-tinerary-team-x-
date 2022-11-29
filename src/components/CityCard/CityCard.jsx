import React from 'react'
import { Link as LinkRouter } from 'react-router-dom';
import '../CityCard/CityCard.css'

export default function CityCard(props) {
        // let {id} = useParams()
        let {img,name,continent, population, id} = props;

    return (
        <div className='card-city'>
                <img className='img-cardCity' src={img} alt={name} />
                <h2 className='title-cardCity'>{name}</h2>
                <p className='continent-cardCity'>{continent}</p>
                <p className='population-cardCity'>Population - {population} </p>
                <LinkRouter to={id} className='btnCardHotels'><div>Discover +</div></LinkRouter>
        </div>
        )
}