import React from 'react'
import { useRef } from 'react'

export default function NewHotel() {
    const nameRef = useRef()
    const photoRef = useRef()
    const capacityRef = useRef()
    const descriptionRef = useRef()
    const cityIdRef = useRef()
    
    const handleSubmit = (event)=>{
      event.preventDefault()
      console.log(nameRef.current.value)
      console.log(photoRef.current.value)
      console.log(capacityRef.current.value)
      console.log(descriptionRef.current.value)
      console.log(cityIdRef.current.value)

      const data = {name: nameRef.current?.value, photos: photoRef.current?.value, capacity: capacityRef.current?.value, description: descriptionRef.current?.value, cityId: capacityRef.current?.value }

      localStorage.setItem('NewHotel', JSON.stringify(data))
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
                      <label htmlFor="input-password-SI" className='labelForm-SI' required>Capacity:</label>
                      <input type="number" name='input-password-SI' id='input-capacity'className='input-SI' required placeholder='Capacity' ref={capacityRef}/>
                    </div>
                    <div className='container-Inputs'>
                      <label htmlFor="input-password-SI" className='labelForm-SI' required>Description:</label>
                      <input type="text" name='input-password-SI' id='input-description'className='input-SI' required placeholder='Description' ref={descriptionRef}/>
                    </div>
                    <div className='container-Inputs'>
                      <label htmlFor="input-password-SI" className='labelForm-SI' required>City Id:</label>
                      <input type="text" name='input-password-SI' id='input-cityId'className='input-SI' required placeholder='City Id' ref={cityIdRef}/>
                    </div>
                    <div className='container-Inputs'>
                      <input type="submit" name='input-submit-SI' id='input-submit-SI' value='Create New Hotel' />
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
