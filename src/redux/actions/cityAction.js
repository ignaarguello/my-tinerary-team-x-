import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";

const getCities = createAsyncThunk('getCities', async() => {
    try{
        const respuesta = await axios.get(`${BASE_URL}/api/cities`)
        return { cities: respuesta.data.response }
    } catch(error){
        console.log(error)
        return { payload: "error" }
    }
})

const getOneCity = createAsyncThunk('getOneCity', async(idCity) => {
    try{
        const respuesta = await axios.get(`${BASE_URL}/api/cities/${idCity}`)
        return { oneCity: respuesta.data.response[0] }
    } catch(error){
        console.log(error)
        return { payload: "error" }
    }
})

const filterCities = createAsyncThunk('filterCities', async({continent, value}) => {
    let url = `${BASE_URL}/api/cities?${continent}&name=${value}`
    try{
        const res = await axios.get(url)
        return {
            cities: res.data.response,
            continent,
            value,
        }
    } catch(error){
        console.log(error)
        return { payload: "error" }
    }
})

const getMyCities = createAsyncThunk('getMyCities', async({user}) => {
    let url = `${BASE_URL}/api/cities?userId=${user}`
    try{
        const res = await axios.get(url)
        return {
            myCities: res.data.response
        }
    } catch(error){
        console.log(error)
        return { payload: "error" }
    }
})

const deleteMyCity = createAsyncThunk('deleteMyCity', async ({idCity, token}) => {
    let url = `${BASE_URL}/api/cities/${idCity}`
    let headers = { headers: { Authorization: `Bearer ${token}` } }
    try{
        let res = await axios.delete(url, headers)
        console.log(res.data.message);
        return{
            mensaje: res.data.message
        }

    } catch(error){
        console.log(error)
        return { payload: "Error" }
    }
})

const cityActions = {
    getCities,
    filterCities,
    getMyCities,
    deleteMyCity,
    getOneCity
}

export default cityActions;