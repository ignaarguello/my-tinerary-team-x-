import React from 'react'
import CitiesDet from '../../components/CitiesDet/CitiesDet'
import cities from '../../cities'
import activities from '../../activities'
import './CitiesDetails.css'
import { useParams } from 'react-router-dom'
import ActivitiesDetails from '../../components/ActivitiesDetails/ActivitiesDetails'

// componente donde renderizo la pagina completa

function CitiesDetails() {
  let {cityid} = useParams()
  let cityFound = cities.find( e => e.id === cityid)
  let activityFound = activities.filter( e => e.citiId === cityFound.id)
  console.log(activityFound);

  return (

    <div id='containerAllDetails'>
      {activityFound.length !== 0 ?
      <>
      <h1 className='titleHotelDetails'>{cityFound.name} Details</h1>
      <CitiesDet key={cityFound.id} name={cityFound.name} continent={cityFound.continent} img={cityFound.photo} population={cityFound.population}/>
      <h2 className='titlePopuparTinearies'>Popular Tineraries</h2>
      <div className='containerActivities'>
        <ActivitiesDetails photo={activityFound[0].photo[0]} price={activityFound[0].price} duration={activityFound[0].duration} name={activityFound[0].name} />
        <ActivitiesDetails photo={activityFound[1].photo[1]} price={activityFound[1].price} duration={activityFound[1].duration} name={activityFound[1].name} />
      </div>
      
      </>
      :
      <>
      <h1 className='titleHotelDetails'>{cityFound.name} Details</h1>
      <CitiesDet key={cityFound.id} name={cityFound.name} continent={cityFound.continent} img={cityFound.photo} population={cityFound.population}/>
      <h2 className='titleNotHaveShows'>Ooops, This city does not have shows</h2>
      </>
    }
    </div>

  )
}

export default CitiesDetails