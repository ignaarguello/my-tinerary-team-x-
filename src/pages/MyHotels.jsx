import React from "react";
import { useEffect } from "react";
import MyHotelCard from "../components/MyHotelCard";
import { useDispatch, useSelector } from 'react-redux'
import hotelActions from '../redux/actions/hotelActions'

function MyHotels() {

    const {id} = useSelector(store => store.signIn)
    const { getMyHotels} = hotelActions
    const { myHotels } = useSelector( (store) => store.hotels)
    const dispatch = useDispatch()

    useEffect( () => {
        dispatch(getMyHotels({ user:id }))
    }, [])

  return (
    <div id='containerGeneral'>
        <div className='containerCards'>
      {
        ( myHotels.length > 0)
        ?  myHotels.map(each=><MyHotelCard key={each?._id} name={each?.name} description={each?.description} image={each?.photo[0]} capacity={each?.capacity} id={each?._id}/>)
        : <h2>You don't have hotels</h2>
      }
      </div>
  </div>
  )
  
}

export default MyHotels