import React, { useEffect } from 'react'
import MyTineraryCard from '../components/MyTineraryCard/MyTineraryCard'
import { useDispatch, useSelector } from 'react-redux'
import tineraryActions from '../redux/actions/tineraryAction'
import { useNavigate } from 'react-router-dom'

function MyItineraries() {

    let navigate = useNavigate()
    const { getMyTinerary } = tineraryActions
    const {myItineraries } = useSelector( (store) => store.tineraryReducer )
    const { id } = useSelector( store => store.signIn)
    const dispatch = useDispatch()

    useEffect( () => {
        dispatch(getMyTinerary({ user: id }))
    }, [])

    let redirigir = () => {
      navigate('/newtinerary')
    }

  return (
    <div id='containerGeneral'>
      <div className='btn-createTine'>
        <h2 onClick={redirigir}>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAKpJREFUSEvVleERQDAMRp8J2MAZwUSYwCpGMoIRbMLlR52r0mqU42/le/mSJs1I/GWJ9XEBBqABigj4DHTAaGJtgIj3EcL7EIFUZwA5LJUACd8Stx0sD4irACYhXyLRDv4J8M2Kq1y3SpQcsL9Y/+zBqw5C5/BWk0NFXU4P29Q3oaGw7x3UwBSa7tV/9hCZdZ0M8MSDc7mu5VAgLZArSnTaZIWmO9S3yNTAFZ7JIRmGje36AAAAAElFTkSuQmCC"/>CREATE ITINERARY
        </h2>
      </div>
        <div className='containerCards'>
      {
        ( myItineraries.length > 0)
        ?  myItineraries.map(each=><MyTineraryCard key={each?._id} id={each?._id} name={each?.name} description={each?.description} img={each?.photo[0]} price={each?.price} duration={each?.duration} />)
        : <h2>You don't have itineraries</h2>
      }
      </div>
  </div>
  )
  
}

export default MyItineraries