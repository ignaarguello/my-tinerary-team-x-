import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import reactionActions from '../../redux/actions/reactionAction'
import tineraryActions from '../../redux/actions/tineraryAction'

function MyReactions() {
    const dispatch = useDispatch()
    const {id, token} = useSelector(store => store.signIn)
    const {myReactions} = useSelector(store => store.reactionReducer)
    const {oneTinerary} = useSelector(store => store.tineraryReducer)
    const {getMyReactions} = reactionActions
    const {getOneTinerary} = tineraryActions
    //console.log("id",id)
    //console.log("token",token)
    
    useEffect( () => {
        dispatch(getMyReactions({id: id, token: token}))
        dispatch(getOneTinerary("6373014c2c66a5e23e791ef2"))
    }, [])
    
    let mapeado = myReactions?.map(e => e.itineraryId)
    console.log("map", mapeado);
    console.log("my reactions:",myReactions[0]?.itineraryId)
    console.log("one tinerary:",oneTinerary)

  return (
    <div className='cont-general'>
        <h1>My reactions</h1>
        { myReactions.map(e => 
        <>
            <div className='cont-myReaction'>
                <img src={e.icon} alt={e.name} />
                <h2>{""}</h2>
                <div className='info-myReaction'>
                    <img src={""} alt={""} />
                    <h2 onClick={""} >Delete</h2>
                </div>
            </div>
        </>)
        }
    </div>
)
}

export default MyReactions