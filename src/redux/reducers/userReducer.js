import { createReducer } from "@reduxjs/toolkit";
import userActions from '../actions/userActions'

const { log_in, re_log_in } = userActions;

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
                        token:user.token
                    }
                    return newState
                }else{
                    return console.log('Error')
                }
            })

            .addCase(re_log_in.fulfilled, (state,action) => {
                /* console.log('Carga de accion', action.payload.response) */
                const {success,response} = action.payload
                if(success){
                    let {user,token} = response
                    let newState = {
                        ...state,
                        name:user.name,
                        photo:user.photo,
                        logged:true,
                        token:user.token
                    }
                    return newState
                }else{
                    return console.log('Error')
                }
            })
    })


export default signInReducer