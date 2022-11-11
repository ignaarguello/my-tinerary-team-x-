import React, { useEffect } from 'react'
import { useRef } from 'react'
import axios from 'axios'
import { BASE_URL } from '../api/url'
import { useState } from 'react'

export default function NewCity() {
    const nameRef = useRef()
    const photoRef = useRef()
    const populationRef = useRef()
    const continentRef = useRef()
    const idRef = useRef()
    
    let [dataUlt, setDataUlt] = useState(null)

    const handleSubmit = (event)=>{
    event.preventDefault()

    const data = {
        name: nameRef.current?.value,
        continent: continentRef.current?.value,
        photo: photoRef.current?.value,
        population: populationRef.current?.value,
        userId: idRef.current?.value 
    }

    setDataUlt(data)
    console.log('set data desde funcion', data);
    event.target.reset()
  }

  console.log('SETEO DATA DE FUERA', dataUlt);

  useEffect( () => {
    axios.get(`${BASE_URL}/cities`)
      .then(response => console.log(response.data.response))
      .catch (err => console.log(err))
    }, [])

  useEffect( () => {
    axios.post(`${BASE_URL}/cities`, dataUlt)
      .then(response => console.log(response.data.response))
      .catch (err => console.log(err))
    }, [dataUlt])

  return (
    <div id='containerSign-In'>
        <div id='containerForm-Sing-In'>
          <h1 id='title-Sign-In'>New City</h1>
            <div id='containerForm-Sign-In'>
                <form onSubmit={handleSubmit} id='form-Sign-In'>
                  <div className='container-Inputs'>
                      <label htmlFor="input-name-SI" className='labelForm-SI'>Name:</label>
                      <input type="text" name='input-name-SI' id='input-name'className='input-SI' placeholder='Name' ref={nameRef}  />
                    </div>
                    <div className='container-Inputs'>
                      <label htmlFor="input-password-SI" className='labelForm-SI' required>Photo URL:</label>
                      <input type="text" name='input-password-SI' id='input-photos'className='input-SI' required placeholder='Photo URL' ref={photoRef}/>
                    </div>
                    <div className='container-Inputs'>
                      <label htmlFor="input-password-SI" className='labelForm-SI' required>Population:</label>
                      <input type="number" name='input-password-SI' id='input-capacity'className='input-SI' required placeholder='Population' ref={populationRef}/>
                    </div>
                    <div className='container-Inputs'>
                      <label htmlFor="input-password-SI" className='labelForm-SI' required>Continent:</label>
                      <input type="text" name='input-password-SI' id='input-description'className='input-SI' required placeholder='Continent' ref={continentRef}/>
                    </div>
                    <div className='container-Inputs'>
                      <label htmlFor="input-password-SI" className='labelForm-SI' required>Your ID:</label>
                      <input type="text" name='input-password-SI' id='input-userId'className='input-SI' required placeholder='User ID' ref={idRef}/>
                    </div>
                    <div className='container-Inputs'>
                      <input type="submit" name='input-submit-SI' id='input-submit-SI' value='Create New City' />
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}