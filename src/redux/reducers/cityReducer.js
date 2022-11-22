import { createReducer } from "@reduxjs/toolkit";
import cityActions from "../actions/cityAction"

const {getCities, filterCities, getMyCities, deleteMyCity } = cityActions

const initialState = {
    valor: '',
    cities: [],
    categories: [],
    continent: [],
    myCities: [],
    mensaje: ''
}

const cityReducer = createReducer(initialState,
    (builder) => {
        builder.addCase(getCities.fulfilled, (state, action) => {
            let allcities = action.payload.cities.map((city)=>city.continent)
            let eachContinent = [...new Set(allcities)]
            return {
                ...state,
                cities: action.payload.cities,
                categories: eachContinent
            }
        })

        .addCase(filterCities.fulfilled, (state, action) => {
            return {
                ...state,
                ...action.payload,
            }
        })

        .addCase(getMyCities.fulfilled, (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        })

        .addCase(deleteMyCity.fulfilled, (state, action) => {
            return{
                ...state,
                mensaje: action.payload.mensaje
            }
        })
    })

export default cityReducer