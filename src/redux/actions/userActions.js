import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../api/api";
import axios from 'axios';


const log_in = createAsyncThunk('log_in', async(data)=>{
    let url = `${BASE_URL}/api/auth/sign-in`
    try{
        let user = await axios.post(url, data)
        /* console.log('actiondata', data) */

        return{
            success:true,
            response: user.data.response
        }
    }catch(error){
        //console.log('Errorresponse', error.response)
        return {
            success:false,
            response: error.response.data.message
        }
    }
})

const re_log_in = createAsyncThunk('re_log_in', async(token)=>{
    let url = `${BASE_URL}/api/auth/token`
    let headers = {headers: {'Authorization': `Bearer ${token}`}}
    try{
        let user = await axios.post(url, null, headers)
        /* console.log('user de action', user) */

        return{
            success:true,
            response:{
                user:user.data.response,
                token
            }
                
        }
    }catch(error){
        /* console.log('Errorresponse', error.response) */
        return {
            success:false,
            response: error.response.data.message
        }
    }
})

const log_out = createAsyncThunk('log_out', async(token)=>{
    let url = `${BASE_URL}/api/auth/sign-out`
    let headers = {headers: {'Authorization': `Bearer ${token}`}}

    try{
        let user = await axios.put(url, null, headers)
        /* console.log(user.data) */

        return {
            success:true,
            response: user.data.message
        }

    }catch(error){
        /* console.log('Errorresponse', error.response) */
        return {
            success:false,
            response: error.response.data.message
        }
    }
    
})

const userActions = {
    log_in,
    re_log_in,
    log_out,
}

export default userActions