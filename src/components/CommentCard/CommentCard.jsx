import React from 'react'
import './CommentCard.css'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect, useRef } from 'react'
import commentActions from '../../redux/actions/commentActions'

export default function CommentCard(props) {
    let [hideUpdateComment, setHideUpdateComment] = useState(false) 
    const {token, id } = useSelector( store => store.signIn)
    let {comment, date, idCard, name, photo, userId, showId} = props
    const dispatch = useDispatch()
    const inputUpdateCommentRef = useRef()
    
    const {deleteComment, updateComment, getCommentFilter} = commentActions
    
    function showUpdateComment(){
        if(!hideUpdateComment){
            setHideUpdateComment(true)
        }
        if(hideUpdateComment){
            setHideUpdateComment(false)
        }
        console.log(hideUpdateComment)
      }
      
      function deleteCommentFun(){
        dispatch(deleteComment({id:idCard, token:token}))
        
    }

    function closeUpdate(){
        setHideUpdateComment(false)
    }

    function updateCommentFun(event){
        let value = {
            comment:inputUpdateCommentRef.current.value
        } 
        dispatch(updateComment({id:idCard, data:value, token:token}))
    }



  return (
    <div id='containerCardComments'>
        {id == userId?
                <div id='container2'>
                <div id='containerPhotoName'>
                    <img className='photoCardComments' src={photo} />
                    <h5 className='nameCardComment1'>{name}</h5>
                </div>
                <div id='containerCommentText'>
                    <p className='commentCard'>{comment}</p>
                    <p className='dateCardComment'>{date}</p>
                </div>
                <div id='containerButtonsCardComment'>
                    <button className='btnCardComment' onClick={deleteCommentFun}><img className='imageButon' src="https://cdn-icons-png.flaticon.com/512/6794/6794645.png" alt="" /></button>
                    <button className='btnCardComment' onClick={showUpdateComment}><img className='imageButon' src="https://cdn-icons-png.flaticon.com/512/1828/1828911.png" alt="" /></button>
                </div>
            </div>
            : 
            <div id='container2'>
                <div id='containerPhotoName'>
                    <img className='photoCardComments2' src={photo} />
                    <h5 className='nameCardComment'>{name}</h5>
                </div>
                <div id='containerCommentText'>
                    <p className='commentCard'>{comment}</p>
                    <p className='dateCardComment'>{date}</p>
                </div>
                <div id='containerButtonsCardComment'>
                    
                </div>
            </div>
        }
        {hideUpdateComment && 
            <div id='containerUpdateComment'>
                <input type="text" id='inputUpdateComment' placeholder='Update Comment..' ref={inputUpdateCommentRef}  minlength="3"/>
                <div id='containerButtonUpdateComment' onClick={updateCommentFun} >
                    <div className='buttonUpdateComment'>
                        <img className='imgButtonUpdateComment' src="https://cdn-icons-png.flaticon.com/512/625/625163.png" alt="" />
                    </div>
                    <div className='buttonUpdateComment' onClick={closeUpdate}>
                        <img className='imgButtonUpdateComment'src="https://cdn-icons-png.flaticon.com/512/7710/7710431.png" alt="" />
                    </div>
                </div>
            </div>
        }
    </div>
  )
}
