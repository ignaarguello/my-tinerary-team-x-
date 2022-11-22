import React from 'react'
import { useRef, useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../api/api'
import { useLocation, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EditMyHotels() {

    const nameRef = useRef()
    const photoRef1 = useRef()
    const descriptionRef = useRef()
    const citiIdRef = useRef()
    const navigate = useNavigate()

    let location = useLocation()
    let myUrl = (location.pathname.slice(14))
    console.log(myUrl)
    let [dataUlt, setDataUlt] = useState(null)

    const handleSubmit = (event)=>{
        event.preventDefault()
  
        const data = {
          name: nameRef.current?.value, 
          photo:  photoRef1.current?.value,
          description: descriptionRef.current?.value, 
          citiId:citiIdRef.current?.value,
          userId: '6372d48e597d27b935de7569' //proximamente no será hardcodeado
        }
        
        setDataUlt(data)
      }

useEffect( () => {
    axios.put(`${BASE_URL}/api/shows/${myUrl}`, dataUlt)
        .then(response => {
            console.log('hola',response)
        if (response.config.data === null){
          console.log(response.data.message);
        }else{
          toast.success(response.data.message, {
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
          setTimeout(() => {
              navigate(`/myshows`, { replace: true })
          }, 5500)
        }           
    })
    .catch ( err => {
        console.log(err.message)
        })
    }, [dataUlt])

    return (
        <div id='containerSign-In'>
            <div id='containerForm-Sing-In'>
              <h1 id='title-Sign-In'>- Edit Show -</h1>
                <div id='containerForm-Sign-In'>
                    <form onSubmit={handleSubmit} id='form-Sign-In'>
                      <div className='container-Inputs'>
                          <label htmlFor="input-name-SI" className='labelForm-SI'>- Name-</label>
                          <input type="text" name='input-name-SI' id='input-name'className='input-SI' placeholder='Name' ref={nameRef}  />
                        </div>
                        <div className='container-Inputs'>
                          <label htmlFor="input-password-SI" className='labelForm-SI' required>- Photos -</label>
                          <input type="text" name='input-password-SI' id='input-photos'className='input-SI' required placeholder='Photos' ref={photoRef1}/>
                        </div>
                        <div className='container-Inputs'>
                          <label htmlFor="input-password-SI" className='labelForm-SI' required>- Description -</label>
                          <input type="text" name='input-password-SI' id='input-description'className='input-SI' required placeholder='Description' ref={descriptionRef}/>
                        </div>
                        <div className='container-Inputs'>
                          <label htmlFor="input-password-SI" className='labelForm-SI' required>- City Id -</label>
                          <input type="text" name='input-password-SI' id='input-cityId'className='input-SI' required placeholder='City ID' ref={citiIdRef}/>
                        </div>
                        <div className='container-Inputs'>
                          <input type="submit" name='input-submit-SI' id='input-submit-SI' value='Finish Edition' />
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
      )
}

export default EditMyHotels