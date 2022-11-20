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

const cityActions = {
    getCities,
    filterCities,
}

export default cityActions;