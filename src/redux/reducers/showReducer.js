import { createReducer } from "@reduxjs/toolkit";
import showActions from "../actions/showActions";

const { getMyShow, deleteMyShow, editMyShow, getShowsHotelId} = showActions

const initialState = {
    myShows: [],
    mensaje: 'Show removed successfully',
    showsHotelId:"",
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

        .addCase(editMyShow.fulfilled, (state, action) => {
            return{
                ...state,
                mensaje: action.payload.mensaje
            }
        })

        .addCase(getShowsHotelId.fulfilled, (state, action) => {
            /* console.log(action.payload.showsHotelId.map(e=>e._id)) */
            return{
                ...state,
                showsHotelId:action.payload.showsHotelId.map(e=>e._id)
            }
        })
    })

export default showReducer