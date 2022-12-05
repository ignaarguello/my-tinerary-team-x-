import React from 'react'
import { useEffect, useState } from 'react'
import './Comments.css'
import NewComment from '../NewComment/NewComment'
import { useSelector, useDispatch } from 'react-redux'
import commentActions from '../../redux/actions/commentActions'
import showActions from '../../redux/actions/showActions'
import CommentCard from '../CommentCard/CommentCard'
import { useParams } from 'react-router-dom'

export default function Comments() {
 const dispatch = useDispatch()
  const {getCommentFilter} = commentActions
  const {getShowsHotelId} = showActions
  const {hotelId} = useParams()

  const {showsHotelId} = useSelector(store => store.shows)
  const {commentsFilter} = useSelector(store => store.comment)

  let [data, setData] = useState([])
  let [dataUlt, setDataUlt] = useState([])

  useEffect(()=>{
    setDataUlt(commentsFilter)
    console.log('ULT',dataUlt)
  },[commentsFilter])

  
  async function getShows(){
      await hotelId
      /* console.log('Use Params',hotelId) */
      let res = await dispatch(getShowsHotelId(hotelId))
      if(res.payload.showsHotelId.length !== 0){
        let showsId = (res.payload?.showsHotelId?.map(e => e._id))
        /* console.log('nada',showsId) */
        dispatch(getCommentFilter(showsId[0]))
      }
      else{
        setDataUlt([])
      }
    }
    
    useEffect(()=>{
      getShows()
    },[dataUlt])
   


return (
    <div id='containerComments'>
       <NewComment />
       <div id='containerCommentsId'>
          {dataUlt.length > 0 ? dataUlt.map(each => <CommentCard idCard={each._id} comment={each?.comment} date={each?.date.slice(0,10)} photo={each?.photo} name={each?.name} userId={each?.userId} />) : <h2 className='titleNoComments'>There are no comments..</h2>}
       </div>
    </div>
  )
}