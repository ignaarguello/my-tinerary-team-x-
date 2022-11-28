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

const deleteMyShow= createAsyncThunk('deleteMyShow', async ({token, idShow}) => {
    let headers = { headers: { Authorization: `Bearer ${token}` } }
    let url = `${BASE_URL}/api/shows/${idShow}`
    try{
        console.log(idShow)
        console.log(headers)
        let res = await axios.delete(url, headers)
        console.log('RES',res)
        return{
            mensaje: res.data.message
        }

    } catch(error){
        console.log(error)
        return { payload: "Error" }
    }
})

const editMyShow= createAsyncThunk('editMyShow', async ({token, data ,idShow}) => {
    let headers = { headers: { Authorization: `Bearer ${token}` } }
    let url = `${BASE_URL}/api/shows/${idShow}`
    try{
        let res = await axios.put(url, data, headers)
        console.log('RES',res)
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
    deleteMyShow,
    editMyShow,
}

export default showActions;