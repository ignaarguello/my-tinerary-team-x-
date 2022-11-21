import React from 'react'
import { useRef, useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../api/api'
import { useLocation, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EditMyCities() {

    const nameRef = useRef()
    const photoRef = useRef()
    const populationRef = useRef()
    const continentRef = useRef()

    let location = useLocation()
    let myUrl = (location.pathname.slice(15))
    let navigate = useNavigate()
    let [dataUlt, setDataUlt] = useState(null)

    const handleSubmit = (event)=>{
    event.preventDefault()

    const data = {
        name: nameRef.current?.value,
        continent: continentRef.current?.value,
        photo: photoRef.current?.value,
        population: populationRef.current?.value,
        userId: '6372d48e597d27b935de7568' //proximamente no será hardcodeado
    }
    setDataUlt(data)
}

useEffect( () => {
    axios.put(`${BASE_URL}/api/cities/${myUrl}`, dataUlt)
        .then(response => {
            console.log(response)
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
                navigate(`/mycities`, { replace: true })
            }, 5500)
        } else if(response.data.message.length === 5){
            console.log(response.data.message);
          } else{
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
        console.log(err.message)
        })
    }, [dataUlt])

return (
    <>
        <div id='containerSign-In'>
            <div id='containerForm-Sing-In'>
                <h1 id='title-Sign-In'>Edit city</h1>
                <div id='containerForm-Sign-In'>
                    <form onSubmit={handleSubmit} id='form-Sign-In'>
                        <div className='container-Inputs'>
                            <label htmlFor="input-name-SI" className='labelForm-SI'>Name:</label>
                            <input type="text" name='input-name' id='input-name' className='input-SI' placeholder='Name' ref={nameRef}  />
                        </div>
                        <div className='container-Inputs'>
                            <label htmlFor="input-password-SI" className='labelForm-SI' >Photo URL:</label>
                            <input type="text" name='input-password-SI' id='input-photos' className='input-SI' placeholder='Photo URL' ref={photoRef}/>
                        </div>
                        <div className='container-Inputs'>
                            <label htmlFor="input-password-SI" className='labelForm-SI' >Population:</label>
                            <input type="number" name='input-password-SI' id='input-capacity' className='input-SI' placeholder='Population' ref={populationRef}/>
                        </div>
                        <div className='container-Inputs'>
                            <label htmlFor="input-password-SI" className='labelForm-SI' >Continent:</label>
                            <input type="text" name='input-password-SI' id='input-description' className='input-SI' placeholder='Continent' ref={continentRef}/>
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

export default EditMyCities