import React, { useEffect, useState, useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux'
import axios from 'axios'
import {BASE_URL} from '../../api/url'
import { useNavigate } from 'react-router-dom'
import './NewShow.css'

export default function EditMyShow() {
    const { id, token } = useSelector( store => store.signIn)
    const nameRef = useRef()
    const descriptionRef = useRef()
    const photoRef = useRef()
    const priceRef = useRef()
    const dateRef = useRef()
    const hotelIdRef = useRef()
    const navigate = useNavigate()

    let [hotels, setHotels] = useState([])

    
    useEffect( () => {
      axios.get(`${BASE_URL}/api/hotels`)
      .then(res => setHotels(res.data.response))
    }, [])

    const handleSubmit = (event)=>{
      
      event.preventDefault()
      const data = {
        hotelId: hotelIdRef.current?.value,
        name: nameRef.current?.value,
        description: descriptionRef.current?.value,
        photo: photoRef.current?.value,
        price: priceRef.current?.value,
        date: dateRef.current?.value,
        userId: id,
      }
      
      console.log(data)

      try{
        let headers = { headers: { Authorization: `Bearer ${token}` } }
        axios.post(`${BASE_URL}/api/shows`, data, headers)
        .then(response => {
          //console.log(response);
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
                navigate(`/myshows`, { replace: true })
              }, 5500) 
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
    <div id='cont-newShow'>
        <div id='cont-FormNewCity'>
          <h1 id='title-NewCity'>New Show</h1>
            <div id='cont-formularioNewShow'>
                <form onSubmit={handleSubmit} id='form-NewShow'>
                    <div className='cont-inputsNewShow'>
                      <label htmlFor="input-name-SI" className='label-NewShow' required>Name</label>
                      <input type="text" name='input-name-SI' id='input-name' className='input-SI' placeholder='Tour from...' ref={nameRef}  />
                    </div>
                    <div className='cont-inputsNewShow'>
                      <label htmlFor="input-password-SI" className='label-NewShow' required>Photo</label>
                      <input type="text" name='input-password-SI' id='input-photos' className='input-SI' required placeholder='Photo' ref={photoRef}/>
                    </div>
                    <div className='cont-inputsNewShow'>
                      <label htmlFor="input-password-SI" className='label-NewShow' required>Price</label>
                      <input type="number" name='input-password-SI' id='input-capacity' className='input-SI' required placeholder='$24...' ref={priceRef}/>
                    </div>
                    <div className='cont-inputsNewShow'>
                      <label htmlFor="input-password-SI" className='label-NewShow' required>Description</label>
                      <textarea name='input-password-SI' id='input-description' className='input-SI' required placeholder='A guided tour among the city that...' ref={descriptionRef}/>
                    </div>
                    <div className='cont-inputsNewShow'>
                    <label htmlFor="hotelId" className='label-NewShow'>Hotel</label>
                    <select name='hotelId' id='cityId' className='input-SI' ref={hotelIdRef}>
                      <option value="none" defaultValue="None">Choose a hotel...</option>
                      {(hotels.map(city =>  <option key={`${city.name}`} value={`${city._id}`} >{`${city.name}`}</option>))}
                    </select>
                    </div>
                    <div className='cont-inputsNewShow'>
                      <label htmlFor="input-name-SI" className='label-NewShow' required>Date</label>
                      <input type="date" name='input-name-SI' id='input-name' className='input-SI' placeholder='Tour from...' ref={dateRef}  />
                    </div>
                    <div className='cont-inputsNewShow'>
                      <input type="submit" name='input-submit-SI' id='submit-NewCity' value='Create New Show' />
                    </div>
                </form>
            </div>
        </div>
        <ToastContainer />
    </div>
  )
}
