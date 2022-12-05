import React from 'react'
import CitiesDet from '../../components/CitiesDet/CitiesDet'
import './CitiesDetails.css'
import { useParams } from 'react-router-dom'
import ActivitiesDetails from '../../components/ActivitiesDetails/ActivitiesDetails'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import cityActions from '../../redux/actions/cityAction'
import tineraryActions from '../../redux/actions/tineraryAction'
import commentActions from '../../redux/actions/commentActions'
import { useState } from 'react'


function CitiesDetails() {

  let dispatch = useDispatch()
  let {cityid} = useParams()

  const {getCommentFilter} = commentActions
  const {getOneCity} = cityActions
  const {getTineraryByCity} = tineraryActions
  
  let {oneCity} = useSelector(store => store.cityReducer)
  let {cityTineraries} = useSelector(store => store.tineraryReducer)
  let [ult, setUlt] = useState([])

  async function getData(){
    let hola = await cityTineraries.map( e=> dispatch(getCommentFilter(e.id)))
    setUlt(hola)
  }
  

  console.log('hola', ult)
  
  useEffect( () => {
    dispatch(getOneCity(cityid))
    dispatch(getTineraryByCity(cityid))
    dispatch(getCommentFilter(cityid))
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  

  
  return (
    <div id='containerAllDetails'>
      <h1 className='titleCityDetails'>{oneCity.name} - Details</h1>
      <CitiesDet key={oneCity.id} name={oneCity.name} continent={oneCity.continent} img={oneCity.photo} population={oneCity.population}/>
      {cityTineraries.length !== 0 ?
      <>
      <h2 className='titleItineraries'>Popular Tineraries</h2>
      <div className='containerActivities'>
      {cityTineraries.map( each =>
      <>
        <ActivitiesDetails photo={each.photo[0]} key={each._id} itinerary={each} id={each._id} price={each.price} duration={each.duration} description={each.description} name={each.name} />
      </> 
      )}
      </div>
      </>
      :
      <h2 className='titleNotHaveTineraries'>Ooops &#128532; This city does not have tineraries &#9978; &#127946;</h2>
    }
    </div>
  )
}

export default CitiesDetails