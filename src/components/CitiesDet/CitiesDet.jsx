import React from 'react'
import './CitiesDet.css'


//componente donde creo la CARD completa de detalles

function CitiesDet(props) {

  let {img,name,continent, population} = props;
  return (
    <>
    <div id='cont-cardDetails'>
        <div className='card-general'>
            <div className='cont-ImgDetails'>
                <img className='imgDetails' src={img} alt="" />
            </div>
            <div className='body-CardDetails'>
                <h2 className='title-cardDetails'>{name}</h2>
                <p className='description-cardDetails'>{continent}</p>
                <p className='population-cardDetails'>Population - {population}</p>
                <div className='btn-commentDetails'>View Comments</div>
            </div>
        </div>
    </div>
    </>
  )
}

export default CitiesDet