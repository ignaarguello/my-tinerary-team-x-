import React from 'react'
import './SingInComponent.css'
import { useRef } from 'react'

export default function SingInComponent() {
    const nameRef = useRef()
    const passwordRef = useRef()
    
    const handleSubmit = (event)=>{
      event.preventDefault()
      console.log(nameRef.current.value)
      console.log(passwordRef.current.value)

      const data = {name: nameRef.current?.value, password: passwordRef.current?.value }

      localStorage.setItem('Usuario', JSON.stringify(data))
    }
    
    return (
    <div id='containerSign-In'>
        <div id='containerForm-Sing-In'>
          <h1 id='title-Sign-In'>Welcome</h1>
            <div id='containerForm-Sign-In'>
                <form onSubmit={handleSubmit} id='form-Sign-In'>
                  <div className='container-Inputs'>
                      <label htmlFor="input-name-SI" className='labelForm-SI'>Email Adress:</label>
                      <input type="email" name='input-name-SI' id='input-name'className='input-SI' placeholder='Email' ref={nameRef} />
                    </div>
                    <div className='container-Inputs'>
                      <label htmlFor="input-password-SI" className='labelForm-SI' required>Password:</label>
                      <input type="password" name='input-password-SI' id='input-password'className='input-SI' required placeholder='Password' ref={passwordRef}/>
                    </div>
                    <div className='container-Inputs'>
                      <input type="submit" name='input-submit-SI' id='input-submit-SI' value='Sign In' />
                    </div>
                    <div className='container-Inputs'>
                      <div id='containerButtonGoogle'>
                          <img className='logoGoogle' src="https://cdn-icons-png.flaticon.com/512/2702/2702602.png" alt="" />
                          <p>Sign with Google</p>
                      </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
