import React from 'react'
import InputsSignUp from '../InputsSignUp/InputsSignUp'
import '../BoxSignUp/BoxSignUp.css'
import { Link as LinkRouter } from 'react-router-dom';
import { useRef } from 'react';

export default function BoxSignUp() {

  const nameInputElement = useRef();
  const lastnameInputElement = useRef();
  const emailInputElement = useRef();
  const countryInputElement = useRef();
  const ageInputElement = useRef();
  const passwordInputElement = useRef();

  let handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name: nameInputElement.current?.value,
      lastName: lastnameInputElement.current?.value,
      email: emailInputElement.current?.value,
      country: countryInputElement.current?.value,
      age: ageInputElement.current?.value,
      password: passwordInputElement.current?.value
    };
    
    localStorage.setItem('user-registered', JSON.stringify(data))
  }


  return (
    <div className='box-signup'>
        <p>I already have an account</p>
        <LinkRouter to='/signin'><button type='submit' value='signin-redirect' id='signin-redirect' className='signin-redirect'>Sign In</button></LinkRouter>
        <p>Don't have an account yet?</p>
        <h2>Register now</h2>
          <form>
            <div className='box-inputs'>
              <InputsSignUp ref={nameInputElement} type='text' className='name-input' id='name' name='name' placeholder='First name:'/>
              <InputsSignUp ref={lastnameInputElement} type='text' className='lastname-input' id='lastname' name='lastname' placeholder='Last name:'/>
              <InputsSignUp ref={emailInputElement} type='email' className='email-input' id='email' name='email' placeholder='Email:'/>
              <InputsSignUp ref={countryInputElement} type='text' className='country-input' id='country' name='country' placeholder='Country:'/>
              <InputsSignUp ref={ageInputElement} type='number' className='age-input' id='age' name='age' placeholder='Age:'/>
              <InputsSignUp ref={passwordInputElement} type='password' className='password-input' id='password' name='password' placeholder='Password:'/>
            </div>
            <div className='box-submit'>
              <LinkRouter to='/'><button type='submit' onClick={handleSubmit} className='register'>Sign Up</button></LinkRouter>
              <h6>or</h6>
              <LinkRouter to='/'><button type='submit' className='access-google'>Access with Google</button></LinkRouter>
            </div>
        </form>
      </div>
  )
}
