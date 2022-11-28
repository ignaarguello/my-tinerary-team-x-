import React from 'react'
import { useRef, useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../api/api'
import { useLocation, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './EditMyCities.css'
import { useSelector } from 'react-redux'

function EditMyCities() {
    const {id, token} = useSelector(store => store.signIn)
    const nameRef = useRef()
    const photoRef = useRef()
    const populationRef = useRef()
    const continentRef = useRef()

    let location = useLocation()
    let myUrl = (location.pathname.slice(15))
    let navigate = useNavigate()
    let [dataUlt, setDataUlt] = useState(null)

    const handleSubmit = async (event)=>{
    event.preventDefault()

    const data = {
        name: nameRef.current?.value,
        continent: continentRef.current?.value,
        photo: photoRef.current?.value,
        population: populationRef.current?.value,
        userId: id
    }

    let headers = { headers: { Authorization: `Bearer ${token}` } };
    try {
      let res = await axios.put(`${BASE_URL}/api/cities/${myUrl}`, data, headers);
      console.log(res)
      if (res.data.success) {
        toast.success(res.data.message, {
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
      } else {
        toast.error(res.data.message.join('\n'), {
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
    } catch (error) {
      console.log(error);
    }
  }






/* useEffect( () => {
    axios.put(`${BASE_URL}/api/cities/${myUrl}`, dataUlt, headers)
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
    }, [dataUlt]) */

return (
    <>
        <div id='cont-editCity'>
            <div id='cont-formEditCity'>
                <h1 id='title-editCity'>Edit city</h1>
                <div id='subcont-formEditCity'>
                    <form onSubmit={handleSubmit} id='form-editCity'>
                        <div className='cont-inputsEditCity'>
                            <label htmlFor="input-name" className='label-formEditCity'>Name:</label>
                            <input type="text" name='input-name' id='input-name' className='input-editCity' required placeholder='Name' ref={nameRef}  />
                        </div>
                        <div className='cont-inputsEditCity'>
                            <label htmlFor="input-photos" className='label-formEditCity' >Photo URL:</label>
                            <input type="text" name='input-password-SI' id='input-photos' className='input-editCity' required placeholder='Photo URL' ref={photoRef}/>
                        </div>
                        <div className='cont-inputsEditCity'>
                            <label htmlFor="input-population" className='label-formEditCity' >Population:</label>
                            <input type="number" name='input-password-SI' id='input-population' className='input-editCity' required placeholder='Population' ref={populationRef}/>
                        </div>
                        <div className='cont-inputsEditCity'>
                            <label htmlFor="input-continent" className='label-formEditCity' >Continent:</label>
                            <input type="text" name='input-password-SI' id='input-continent' className='input-editCity' required placeholder='Continent' ref={continentRef}/>
                        </div>
                        <div className='cont-inputsEditCity'>
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