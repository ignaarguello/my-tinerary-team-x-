import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";

const getMyTinerary = createAsyncThunk('getMyTinerary', async({user}) => {
    let url = `${BASE_URL}/api/itineraries?userId=${user}`
    try{
        const res = await axios.get(url)
        const allTineraries = res.data.response.map(e => e)
        console.log(allTineraries);
        return {
            myItineraries: allTineraries
        }
    } catch(error){
        console.log(error)
        return { payload: "error" }
    }
})

const deleteMyTinerary = createAsyncThunk('deleteMyTinerary', async (idTinerary) => {
    let url = `${BASE_URL}/api/itineraries/${idTinerary}`
    try{
        console.log(url)
        let res = await axios.delete(url)
        console.log(res.data.message);
        return{
            mensaje: res.data.message
        }

    } catch(error){
        console.log(error)
        return { payload: "Error" }
    }
})

const tineraryActions = {
    getMyTinerary,
    deleteMyTinerary
}

export default tineraryActions;