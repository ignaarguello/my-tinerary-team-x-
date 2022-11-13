import React from 'react'
import './ShowDetails.css'


export default function ShowDetails(props) {
    let {image, name, date, price} = props

    return (
    <div id='containerShowDetails'>
        <div className='cardGeneralShow'>
            <div className='containerImageShow'>
                <img className='imageCardshow' src={image} alt="" />
            </div>
            <div className='bodyCardShow'>
                <h2 className='titleCardShow'>{name}</h2>
                <p className='dateCardShow'>Date - {date}</p>
                <p className='priceCardShow'>Price - {price} USD </p>
            </div>
        </div>
    </div>
  )
}
