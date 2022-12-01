import { createReducer } from "@reduxjs/toolkit";
import commentActions from '../actions/commentActions'

const {getCommentFilter, createComment, deleteComment,updateComment} = commentActions

const inicialState = {
    shows: [],
    showId:"",
    userId:"",
    date:"",
    comment:[],
    message:"Comment Add",
    commentsFilter:[]
}


const commentReducer = createReducer(inicialState, 
    (builder) => {
        builder
        .addCase(getCommentFilter.fulfilled, (state,action)=>{
            /* console.log('Action Reducer',action.payload) */
            return{...state, commentsFilter:action.payload.response}
        })

        .addCase(createComment.fulfilled, (state,action)=>{
            /* console.log('Comment Reducer',action.payload) */
            return{...state, comment:action.payload}
        })

        .addCase(deleteComment.fulfilled, (state,action)=>{
           /*  console.log('Comment Reducer',action.payload) */
            return{...state, action}
        })

        .addCase(updateComment.fulfilled, (state,action)=>{
            /* console.log('Comment Reducer',action.payload) */
            return{...state, action}
        })

})


export default commentReducer