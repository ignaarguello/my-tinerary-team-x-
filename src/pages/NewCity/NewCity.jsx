import React, { useEffect } from 'react'
import { useRef } from 'react'
import axios from 'axios'
import {BASE_URL} from '../../api/url'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'
import './NewCity.css'
import { useSelector } from 'react-redux'

export default function NewCity() {

    const {id, token} = useSelector(store => store.signIn)
    const nameRef = useRef()
    const photoRef = useRef()
    const populationRef = useRef()
    const continentRef = useRef()
    const navigate = useNavigate()

    let [dataUlt, setDataUlt] = useState(null)

    const handleSubmit = (event)=>{
    event.preventDefault()

    const data = {
        name: nameRef.current?.value,
        continent: continentRef.current?.value,
        photo: photoRef.current?.value,
        population: populationRef.current?.value,
        userId: id,
    }

    setDataUlt(data)
  }
  let headers = { headers: { Authorization: `Bearer ${token}` } }
  useEffect( () => {
    axios.post(`${BASE_URL}/api/cities`, dataUlt, headers)
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
              navigate(`/cities/${response.data.id}`, { replace: true })
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
      }, [dataUlt])


  return (
    <div id='cont-newCity'>
        <div id='cont-FormNewCity'>
          <h1 id='title-NewCity'>New City</h1>
            <div id='cont-formularioNewCity'>
                <form onSubmit={handleSubmit} id='form-NewCity'>
                  <div className='cont-inputsNewCity'>
                      <label htmlFor="input-name-SI" className='label-NewCity' required>Name:</label>
                      <input type="text" name='input-name-SI' id='input-name' className='input-SI' placeholder='Name' ref={nameRef}  />
                    </div>
                    <div className='cont-inputsNewCity'>
                      <label htmlFor="input-password-SI" className='label-NewCity' required>Photo URL:</label>
                      <input type="text" name='input-password-SI' id='input-photos' className='input-SI' required placeholder='Photo URL' ref={photoRef}/>
                    </div>
                    <div className='cont-inputsNewCity'>
                      <label htmlFor="input-password-SI" className='label-NewCity' required>Population:</label>
                      <input type="number" name='input-password-SI' id='input-capacity' className='input-SI' required placeholder='Population' ref={populationRef}/>
                    </div>
                    <div className='cont-inputsNewCity'>
                      <label htmlFor="input-password-SI" className='label-NewCity' required>Continent:</label>
                      <input type="text" name='input-password-SI' id='input-capacity' className='input-SI' required placeholder='Continent' ref={continentRef}/>
                    </div>
                    <div className='cont-inputsNewCity'>
                      <input type="submit" name='input-submit-SI' id='submit-NewCity' value='Create New City' />
                    </div>
                </form>
            </div>
        </div>
        <ToastContainer />
    </div>
  )
}