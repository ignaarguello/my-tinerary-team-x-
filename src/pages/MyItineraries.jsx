import React, { useEffect } from 'react'
import MyTineraryCard from '../components/MyTineraryCard/MyTineraryCard'
import { useDispatch, useSelector } from 'react-redux'
import tineraryActions from '../redux/actions/tineraryAction'

function MyItineraries() {

    const { getMyTinerary } = tineraryActions
    const {myItineraries } = useSelector( (store) => store.tineraryReducer )
    const dispatch = useDispatch()
    console.log(myItineraries);
    useEffect( () => {
        dispatch(getMyTinerary({ user: '6372d48e597d27b935de7569' }))
    }, [])


  return (
    <div id='containerGeneral'>
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