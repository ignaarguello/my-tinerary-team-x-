import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";

const getReactions = createAsyncThunk("getReactions", async (id) => {
    try{
        const res = await axios.get(`${BASE_URL}/api/reactions?itineraryId=${id}`)
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

const reactionActions = {
    getReactions,
    updateReaction,
}

export default reactionActions