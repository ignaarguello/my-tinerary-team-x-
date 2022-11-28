import React from 'react'
import { useRef } from 'react'
import { useEffect, useState } from 'react';
import { BASE_URL } from '../api/api'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


export default function NewHotel() {
    const { id, token } = useSelector( store => store.signIn)

    const nameRef = useRef()
    const photoRef1 = useRef()
    const capacityRef = useRef()
    const descriptionRef = useRef()
    const citiIdRef = useRef()
    const userIdRef = useRef()
    const navigate = useNavigate()

    let [dataFinal, setDataFinal] = useState(null)

    let [cities, setCities] = useState([])

    useEffect( () => {
      axios.get(`${BASE_URL}/api/cities/`)
      .then(res => setCities(res.data.response))
    }, [])

    const handleSubmit = (event)=>{
      event.preventDefault()

      const data = {
        name: nameRef.current?.value, 
        photo: photoRef1.current?.value,
        capacity: capacityRef.current?.value, 
        description: descriptionRef.current?.value, 
        userId:id,
        citiId:citiIdRef.current?.value,
      }

      try{
        let headers = { headers: { Authorization: `Bearer ${token}` } }
        axios.post(`${BASE_URL}/api/hotels`, data, headers)
      .then(response => {
        if (response.data.success){
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
              navigate(`/hotels/${response.data.id}`, { replace: true })
            }, 5500)
        }else if(response.data.message.length === 5){
          console.log(response.data.message) 
        } else {
          toast.error(response.data.message.join('\n'), {
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
    })
      .catch ( err => {
        toast.error(err.message, {
          icon: '😵',
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "colored",
          })
        console.log(err)
        })
      }catch{
          console.log('error')
      }
      
      
    }

    
  return (
    <div id='containerSign-In'>
        <div id='containerForm-Sing-In'>
          <h1 id='title-Sign-In'>New Hotel</h1>
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
                      <label htmlFor="input-password-SI" className='labelForm-SI' required>- Capacity -</label>
                      <input type="number" name='input-password-SI' id='input-capacity'className='input-SI' required placeholder='Capacity' ref={capacityRef}/>
                    </div>
                    <div className='container-Inputs'>
                      <label htmlFor="input-password-SI" className='labelForm-SI' required>- Description -</label>
                      <input type="text" name='input-password-SI' id='input-description'className='input-SI' required placeholder='Description' ref={descriptionRef}/>
                    </div>
                    <div className='container-Inputs'>
                    <label htmlFor="cityId" className='labelForm-SI' required>City</label>
                    <select name='cityId' id='cityId' className='input-SI' ref={citiIdRef}>
                      <option value="none" defaultValue="None">Choose a city...</option>
                      {(cities.map(city =>  <option key={`${city.name}`} value={`${city._id}`} >{`${city.name}`}</option>))}
                    </select>
                    </div>
                    <div className='container-Inputs'>
                      <input type="submit" name='input-submit-SI' id='input-submit-SI' value='Create New Hotel' />
                    </div>
                </form>
            </div>
        </div>
        <ToastContainer />
    </div>
  )
}
