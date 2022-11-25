import { createReducer } from "@reduxjs/toolkit";
import userActions from '../actions/userActions'

const { log_in, re_log_in, log_out } = userActions;

const inicialState = {
    name:"",
    photo:"",
    logged:false,
    role:"",
    token:"",
}

const signInReducer = createReducer(inicialState,
    (builder)=>{
        builder
            .addCase(log_in.fulfilled, (state,action) => {
                /* console.log('Carga de accion', action.payload.response) */
                const {success,response} = action.payload
                if(success){
                    let {user,token} = response
                    localStorage.setItem('token', JSON.stringify({token:{user:token}}))
                    let newState = {
                        ...state,
                        name:user.name,
                        photo:user.photo,
                        logged:true,
                        role: user.role,
                        token:user.token
                    }
                    return newState
                }else{
                    return console.log('Error')
                }
            })

            .addCase(re_log_in.fulfilled, (state,action) => {
                console.log('Carga de accion', action.payload.response.user.user)
                const {success,response} = action.payload
                if(success){
                    let {user, token} = response
                    console.log(user)
                    let newState = {
                        ...state,
                        name:user.user.name,
                        photo:user.user.photo,
                        logged:true,
                        role: user.user.role,
                        token:user.token
                    }
                    return newState
                }else{
                    return console.log('Error')
                }
            })

            .addCase(log_out.fulfilled, (state,action) => {
                /* console.log('Carga de accion', action.payload.response) */
                const {success,response} = action.payload
                if(success){
                    localStorage.removeItem('token')
                    let newState = {
                        ...state,
                        name:'',
                        photo:'',
                        logged:false ,
                        token:''
                    }
                    return newState
                }else{
                    return console.log('Error')
                }
            })
    })

export default signInReducer