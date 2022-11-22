import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";

const getMyShow= createAsyncThunk('getMyShow', async({user}) => {
    let url = `${BASE_URL}/api/shows?userId=${user}`
    try{
        const res = await axios.get(url)
        const allShows = res.data.response.map(e => e)
        return {
            myShows: allShows
        }
    } catch(error){
        console.log(error)
        return { payload: "error" }
    }
})

const deleteMyShow= createAsyncThunk('deleteMyShow', async (idHotel) => {
    let url = `${BASE_URL}/api/shows/${idHotel}`
    try{
        let res = await axios.delete(url)
        return{
            mensaje: res.data.message
        }

    } catch(error){
        console.log(error)
        return { payload: "Error" }
    }
})

const showActions = {
    getMyShow,
    deleteMyShow
}

export default showActions;