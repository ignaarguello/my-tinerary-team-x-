import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";

const getReactions = createAsyncThunk("getReactions", async ({id, token}) => {
    let headers = { headers: { 'Authorization': `Bearer ${token}`} }
    try{
        const res = await axios.get(`${BASE_URL}/api/reactions?itineraryId=${id}`, headers)
        return res.data
    }catch(error){
        return {
            payload: error.response.data,
        }
    }
})

const updateReaction = createAsyncThunk("updateReaction", async (datos) => {
    let headers = { headers: { 'Authorization': `Bearer ${datos.token}` } }
    try{
        const res = await axios.put(`${BASE_URL}/api/reactions?name=${datos.name}&itineraryId=${datos.id}`, null, headers)
        return res.data
    }catch(error){
        return {
            payload: error.response.data,
        }
    }
})

const getMyReactions = createAsyncThunk("getMyReactions", async ({id, token}) => {
    let headers = { headers: { 'Authorization': `Bearer ${token}` } }
    try{
        const res = await axios.get(`${BASE_URL}/api/reactions?userId=${id}`, headers)
        console.log(res)
        return res.data.data
    } catch(error){
        return{
            payload: error.response.data
        }
    }
})

const deleteReaction = createAsyncThunk("deleteReaction", async ({id, token}) => {
    let headers = { headers: { 'Authorization': `Bearer ${token}` } }
    try{
        const res = await axios.put(`${BASE_URL}/api/reactions/${id}`, null, headers)
        console.log(res)
        return res.data.response
    } catch(error){
        return{
            payload: error.response.data
        }
    }
})

const reactionActions = {
    getReactions,
    updateReaction,
    getMyReactions,
    deleteReaction,
}

export default reactionActions