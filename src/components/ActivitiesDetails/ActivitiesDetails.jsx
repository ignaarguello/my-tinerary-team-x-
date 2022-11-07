import React from 'react'
import './ActivitiesDetails.css'

export default function ActivitiesDetails(props) {
    let {photo, price, duration, name} = props

    return (
    <div id='containerShowDetails'>
        <div className='cardGeneralShow'>
            <div className='containerImageShow'>
                <img className='imageCardshow' src={photo} alt="" />
            </div>
            <div className='bodyCardShow'>
                <h2 className='titleCardShow'>{name}</h2>
                <p className='dateCardShow'>Duration - {duration} HS</p>
                <p className='priceCardShow'>Price - {price} USD </p>
            </div>
        </div>
    </div>
  )
}