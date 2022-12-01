import { createReducer } from "@reduxjs/toolkit";
import tineraryActions from "../actions/tineraryAction";

const { getMyTinerary, deleteMyTinerary, getTineraryByCity, getOneTinerary} = tineraryActions

const initialState = {
    myItineraries: [],
    mensaje: 'Tinerary removed succesfully',
    cityTineraries: [],
    oneTinerary: '',
}

const tineraryReducer = createReducer(initialState,
    (builder) => {
        builder.addCase(getMyTinerary.fulfilled, (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        })

        .addCase(deleteMyTinerary.fulfilled, (state, action) => {
            return{
                ...state,
                mensaje: action.payload.mensaje
            }
        })

        .addCase(getTineraryByCity.fulfilled, (state, action) => {
            //console.log(action);
            return{
                ...state,
                ...action.payload
            }
        })

        .addCase(getOneTinerary.fulfilled, (state, action) => {
            console.log("actionde one city:", action)
            return{
                ...state,
                oneTinerary: action.payload
            }
        })
    })

export default tineraryReducer