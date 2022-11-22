import React from 'react'
import './ActivitiesDetails.css'

export default function ActivitiesDetails(props) {
    let {photo, price, duration, name, description} = props

    return (
    <div id='containerActivityDetails'>
        <div className='cardActivity'>
            <div className='containerImgActivity'>
                <img className='imgActivity' src={photo} alt="" />
            </div>
            <div className='bodyCardActivity'>
                <h2 className='titleActivity'>{name}</h2>
                <p className='paragraphActivity'>{description}</p>
                <p className='paragraphActivity'>Duration - {duration} HS</p>
                <p className='priceActivity'>Price - {price} USD </p>
            </div>
        </div>
    </div>
  )
}