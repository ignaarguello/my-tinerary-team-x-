import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../api/api";
import axios from 'axios';


const getCommentFilter = createAsyncThunk('getCommentFilter', async (data)=>{
    try{
        let comment = await axios.get(`${BASE_URL}/api/comments?showId=${data}`)
        /* console.log('Action Commment', comment) */
        return{
            success:true,
            response: comment.data.response
        }
    }catch(error){
        return {
            success:false,
            response: error.response.data.message
        }
    }
})


const createComment = createAsyncThunk('createComment', async ({data, token})=>{
    let headers = { headers: { Authorization: `Bearer ${token}` } };
    try{
        let comment = await axios.post(`${BASE_URL}/api/comments`, data, headers)
        /* console.log('Action Commment', comment) */
        return{
            success:true,
            response: comment.data.response
        }
    }catch(error){
        return {
            success:false,
            response: error.response.data.message
        }
    }
})

const deleteComment = createAsyncThunk('deleteComment', async ({id, token})=>{
    let headers = { headers: { Authorization: `Bearer ${token}` } };
    try{
        let comment = await axios.delete(`${BASE_URL}/api/comments/${id}`, headers)
        /* console.log('Action Commment', comment) */
        return{
            success:true,
            response: comment.data.response
        }
    }catch(error){
        return {
            success:false,
            response: error.response.data.message
        }
    }
})

const updateComment = createAsyncThunk('updateComment', async ({id, data, token})=>{
    let headers = { headers: { Authorization: `Bearer ${token}` } };
    try{
        let comment = await axios.put(`${BASE_URL}/api/comments/${id}`, data ,headers)
        /* console.log('Action Commment', comment) */
        return{
            success:true,
            response: comment.data.response
        }
    }catch(error){
        return {
            success:false,
            response: error.response.data.message
        }
    }
})


const commentActions = {
    getCommentFilter,
    createComment,
    deleteComment,
    updateComment,
}


export default commentActions