import React from 'react'
import './CitiesDet.css'


//componente donde creo la CARD completa de detalles

function CitiesDet(props) {

  let {img,name,continent, population} = props;
  return (
    <>
    <div id='containerCardDetails'>
        <div className='cardGeneral'>
            <div className='containerImageCardDetails'>
                <img className='imageCardDetails' src={img} alt="" />
            </div>
            <div className='bodyCardDetails'>
                <h2 className='titleCardDetails'>{name}</h2>
                <p className='descriptionCardDetails'>{continent}</p>
                <p className='cityCardDetails'>Population - {population}</p>
                <div className='btnCardDetails'>View Comments</div>
            </div>
        </div>
    </div>
    </>
  )
}

export default CitiesDet