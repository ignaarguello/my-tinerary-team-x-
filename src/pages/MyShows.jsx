import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MyShowCard from '../components/MyShowCard'
import showActions from '../redux/actions/showActions'

function MyItineraries() {

    const { getMyShow } = showActions
    const { myShows } = useSelector( (store) => store.shows )
    const dispatch = useDispatch()
    useEffect( () => {
        dispatch(getMyShow({ user: '6372d48e597d27b935de7569' }))
    }, [])


  return (
    <div id='containerGeneral'>
        <div className='containerCards'>
      {
        ( myShows.length > 0)
        ?   myShows.map(each=><MyShowCard key={each?._id} name={each?.name} description={each?.description} image={each?.photo}  id={each?._id}/>)
        : <h2>You don't have shows</h2>
      }
      </div>
  </div>
  )
}

export default MyItineraries