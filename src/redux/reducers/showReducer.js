import { createReducer } from "@reduxjs/toolkit";
import showActions from "../actions/showActions";

const { getMyShow, deleteMyShow } = showActions

const initialState = {
    myShows: [],
    mensaje: ''
}

const showReducer = createReducer(initialState,
    (builder) => {
        builder.addCase(getMyShow.fulfilled, (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        })

        .addCase(deleteMyShow.fulfilled, (state, action) => {
            return{
                ...state,
                mensaje: action.payload.mensaje
            }
        })
    })

export default showReducer