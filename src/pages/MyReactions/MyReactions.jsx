import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import reactionActions from '../../redux/actions/reactionAction'
import './MyReactions.css'
import Swal from 'sweetalert2'


function MyReactions() {
    const dispatch = useDispatch()
    const {id, token} = useSelector(store => store.signIn)
    const {myReactions} = useSelector(store => store.reactionReducer)
    const {getMyReactions, deleteReaction} = reactionActions
    const [refresh, setRefresh] = useState(0)

    useEffect( () => {
        dispatch(getMyReactions({id: id, token: token}))
    }, [refresh])

console.log("myReactions", myReactions)

    const deleteFunction = async (e) => {
        try{
            Swal.fire({
                title: 'Are you sure?',
                text: `You are about to delete "${e.name}" reaction`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete!'
            }).then( async(result) => {
                if (result.isConfirmed) {
                    try{
                        dispatch(deleteReaction({id: e._id, token: token}))
                        setRefresh(refresh+1)
                    } catch(err){
                        console.log(err)
                    }
                }
            }
        )}catch(err){
            console.log(err)
        }
    }

return (
    <div className='cont-general'>
    { myReactions.length > 0 ? 
    <>
            { myReactions.map(e => 
        <>
        <div className='secCont'>
            <div className={`cont-myReaction reaction${e.name}`}>
                <img src={e.itineraryId.photo[0]} alt={e.itineraryId.name} />
                <h2>{e.itineraryId.name}</h2>
                <div className='info-myReaction'>
                    <img src={e.icon} alt={e.name} />
                    <img className='trash' src="https://cdn-icons-png.flaticon.com/512/3096/3096750.png" onClick={() => {deleteFunction(e)}} />
                </div>
            </div>
        </div>
        </>)
        }
    </> :
    <>
        <h2>No tenes reacciones waching</h2>
    </>
    }
    </div>
)
}

export default MyReactions