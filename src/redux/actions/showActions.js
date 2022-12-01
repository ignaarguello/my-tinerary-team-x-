import { createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const getMyShow= createAsyncThunk('getMyShow', async({user}) => {
    let url = `${BASE_URL}/api/shows?userId=${user}`
    try{
        const res = await axios.get(url)
        const allShows = res.data.response.map(e => e)
        return {
            myShows: allShows
        }
    } catch(error){
        console.log(error)
        return { payload: "error" }
    }
})

const getShowsHotelId = createAsyncThunk('getShowsHotelId', async(id) => {
    let url = `${BASE_URL}/api/shows?hotelId=${id}`
    try{
        const res = await axios.get(url)
        /* console.log('action de shows',res) */
        const shows = res.data.response
        return {
            showsHotelId: shows
        }
    } catch(error){
        console.log(error)
        return { payload: "error" }
    }
})



const deleteMyShow= createAsyncThunk('deleteMyShow', async ({token, idShow}) => {
    let headers = { headers: { Authorization: `Bearer ${token}` } }
    let url = `${BASE_URL}/api/shows/${idShow}`
    try{
        console.log(idShow)
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

const editMyShow= createAsyncThunk('editMyShow', async ({token, data ,idShow}) => {
    let headers = { headers: { Authorization: `Bearer ${token}` } }
    let url = `${BASE_URL}/api/shows/${idShow}`
    try{
        let res = await axios.put(url, data, headers)
        console.log('RES',res)
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

const showActions = {
    getMyShow,
    deleteMyShow,
    editMyShow,
    getShowsHotelId,
}

export default showActions;