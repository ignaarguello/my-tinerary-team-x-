import React from 'react'
import './NewComment.css'
import { useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import commentActions from '../../redux/actions/commentActions'
import showActions from '../../redux/actions/showActions'
import axios from "axios";
import { BASE_URL } from "../../api/url";

export default function NewComment() {
    const {showsHotelId} = useSelector(store => store.shows)
    let [hideNewComment, setHideNewComment] = useState(false) 
    const { id, token, photo } = useSelector( store => store.signIn)
    const commentRef = useRef()
    const dateNow = new Date()
    const date = dateNow.toLocaleDateString("en-us")
    const {createComment} = commentActions
    const dispatch = useDispatch()
    const {cityTineraries} = useSelector(store => store.tineraryReducer)
    
    let [nada, setNada] = useState([])
    console.log('=>', nada)


    function showNewComment(){
      if(!hideNewComment){
        setHideNewComment(true)
      }
      if(hideNewComment){
        setHideNewComment(false)
      }
    }
  
    async function sendComment(){
        const data = {
            showId:showsHotelId[0],
            date:date,
            comment:commentRef?.current.value,
            itineraryId:'638958b792fc3ae75a346740',
        }
        console.log(data)
        await dispatch(createComment({data,token}))
    }

    function deleteComment (event){
      event.preventDefault()
      event.target.reset()
    }
    
    return (
    <div id='containerNewComment'>
        <h3 onClick={showNewComment} id='titleNewComment'>¿ New Comment ?</h3>
          {hideNewComment &&
              <div id='containerCompontentNewComment'>
                <div id='containerTitleTextArea'>
                  <form id='formComment' onSubmit={deleteComment}>
                    <textarea id='textNewComment' placeholder='Leave your comment...' ref={commentRef} minlength="3"></textarea>
                      <div id='containerButtons'>
                        <button className='btnSend' onSubmit={deleteComment}><img className='imageButon' src="https://cdn-icons-png.flaticon.com/512/6794/6794645.png" alt="" /></button>
                        <button className='btnSend' onClick={sendComment}><img className='imageButon' src="https://cdn-icons-png.flaticon.com/512/1828/1828925.png" alt="" /></button>
                      </div>
                  </form>
                </div>
            </div>
          }
    </div>
  )
}