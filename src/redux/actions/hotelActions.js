import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../api/api";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const getHotels = createAsyncThunk("getHotels", async () => {
    try{
        const res = await axios.get(`${BASE_URL}/api/hotels`)
        return res.data.response
    }catch(error){
        console.log(error)
        return {
            payload: 'Error'
        }
    }
})

const getHotelsFiltered = createAsyncThunk("getHotelsFiltered", async (data) => {
    try{
        const res = await axios.get(`${BASE_URL}/api/hotels?name=${data.name}&order=${data.order}`)
        const dataToReducer = {
            res: res.data.response,
            name: data.name,
            order: data.order
        }
        return dataToReducer
    }catch(error){
        console.log(error)
        return {
            payload: 'Error'
        }
    }
})

const getMyHotels = createAsyncThunk('getMyHotels', async({user}) => {
    let url = `${BASE_URL}/api/hotels?userId=${user}`
    try{
        const res = await axios.get(url)
        return {
            myHotels: res.data.response
        }
    } catch(error){
        console.log(error)
        return { payload: "error" }
    }
})

const deleteMyHotel= createAsyncThunk('deleteMyHotel', async ({token, idHotel}) => {
    let headers = { headers: { Authorization: `Bearer ${token}` } }
    let url = `${BASE_URL}/api/hotels/${idHotel}`
    try{
        console.log(idHotel)
        console.log(headers)
        let res = await axios.delete(url, headers)
        console.log('RES',res)
        return{
            mensaje: res.data.message
        }

    } catch(error){
        console.log(error)
        return { payload: "Error" }
    }
})

const editMyHotel= createAsyncThunk('editMyHotel', async ({token, data ,idHotel}) => {
    let headers = { headers: { Authorization: `Bearer ${token}` } }
    let url = `${BASE_URL}/api/hotels/${idHotel}`
   
    try{
        let res = await axios.put(url, data, headers)
        console.log(res)
        if (res.data.success){
            toast.success(res.data.message, {
                icon: '🌆',
                position: "top-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            toast.info("You are being redirected in a few seconds", {
                icon: '🥳',
                position: "top-right",
                autoClose: 3500,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "colored",
                });
          } else{
            toast.error(res.data.message.join('\n'), {
              icon: '💔',
              position: "top-right",
              autoClose: 2500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "colored",
              })
          }
        return{
            mensaje: res.data.message
        }

    } catch(error){
        console.log(error)
        return { payload: "Error" }
    }
})



const hotelActions = {
    getHotels,
    getHotelsFiltered,
    getMyHotels,
    deleteMyHotel,
    editMyHotel,
}

export default hotelActions;