import { createReducer } from "@reduxjs/toolkit";
import hotelActions from "../actions/hotelActions";

const {getHotels, getHotelsFiltered, getMyHotels} = hotelActions

const initialState = {
    hotels: [],
    order: '',
    name: '',
    myHotels:[]
};

const hotelReducer = createReducer(initialState, 
    (builder) => {
        builder
            .addCase(getHotels.fulfilled, (state,action)=>{
                return {...state, hotels:action.payload};
            })

            .addCase(getHotelsFiltered.fulfilled, (state, action) => {
                return { ...state, hotels: action.payload.res , order: action.payload.order , name: action.payload.name};
            })

            .addCase(getMyHotels.fulfilled, (state, action) => {
                console.log(action.payload)
                return {
                    ...state,
                    ...action.payload
                }
            })
})


export default hotelReducer