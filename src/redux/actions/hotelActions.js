import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../api/api";
import axios from 'axios'



const getHotels = createAsyncThunk("getHotels", async () => {
    try{
        const res = await axios.get(`${BASE_URL}/api/hotels`)
        return res.data.response
    }catch(error){
        console.log(error)
        return {
            payload: 'Error'
        }
    }
})

const getHotelsFiltered = createAsyncThunk("getHotelsFiltered", async (data) => {
    try{
        const res = await axios.get(`${BASE_URL}/api/hotels?name=${data.name}&order=${data.order}`)
        const dataToReducer = {
            res: res.data.response,
            name: data.name,
            order: data.order
        }
        return dataToReducer
    }catch(error){
        console.log(error)
        return {
            payload: 'Error'
        }
    }
})


const hotelActions = {
    getHotels,
    getHotelsFiltered,
}



export default hotelActions;