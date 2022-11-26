import React, { useState, useEffect } from 'react'
import InputsSignUp from '../InputsSignUp/InputsSignUp'
import '../BoxSignUp/BoxSignUp.css'
import { Link as LinkRouter } from 'react-router-dom';
import { useRef } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../api/api';
import Swal from 'sweetalert2';

export default function BoxSignUp() {

  const nameInputElement = useRef();
  const lastnameInputElement = useRef();
  const emailInputElement = useRef();
  const countryInputElement = useRef();
  const ageInputElement = useRef();
  const passwordInputElement = useRef();
  const photoInputElement = useRef();

  let [dataUlt, setDataUlt] = useState()

  let handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      name: nameInputElement.current?.value,
      lastName: lastnameInputElement.current?.value,
      email: emailInputElement.current?.value,
      photo: photoInputElement.current?.value,
      country: countryInputElement.current?.value,
      age: ageInputElement.current?.value,
      password: passwordInputElement.current?.value,
      role: "user",
    };

    Swal.fire({
      title: 'Are you sure?',
      text: "You should have access to your mail",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, confirm!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Excellent!',
          'Please check your mail to validate your account',
          'success'
        )
        setDataUlt(data)
        event.target.reset()
      }
    })
  }

  useEffect( () => {
    axios.post(`${BASE_URL}/api/auth/sign-up`, dataUlt)
        .then(response => {
            if(response.data.message.length === 8){
              console.log(response.data.message)  
            } else {
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${response.data.message.join(", ")}`,
              })
            }
    })
    .catch ( err => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${err.response.data.message}`,
      })
        })
    }, [dataUlt])

  return (
    <div className='box-signup'>
        <p>I already have an account</p>
        <LinkRouter to='/signin'><button type='submit' value='signin-redirect' id='signin-redirect' className='signin-redirect'>Sign In</button></LinkRouter>
        <p>Don't have an account yet?</p>
        <h2>Register now</h2>
          <form onSubmit={handleSubmit}>
            <div className='box-inputs'>
              <InputsSignUp ref={nameInputElement} type='text' className='name-input' id='name' name='name' placeholder='First name:'/>
              <InputsSignUp ref={lastnameInputElement} type='text' className='lastname-input' id='lastname' name='lastname' placeholder='Last name:'/>
              <InputsSignUp ref={emailInputElement} type='email' className='email-input' id='email' name='email' placeholder='Email:'/>
              <InputsSignUp ref={photoInputElement} type='text' className='email-input' id='picture' name='picture' placeholder='Your profile picture:'/>
              <InputsSignUp ref={countryInputElement} type='text' className='country-input' id='country' name='country' placeholder='Country:'/>
              <InputsSignUp ref={ageInputElement} type='number' className='age-input' id='age' name='age' placeholder='Age:'/>
              <InputsSignUp ref={passwordInputElement} type='password' className='password-input' id='password' name='password' placeholder='Password:'/>
            </div>
            <div className='box-submit'>
              <button type='submit'  className='register'>Sign Up</button>
              <h6>or</h6>
              <LinkRouter to='/'><button type='submit' className='access-google'>Access with Google</button></LinkRouter>
            </div>
        </form>
      </div>
  )
}
