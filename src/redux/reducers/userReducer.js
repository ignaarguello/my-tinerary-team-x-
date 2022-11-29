import { createReducer } from "@reduxjs/toolkit";
import userActions from '../actions/userActions'

const { log_in, re_log_in, log_out} = userActions;

const inicialState = {
    id: "",
    name:"",
    lastName:"",
    photo:"",
    age:"",
    country:"",
    logged:false,
    role:"",
    token:"",
}

const signInReducer = createReducer(inicialState,
    (builder)=>{
        builder
            .addCase(log_in.fulfilled, (state,action) => {
                //console.log('Carga de accion', action.payload.response)
                const {success,response} = action.payload
                if(success){
                    let {user,token} = response
                    /* console.log(user); */

                    localStorage.setItem('token', JSON.stringify({token:{user:token}}))
                    let newState = {
                        ...state,
                        name:user.name,
                        id: user.id,
                        photo:user.photo,
                        logged:true,
                        role: user.role,
                        token:token
                    }
                    return newState
                }else{
                    return console.log('Error')
                }
            })

            .addCase(re_log_in.fulfilled, (state,action) => {
                //console.log('action payload response', action.payload.response)
                const {success,response} = action.payload
                if(success){
                    let {user, token} = response
                    //console.log("user de reducer",user)

                    let newState = {
                        ...state,
                        name:user.user.name,
                        photo:user.user.photo,
                        logged:true,
                        role: user.user.role,
                        token:token,
                        id: user.user.id,
                    }
                    return newState
                }else{
                    return console.log('Error')
                }
            })

            .addCase(log_out.fulfilled, (state,action) => {
                /* console.log('Carga de accion', action.payload.response) */
                const {success,response} = action.payload
                /* console.log(action.payload); */

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
                    return console.log(response)
                }
            })
    })

export default signInReducer