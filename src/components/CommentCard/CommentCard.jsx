import React from 'react'
import './CommentCard.css'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect, useRef } from 'react'
import commentActions from '../../redux/actions/commentActions'

export default function CommentCard(props) {
    let [hideUpdateComment, setHideUpdateComment] = useState(false) 
    const {token } = useSelector( store => store.signIn)
    let {comment, date, id,name,photo} = props
    const dispatch = useDispatch()
    const inputUpdateCommentRef = useRef()
    
    const {deleteComment, updateComment} = commentActions

    useEffect(()=>{
        console.log(props)
    },[])

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
        dispatch(deleteComment({id:id, token:token}))
    }

    function closeUpdate(){
        setHideUpdateComment(false)
    }

    function updateCommentFun(){
        let value = {
            comment:inputUpdateCommentRef.current.value
        } 

        dispatch(updateComment({id:id, data:value, token:token}))
    }



  return (
    <div id='containerCardComments'>
        <div id='container2'>
            <div id='containerPhotoName'>
                <img className='photoCardComments' src={photo} />
                <h5 className='nameCardComment'>{name}</h5>
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
        {hideUpdateComment && 
            <div id='containerUpdateComment'>
                <input type="text" id='inputUpdateComment' placeholder='Update Comment..' ref={inputUpdateCommentRef} />
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
