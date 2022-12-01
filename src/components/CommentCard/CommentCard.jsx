import React from 'react'
import './CommentCard.css'
import { useSelector, useDispatch } from 'react-redux'

export default function CommentCard(props) {

    const { photo, name } = useSelector( store => store.signIn)
    let {comment, date} = props
    
    function hola(){

    }

  return (
    <div id='containerCardComments'>
        <div id='containerPhotoName'>
            <img className='photoCardComments' src={photo} />
            <h5 className='nameCardComment'>{name}</h5>
        </div>
        <div id='containerCommentText'>
            <p className='commentCard'>{comment}</p>
            <p className='dateCardComment'>{date}</p>
        </div>
        <div id='containerButtonsCardComment'>
            <button className='btnCardComment' onSubmit={hola}><img className='imageButon' src="https://cdn-icons-png.flaticon.com/512/6794/6794645.png" alt="" /></button>
            <button className='btnCardComment' onClick={hola}><img className='imageButon' src="https://cdn-icons-png.flaticon.com/128/3019/3019010.png" alt="" /></button>
        </div>
    </div>
  )
}
