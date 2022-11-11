import React from 'react'
import hotels from '../../hotels'
import CityHotel from '../CityHotel/CityHotel'
import SelectSearchBar from '../SelectSearchBar/SelectSearchBar'

export default function EachCard() {
  return (
  <div id='containerGeneral'>
          <div className='containerCards'>
            {hotels.map(allHotels => <CityHotel key={allHotels.id} image={allHotels.photo[1]} name={allHotels.name} description={allHotels.description} />)}
          </div>
  </div> 
   
  )
}



