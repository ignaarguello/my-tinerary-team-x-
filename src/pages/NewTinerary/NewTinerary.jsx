import React, { useEffect } from 'react'
import { useRef } from 'react'
import axios from 'axios'
import {BASE_URL} from '../../api/url'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'
import './NewTinerary.css'
import { useSelector } from 'react-redux'

export default function NewTinerary() {
    const { id, token } = useSelector( store => store.signIn)

    const nameRef = useRef()
    const photo1Ref = useRef()
    const photo2Ref = useRef()
    const photo3Ref = useRef()
    const priceRef = useRef()
    const descriptionRef = useRef()
    const durationRef = useRef()
    const cityIdRef = useRef()
    const navigate = useNavigate()

    let [dataUlt, setDataUlt] = useState(null)
    let [cities, setCities] = useState([])
    //console.log(cities)
    useEffect( () => {
      axios.get(`${BASE_URL}/api/cities/`)
      .then(res => setCities(res.data.response))
    }, [])

    const handleSubmit = (event)=>{
      event.preventDefault()
      const data = {
        name: nameRef.current?.value,
        description: descriptionRef.current?.value,
        photo: [photo1Ref.current?.value, photo2Ref.current?.value, photo3Ref.current?.value],
        price: priceRef.current?.value,
        duration: durationRef.current?.value,
        cityId: cityIdRef.current?.value,
        userId: id,
        token
      }
      setDataUlt(data)
    }
  //console.log(dataUlt)

  let headers = { headers: { Authorization: `Bearer ${token}` } }

  useEffect( () => {
    axios.post(`${BASE_URL}/api/itineraries`, dataUlt, headers)
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
              navigate(`/myitineraries`, { replace: true })
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
      }, [dataUlt])


  return (
    <div id='cont-newTinerary'>
        <div id='cont-FormNewCity'>
          <h1 id='title-NewCity'>New Tinerary</h1>
            <div id='cont-formularioNewCity'>
                <form onSubmit={handleSubmit} id='form-NewCity'>
                    <div className='cont-inputsNewCity'>
                      <label htmlFor="input-name-SI" className='label-NewCity' required>Name</label>
                      <input type="text" name='input-name-SI' id='input-name' className='input-SI' placeholder='Tour from...' ref={nameRef}  />
                    </div>
                    <div className='cont-inputsNewCity'>
                      <label htmlFor="input-password-SI" className='label-NewCity' required>Photos</label>
                      <input type="text" name='input-password-SI' id='input-photos' className='input-SI' required placeholder='Photo 1 (http://...)' ref={photo1Ref}/>
                    </div>
                    <div className='cont-inputsNewCity'>
                      <label htmlFor="input-password-SI" className='label-NewCity' required></label>
                      <input type="text" name='input-password-SI' id='input-photos' className='input-SI' required placeholder='Photo 2 (http://...)' ref={photo2Ref}/>
                    </div>
                    <div className='cont-inputsNewCity'>
                      <label htmlFor="input-password-SI" className='label-NewCity' required></label>
                      <input type="text" name='input-password-SI' id='input-photos' className='input-SI' required placeholder='Photo 3 (http://...)' ref={photo3Ref}/>
                    </div>
                    <div className='cont-inputsNewCity'>
                      <label htmlFor="input-password-SI" className='label-NewCity' required>Price</label>
                      <input type="number" name='input-password-SI' id='input-capacity' className='input-SI' required placeholder='$24...' ref={priceRef}/>
                    </div>
                    <div className='cont-inputsNewCity'>
                      <label htmlFor="input-password-SI" className='label-NewCity' required>Description</label>
                      <textarea name='input-password-SI' id='input-description' className='input-SI' required placeholder='A guided tour among the city that...' ref={descriptionRef}/>
                    </div>
                    <div className='cont-inputsNewCity'>
                      <label htmlFor="input-password-SI" className='label-NewCity' required>Duration</label>
                      <input type="number" name='input-password-SI' id='input-userId' className='input-SI' required placeholder='3 hours...' ref={durationRef}/>
                    </div>
                    <div className='cont-inputsNewCity'>
                    <label htmlFor="cityId" className='label-NewCity'>City</label>
                    <select name='cityId' id='cityId' className='input-SI' ref={cityIdRef}>
                      <option value="none" defaultValue="None">Choose a city...</option>
                      {(cities.map(city =>  <option key={`${city.name}`} value={`${city._id}`} >{`${city.name}`}</option>))}
                    </select>
                    </div>
                    <div className='cont-inputsNewCity'>
                      <input type="submit" name='input-submit-SI' id='submit-NewCity' value='Create New Tinerary' />
                    </div>
                </form>
            </div>
        </div>
        <ToastContainer />
    </div>
  )
}