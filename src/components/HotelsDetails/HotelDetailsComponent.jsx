import React from 'react'
import './HotelDetailsComponent.css'
import { useState } from 'react'
import Comments from '../Comments/Comments'

export default function HotelDetailsComponent(props) {

    let {image, name, description, capacity} = props
    let [hideShow, setHideShow] = useState(false) 

    function showComments(){
      if(!hideShow){
        setHideShow(true)
      }
      if(hideShow){
        setHideShow(false)
      }
      console.log(hideShow)
    }


  return (
    <div id='containerGeneralAll'>
      <div id='containerCardDetails'>
        <div className='cardGeneral'>
          <div className='containerImageCardDetails'>
            <img className='imageCardDetails' src={image} alt={name} />
          </div>
        <div className='bodyCardDetails'>
            <h2 className='titleCardDetails'>{name}</h2>
              <p className='descriptionCardDetails'>{description}</p>
              <p className='capacityCardDetails'>{capacity}</p>
        <div className='btnCardDetails' onClick={showComments}>View Comments</div>
      </div>
    </div>
  </div>
  {hideShow && <Comments />}
  </div>
  )
}