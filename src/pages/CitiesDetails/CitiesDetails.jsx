import React from 'react'
import CitiesDet from '../../components/CitiesDet/CitiesDet'
import './CitiesDetails.css'
import { useParams } from 'react-router-dom'
import ActivitiesDetails from '../../components/ActivitiesDetails/ActivitiesDetails'
import { useState, useEffect } from 'react'
import { BASE_URL } from '../../api/url'
import axios from 'axios'


function CitiesDetails() {

  let {cityid} = useParams()
  let [cityFound, setCityFound] = useState([])
  let [itineraries, setItineraries] = useState([])

  useEffect( () => {
    axios.get(`${BASE_URL}/api/cities/${cityid}`)
    .then(response => setCityFound(response.data.response[0]))
    .catch(err => console.log(err.message))
  }, [])

  useEffect( () => {
    axios.get(`${BASE_URL}/api/itineraries?cityId=${cityid}`)
    .then(response => setItineraries(response.data.response))
    .catch(err => console.log(err.message))
  }, [])


  return (

    <div id='containerAllDetails'>
      <h1 className='titleHotelDetails'>{cityFound.name} Details</h1>
      <CitiesDet key={cityFound.id} name={cityFound.name} continent={cityFound.continent} img={cityFound.photo} population={cityFound.population}/>
      {itineraries.length !== 0 ?
      <>
      <h2 className='titlePopuparTinearies'>Popular Tineraries</h2>
      <div className='containerActivities'>
      {itineraries.map( each => 
        <ActivitiesDetails photo={each.photo[0]} price={each.price} duration={each.duration} description={each.description} name={each.name} />
      )}
      </div>
      </>
      :
      <h2 className='titleNotHaveShows'>Ooops, this city does not have activities :(</h2>
    }
    </div>
  )
}

export default CitiesDetails