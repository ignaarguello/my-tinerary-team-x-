import React from 'react'
import { useRef, useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../api/api'
import { useLocation, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EditMyItineraries() {

    const nameRef = useRef()
    const photo1Ref = useRef()
    const photo2Ref = useRef()
    const photo3Ref = useRef()
    const durationRef = useRef()
    const priceRef = useRef()
    const descriptionRef = useRef()
    const cityIDRef = useRef()

    let location = useLocation()
    let myUrl = (location.pathname.slice(20))
    console.log(myUrl);
    let navigate = useNavigate()
    let [dataUlt, setDataUlt] = useState(null)

    const handleSubmit = (event)=>{
    event.preventDefault()

    const data = {
        name: nameRef.current?.value,
        photo: [photo1Ref.current?.value, photo2Ref.current?.value, photo3Ref.current?.value],
        description: descriptionRef.current?.value,
        price: priceRef.current?.value,
        duration: durationRef.current?.value,
        userId: '6372d48e597d27b935de7569', //proximamente no será hardcodeado
        cityId: cityIDRef.current?.value
    }
    setDataUlt(data)
}

useEffect( () => {
    
    axios.put(`${BASE_URL}/api/itineraries/${myUrl}`, dataUlt)
        .then(response => {
            console.log(response)
        if (response.config.data === null){
            console.log(response.data.message);
          } else{
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
            
          }
    })
    .catch ( err => {
        console.log(err.message)
        })
    }, [dataUlt])

return (
    <>
        <div id='containerSign-In'>
            <div id='containerForm-Sing-In'>
                <h1 id='title-Sign-In'>Edit Tinerary</h1>
                <div id='containerForm-Sign-In'>
                    <form onSubmit={handleSubmit} id='form-Sign-In'>
                        <div className='container-Inputs'>
                            <label htmlFor="input-name-SI" className='labelForm-SI'>Name:</label>
                            <input type="text" name='input-name' id='input-name' className='input-SI' placeholder='Name' ref={nameRef}  />
                        </div>
                        <div className='container-Inputs'>
                            <label htmlFor="input-password-SI" className='labelForm-SI' >Photo URL:</label>
                            <input type="text" name='input-password-SI' id='input-photos' className='input-SI' placeholder='Photo 1' ref={photo1Ref}/>
                            <input type="text" name='input-password-SI' id='input-photos' className='input-SI' placeholder='Photo 2' ref={photo2Ref}/>
                            <input type="text" name='input-password-SI' id='input-photos' className='input-SI' placeholder='Photo 3' ref={photo3Ref}/>
                        </div>
                        <div className='container-Inputs'>
                            <label htmlFor="input-password-SI" className='labelForm-SI' >Description:</label>
                            <input type="text" name='input-password-SI' id='input-description' className='input-SI' placeholder='Description' ref={descriptionRef}/>
                        </div>
                        <div className='container-Inputs'>
                            <label htmlFor="input-password-SI" className='labelForm-SI' >Price:</label>
                            <input type="text" name='input-password-SI' id='input-photos' className='input-SI' placeholder='Price' ref={priceRef}/>
                        </div>
                        <div className='container-Inputs'>
                            <label htmlFor="input-password-SI" className='labelForm-SI' >Duration:</label>
                            <input type="number" name='input-password-SI' id='input-capacity' className='input-SI' placeholder='Duration' ref={durationRef}/>
                        </div>
                        <div className='container-Inputs'>
                            <label htmlFor="input-password-SI" className='labelForm-SI' >City ID:</label>
                            <input type="text" name='input-password-SI' id='input-capacity' className='input-SI' placeholder='City ID' ref={cityIDRef}/>
                        </div>
                        <div className='container-Inputs'>
                            <input type="submit" name='input-submit-SI' id='input-submit-SI' value='Finish edition' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <ToastContainer />
    </>
)
}

export default EditMyItineraries