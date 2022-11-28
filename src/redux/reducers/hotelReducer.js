import { createReducer } from "@reduxjs/toolkit";
import hotelActions from "../actions/hotelActions";

const {getHotels, getHotelsFiltered, getMyHotels, deleteMyHotel, editMyHotel} = hotelActions

const initialState = {
    hotels: [],
    hotelsAdmin: [],
    order: '',
    name: '',
    myHotels:[],
    mensaje:'Hotel removed successfully'
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
                return {
                    ...state,
                    ...action.payload
                }
            })
            
            .addCase(deleteMyHotel.fulfilled, (state, action) => {
                return{
                    ...state,
                    mensaje: action.payload.mensaje
                }
            })
    
            .addCase(editMyHotel.fulfilled, (state, action) => {
                return{
                    ...state,
                    mensaje: action.payload.mensaje
                }
            })
})


export default hotelReducer