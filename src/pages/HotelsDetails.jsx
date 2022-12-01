import React from 'react'
import HotelDetailsComponent from '../components/HotelsDetails/HotelDetailsComponent'
import ShowDetails from '../components/ShowDetails/ShowDetails'
import { useEffect, useState } from 'react';
import { BASE_URL } from '../api/url';
import { useParams } from 'react-router-dom';
import axios from 'axios'



export default function HotelsDetails() {

    let {hotelId} = useParams()
    let [hotelFound, setHotelFound] = useState([])
    let [showFound, setShowFound] = useState([])

  useEffect(()=>{
    axios.get(`${BASE_URL}/api/hotels/${hotelId}`)
    .then(response => setHotelFound(response.data.user_find[0]))
  },[])
  
  useEffect( () => {
    axios.get(`${BASE_URL}/api/shows?hotelId=${hotelId}`)
    .then(response => setShowFound(response.data.response))
    .catch(err => console.log(err.message))
  }, [])

  return (

  <div id='containerAllDetails'>
      <h1 className='titleHotelDetails'>Hotel Details</h1>
      <HotelDetailsComponent key={hotelFound._id} image={hotelFound.photo} name={hotelFound.name} description={hotelFound.description} capacity={hotelFound.capacity}  />
    {showFound.length !== 0 ? 
     <>
     <h2 className='titlePopuparTinearies'>Popular Tineraries</h2>
     <div id='containerShowsGeneral'>
       {showFound.map(each =>
          <ShowDetails image={each.photo} name={each.name} date={each.date} price={each.price} />
        )}
    </div>
     </>
      :
     <h2 className='titleNotHaveShows'>Ops, This hotel does not have shows</h2>
    }
   </div>
  )
}




