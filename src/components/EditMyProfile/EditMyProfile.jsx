import React, { useEffect } from 'react'
import { useRef } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../api/url'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useParams } from 'react-router-dom'
import './EditMyProfile.css'
import { useSelector } from 'react-redux'

export default function EditMyProfile() {

  const {id} = useParams()
  const {token} = useSelector(store => store.signIn)

  const nameRef = useRef()
  const lastNameRef = useRef()
  const photoRef = useRef()
  const ageRef = useRef()
  const countryRef = useRef()
  const emailRef = useRef()
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()

    const data = {
      name: nameRef.current?.value,
      lastName: lastNameRef.current?.value,
      photo: photoRef.current?.value,
      age: ageRef.current?.value,
      country: countryRef.current?.value,
      email: emailRef.current?.value,
    }

    let headers = { headers: { Authorization: `Bearer ${token}` } };
    try {
      let res = await axios.patch(`${BASE_URL}/api/auth/me/${id}`, data, headers);
      console.log(res)
      if (res.data.success) {
        toast.success(res.data.message, {
            icon: '🌆',
            position: "top-right",
            autoClose: 1500,
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
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "colored",
            });
        setTimeout(() => {
            navigate(`/me/${id}`, { replace: true })
        }, 3500)
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


  /*
  useEffect( (event) => {
    axios.patch(`${BASE_URL}/api/auth/me/${id}`, dataUlt)
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
            toast.info("Modified incoming or progress", {
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
*/


  return (
    <div id='containerGeneralMyProfileEdit'>
      <h1 id='titleEdit'>Edit Profile</h1>
      <form onSubmit={handleSubmit} id='form-Profile'>
        <div className='input-profile'>
          <label htmlFor="input-name-SI" className='label-profile' required>Name</label>
          <input type="text" name='input-name-SI' id='input-name' className='input-SI' placeholder='Name' ref={nameRef} />
        </div>
        <div className='input-profile'>
          <label htmlFor="input-name-SI" className='label-profile' required>Last Name</label>
          <input type="text" name='input-name-SI' id='input-name' className='input-SI' placeholder='Last Name' ref={lastNameRef} />
        </div>
        <div className='input-profile'>
          <label htmlFor="input-password-SI" className='label-profile' required>Photo</label>
          <input type="text" name='input-password-SI' id='input-photo' className='input-SI' required placeholder='Photo' ref={photoRef} />
        </div>
        <div className='input-profile'>
          <label htmlFor="input-password-SI" className='label-profile' required>Age</label>
          <input type="number" name='input-password-SI' id='input-age' className='input-SI' required placeholder='Age' ref={ageRef} />
        </div>
        <div className='input-profile'>
          <label htmlFor="input-password-SI" className='label-profile' required>Country</label>
          <input type="text" name='input-password-SI' id='input-country' className='input-SI' required placeholder='Country' ref={countryRef} />
        </div>
        <div className='input-profile'>
          <label htmlFor="input-password-SI" className='label-profile' required>Email</label>
          <input type="email" name='input-password-SI' id='input-email' className='input-SI' required placeholder='Email' ref={emailRef} />
        </div>
        <div className='input-profile'>
          <input type="submit" name='input-submit-SI' id='submit-NewCity' value='Finish Edition' />
        </div>
      </form>
      <ToastContainer />
    </div>
  )
}
