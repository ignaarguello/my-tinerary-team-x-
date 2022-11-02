import hotels from '../../hotels'
import React from 'react'
import './CardsGrid.css'


export default function CardsGrid() {
  return (
    <div id='containerGrid'>
      <div className='containerCard'>
            <div className='containerImageCard'>
                <img src={hotels[0].photo[2]} alt="" className='imageCard'/>
                <h2 className='titleCard'>{hotels[0].name}</h2>
            </div>
            <div className='containerImageCard'>
                <img src={hotels[0].photo[1]} alt="" className='imageCard'/>
                <h2 className='titleCard'>{hotels[0].name}</h2>
            </div>
        </div>
    </div>
  )
}
