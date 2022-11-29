import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MyShowCard from '../components/MyShowCard'
import showActions from '../redux/actions/showActions'
import { useNavigate } from 'react-router-dom'

function MyItineraries() {

    const {id} = useSelector(store => store.signIn)
    const { getMyShow } = showActions
    const { myShows } = useSelector( (store) => store.shows )
    const dispatch = useDispatch()
    const navigate = useNavigate()
 
   useEffect( () => {
      dispatch(getMyShow({ user:id }))
    }, [])

    let redirigir = () => {
      navigate('/newshow')
    }

  return (
    <div id='containerGeneral'>
      <div id='containerButtonCreateNewShow'>
          <h2 id='titleNewShow' onClick={redirigir}>+ Create a new show</h2>
      </div>
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