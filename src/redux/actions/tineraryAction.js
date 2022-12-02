import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";

const getMyTinerary = createAsyncThunk('getMyTinerary', async({user}) => {
    let url = `${BASE_URL}/api/itineraries?userId=${user}`
    try{
        const res = await axios.get(url)
        const allTineraries = res.data.response.map(e => e)
        return {
            myItineraries: allTineraries
        }
    } catch(error){
        console.log(error.response)
        return { payload: "error" }
    }
})

const getTineraryByCity = createAsyncThunk('getTineraryByCity', async(cityid) => {
    let url = `${BASE_URL}/api/itineraries?cityId=${cityid}`
    try{
        const res = await axios.get(url)
        const allTineraries = res.data.response.map(e => e)
        //console.log("RES ACTION",allTineraries);
        return {
            cityTineraries: allTineraries
        }
    } catch(error){
        console.log(error.response)
        return { payload: "error" }
    }
})

const deleteMyTinerary = createAsyncThunk('deleteMyTinerary', async ({idTinerary, token}) => {
    let url = `${BASE_URL}/api/itineraries/${idTinerary}`
    let headers = { headers: { Authorization: `Bearer ${token}` } }
    try{
        let res = await axios.delete(url, headers)
        return{
            mensaje: res.data.message
        }

    } catch(error){
        console.log(error)
        return { payload: "Error" }
    }
})

const getOneTinerary = createAsyncThunk('getOneTinerary', async(id) => {
    let url = `${BASE_URL}/api/itineraries/${id}`
    try{
        const res = await axios.get(url)
        console.log("RES ACTION", res)
        return {
            oneTinerary: res.data.response
        }
    } catch(error){
        console.log(error.response)
        return { payload: "error" }
    }
})

const tineraryActions = {
    getMyTinerary,
    deleteMyTinerary,
    getTineraryByCity,
    getOneTinerary
}

export default tineraryActions;