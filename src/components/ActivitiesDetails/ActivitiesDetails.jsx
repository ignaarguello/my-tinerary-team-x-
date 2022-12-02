import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import reactionActions from '../../redux/actions/reactionAction'
import Reaction from '../Reaction/Reaction'
import './ActivitiesDetails.css'

export default function CardItinerary(props) {
    let { itinerary } = props
    const dispatch = useDispatch()
    const { getReactions } = reactionActions
    let {token} = useSelector(store => store.signIn)

    useEffect(() => {
        dispatch(getReactions({id: itinerary._id, token: token}))
    }, [])

    return (
        <div id='containerActivityDetails'>
        <div className='cardActivity'>
            <div className='containerImgActivity'>
                <img className='imgActivity' src={itinerary.photo[0]} alt="" />
            </div>
            <div className='bodyCardActivity'>
                <h2 className='titleActivity'>{itinerary.name}</h2>
                <p className='paragraphActivity'>{itinerary.description}</p>
                <p className='paragraphActivity'>Duration - {itinerary.duration} HS</p>
                <p className='priceActivity'>Price - {itinerary.price} USD </p>
            </div>
            <div className='reactionsDetails'>
                <Reaction idItinerary={itinerary._id} />
            </div>
        </div>
    </div>
    )
}
