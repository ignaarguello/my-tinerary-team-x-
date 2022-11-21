import React, { useEffect } from 'react'
import MyCityCard from '../components/MyCityCard'
import { useDispatch, useSelector } from 'react-redux'
import cityActions from '../redux/actions/cityAction'

function MyCities() {

    const { getMyCities } = cityActions
    const { myCities } = useSelector( (store) => store.cityReducer )
    const dispatch = useDispatch()

    useEffect( () => {
        dispatch(getMyCities({ user: '6372d48e597d27b935de7568' }))
    }, [])

  return (
    <div id='containerGeneral'>
        <div className='containerCards'>
      {
        ( myCities.length > 0)
        ?  myCities.map(each=><MyCityCard key={each?._id} id={each?._id} name={each?.name} continent={each?.continent} img={each?.photo} population={each?.population}/>)
        : <h2>You don't have cities</h2>
      }
      </div>
  </div>
  )
}

export default MyCities