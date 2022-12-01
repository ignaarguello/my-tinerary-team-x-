import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import reactionActions from '../../redux/actions/reactionAction'
import { useState, useEffect } from 'react'
import './Reaction.css'


function Reaction(props) {
    let { idItinerary } = props
    const dispatch = useDispatch()
    const { getReactions, updateReaction } = reactionActions
    const { token, id } = useSelector(state => state.signIn)
    const [refresh, setRefresh] = useState(true)
    const [reaction, setReaction] = useState({})

    useEffect(() => {
        reactions()
    }, [refresh])

    async function reactions() {
        let res = await dispatch(getReactions(idItinerary))
        setReaction(res.payload)
    }

    async function press(e) {
        let name
        let icon
        let iconBack
        reaction.data.map(react => {
            if (react.name === e.target.name) {
                name = react.name
                icon = react.icon
                iconBack = react.iconBack
            }
        })

        let datos = {
            token: token,
            id: idItinerary,
            name: name,
        }
        try {
            let res = await dispatch(updateReaction(datos))
            console.log(res)
            setRefresh(!refresh)
        }
        catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            {
                reaction.success &&
                reaction.data.map(react => {
                    let userFound = react.userId.find(user => user._id === id)
                    return (
                        <div key={react.name} className='reaction'>
                            {
                                userFound ? (
                                    <div className='cont-Reaction'>
                                        <div className='iconReaction'>
                                            <img onClick={press} name={react.name} src={react.icon} alt="icon" />
                                        </div>
                                        <div className='nameReaction'>
                                            <p>{reaction.howManyReactions[react.name]}</p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className='cont-Reaction'>
                                        <div className='iconBackReaction'>
                                            <img onClick={press} name={react.name} src={react.iconBack} alt="icon" />
                                        </div>
                                        <div className='nameReaction'>
                                            <p>{reaction.howManyReactions[react.name]}</p>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    )
                })
            }
        </>
    )
}

export default Reaction