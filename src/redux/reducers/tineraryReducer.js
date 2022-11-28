import { createReducer } from "@reduxjs/toolkit";
import tineraryActions from "../actions/tineraryAction";

const { getMyTinerary, deleteMyTinerary } = tineraryActions

const initialState = {
    myItineraries: [],
    mensaje: 'Tinerary removed succesfully'
}

const tineraryReducer = createReducer(initialState,
    (builder) => {
        builder.addCase(getMyTinerary.fulfilled, (state, action) => {
            //console.log(action)
            return {
                ...state,
                ...action.payload
            }
        })

        .addCase(deleteMyTinerary.fulfilled, (state, action) => {
            //console.log(action.payload);
            return{
                ...state,
                mensaje: action.payload.mensaje
            }
        })
    })

export default tineraryReducer