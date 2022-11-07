import React from 'react'
import { useRef } from 'react'

export default function NewCity() {
    const nameRef = useRef()
    const photoRef = useRef()
    const populationRef = useRef()
    const continentRef = useRef()
    const idRef = useRef()
    
    const handleSubmit = (event)=>{
    event.preventDefault()

    const data = {
        name: nameRef.current?.value,
        photos: photoRef.current?.value,
        population: populationRef.current?.value,
        continent: continentRef.current?.value,
        cityId: idRef.current?.value 
    }

    localStorage.setItem('NewCity', JSON.stringify(data))

    nameRef.current.value=''
    photoRef.current.value=''
    populationRef.current.value=''
    continentRef.current.value=''
    populationRef.current.value=''
    }
  return (
    <div id='containerSign-In'>
        <div id='containerForm-Sing-In'>
          <h1 id='title-Sign-In'>New Hotel</h1>
            <div id='containerForm-Sign-In'>
                <form onSubmit={handleSubmit} id='form-Sign-In'>
                  <div className='container-Inputs'>
                      <label htmlFor="input-name-SI" className='labelForm-SI'>Name:</label>
                      <input type="text" name='input-name-SI' id='input-name'className='input-SI' placeholder='Name' ref={nameRef}  />
                    </div>
                    <div className='container-Inputs'>
                      <label htmlFor="input-password-SI" className='labelForm-SI' required>Photos:</label>
                      <input type="file" name='input-password-SI' id='input-photos'className='input-SI' required placeholder='Photos' ref={photoRef}/>
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
                      <label htmlFor="input-password-SI" className='labelForm-SI' required>Id:</label>
                      <input type="text" name='input-password-SI' id='input-cityId'className='input-SI' required placeholder='City ID' ref={idRef}/>
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