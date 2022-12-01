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
    
    useEffect( () => {
        dispatch(getMyReactions({id: id, token: token}))      
    }, [])

    console.log("my reactions:",myReactions)
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
                    <img src={e.icon} alt={e.name} />
                    <h2 onClick={("")} >Delete</h2>
                </div>
            </div>
        </>)
        }
    </div>
)
}

export default MyReactions