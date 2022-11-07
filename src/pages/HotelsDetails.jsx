import React from 'react'
import HotelDetailsComponent from '../components/HotelsDetails/HotelDetailsComponent'
import ShowDetails from '../components/ShowDetails/ShowDetails'
import { useParams } from 'react-router-dom'
import hotels from '../hotels'
import shows from '../shows'

export default function HotelsDetails() {
  let {id} = useParams()

  let findHotel = hotels.find(e => e.id === id)
  console.log(findHotel)

  let findShow = shows.filter(e => e.hotelId === findHotel.id)
  console.log(findShow)

  return (
    <div>
        {findShow.length !== 0 ? 
          <div id='containerAllDetails'>
          <h1 className='titleHotelDetails'>Hotel Details</h1>
          <HotelDetailsComponent image={findHotel.photo[2]} name={findHotel.name} description={findHotel.description} capacity={findHotel.capacity}  />
          <h2 className='titlePopuparTinearies'>Popular Tineraries</h2>
          <div id='containerShowsGeneral'>
            <ShowDetails image={findShow[0].photo} name={findShow[0].name} date={findShow[0].date} price={findShow[0].price} />
            <ShowDetails image={findShow[1].photo} name={findShow[1].name} date={findShow[1].date} price={findShow[1].price} />
          </div>
          </div>
          :
          <div id='containerAllDetails'>
            <h1 className='titleHotelDetails'>Hotel Details</h1>
            <HotelDetailsComponent image={findHotel.photo} name={findHotel.name} description={findHotel.description} capacity={findHotel.capacity}  />
          </div>
          }
    </div>
  )
}
