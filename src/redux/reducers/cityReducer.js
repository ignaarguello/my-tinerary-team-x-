import { createReducer } from "@reduxjs/toolkit";
import cityActions from "../actions/cityAction"

const {getCities, filterCities, getMyCities} = cityActions

const initialState = {
    valor: '',
    cities: [],
    categories: [],
    continent: [],
    myCities: []
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

    })

export default cityReducer