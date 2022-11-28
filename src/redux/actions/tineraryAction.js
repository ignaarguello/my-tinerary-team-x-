import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";

const getMyTinerary = createAsyncThunk('getMyTinerary', async({user}) => {
    let url = `${BASE_URL}/api/itineraries?userId=${user}`
    console.log(url)
    try{
        const res = await axios.get(url)
        //console.log(res)
        const allTineraries = res.data.response.map(e => e)
        //console.log(allTineraries);
        return {
            myItineraries: allTineraries
        }
    } catch(error){
        console.log(error.response)
        return { payload: "error" }
    }
})

const deleteMyTinerary = createAsyncThunk('deleteMyTinerary', async ({idTinerary, token}) => {
    let url = `${BASE_URL}/api/itineraries/${idTinerary}`
    let headers = { headers: { Authorization: `Bearer ${token}` } }
    //console.log("ID TINERARY: ", idTinerary, "TOKEN: ", headers);
    try{
        //console.log(url)
        let res = await axios.delete(url, headers)
        //console.log(res.data.message);
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