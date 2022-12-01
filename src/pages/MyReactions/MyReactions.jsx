import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import reactionActions from '../../redux/actions/reactionAction'

function MyReactions() {
    const dispatch = useDispatch()
    const {id, token} = useSelector(store => store.signIn)
    const {myReactions} = useSelector(store => store.reactionReducer)
    const {getMyReactions} = reactionActions
    console.log("id",id)
    console.log("token",token)
    console.log("my reactions:",myReactions)

    useEffect( () => {
        dispatch(getMyReactions({id: id, token: token}))
    }, [])

  return (
    <div className='cont-general'>
        <h1>My reactions</h1>
        { myReactions.forEach(e => 
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