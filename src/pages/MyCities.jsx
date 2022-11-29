import React, { useEffect } from 'react'
import MyCityCard from '../components/MyCityCard'
import { useDispatch, useSelector } from 'react-redux'
import cityActions from '../redux/actions/cityAction'

function MyCities() {
    const {id} = useSelector(store => store.signIn)
    const { getMyCities } = cityActions
    const { myCities } = useSelector( (store) => store.cityReducer )
    const dispatch = useDispatch()
    console.log(id);

    useEffect( () => {
        dispatch(getMyCities({ user: id }))
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