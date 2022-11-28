import React from 'react'
import { useRef, useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../api/api'
import { useLocation, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './EditMyItineraries.css'
import { useSelector } from 'react-redux'

function EditMyItineraries() {

    const { id, token } = useSelector( store => store.signIn)
    const nameRef = useRef()
    const photo1Ref = useRef()
    const photo2Ref = useRef()
    const photo3Ref = useRef()
    const durationRef = useRef()
    const priceRef = useRef()
    const descriptionRef = useRef()
    const cityIdRef = useRef()

    let location = useLocation()
    let myUrl = (location.pathname.slice(20))
    let [cities, setCities] = useState([])
    let navigate = useNavigate()
    useEffect( () => {
        axios.get(`${BASE_URL}/api/cities/`)
        .then(res => setCities(res.data.response))
    }, [])

    const handleSubmit = async (event) => {
    event.preventDefault()

    const data = {
        name: nameRef.current?.value,
        photo: [photo1Ref.current?.value, photo2Ref.current?.value, photo3Ref.current?.value],
        description: descriptionRef.current?.value,
        price: priceRef.current?.value,
        duration: durationRef.current?.value,
        userId: id,
        cityId: cityIdRef.current?.value
    }
    
    let headers = { headers: { Authorization: `Bearer ${token}` } };
    try {
      let res = await axios.put(`${BASE_URL}/api/itineraries/${myUrl}`, data, headers);
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
            navigate(`/myitineraries`, { replace: true })
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

return (
    <>
        <div id='cont-editTine'>
            <div id='cont-formEditTine'>

                <h1 id='title-editTine'>Edit Tinerary</h1>

                <div id='subcont-formEditTine'>
                    <form onSubmit={handleSubmit} id='form-editTine'>
                        <div className='cont-inputsTine'>
                            <label htmlFor="input-name-SI" className='label-formEditTine'>Name:</label>
                            <input type="text" name='input-name' id='input-name' className='input-editTine' placeholder='Tour from...' required ref={nameRef}  />
                        </div>
                        <div className='cont-inputsTine'>
                            <label htmlFor="input-password-SI" className='label-formEditTine' >Photos:</label>
                            <input type="text" name='input-password-SI' id='input-photos' className='input-editTine' required placeholder='Photo 1 (http://...)' ref={photo1Ref}/>
                            <input type="text" name='input-password-SI' id='input-photos' className='input-editTine' required placeholder='Photo 2 (http://...)' ref={photo2Ref}/>
                            <input type="text" name='input-password-SI' id='input-photos' className='input-editTine' required placeholder='Photo 3 (http://...)' ref={photo3Ref}/>
                        </div>
                        <div className='cont-inputsTine'>
                            <label htmlFor="input-password-SI" className='label-formEditTine' >Price:</label>
                            <input type="text" name='input-password-SI' id='input-photos' className='input-editTine' required placeholder='$16...' ref={priceRef}/>
                        </div>
                        <div className='cont-inputsTine'>
                            <label htmlFor="input-password-SI" className='label-formEditTine' >Description:</label>
                            <textarea name='input-password-SI' id='input-description' className='input-editTine' required placeholder='A guided tour among the city that...' ref={descriptionRef}/>
                        </div>
                        <div className='cont-inputsTine'>
                            <label htmlFor="input-password-SI" className='label-formEditTine' >Duration:</label>
                            <input type="number" name='input-password-SI' id='input-capacity' className='input-editTine' required placeholder='5 hours...' ref={durationRef}/>
                        </div>
                        <div className='cont-inputsTine'>
                        <label htmlFor="cityId" className='label-formEditTine'>City</label>
                        <select name='cityId' id='cityId' required className='input-editTine' ref={cityIdRef}>
                            <option value="none" defaultValue="None" required>Choose a city...</option>
                            {(cities.map(city =>  <option key={`${city.name}`} value={`${city._id}`} required >{`${city.name}`}</option>))}
                        </select>
                        </div>
                        <div className='cont-inputsTine'>
                            <input type="submit" name='input-submit-SI' id='submit-editTine' value='Finish edition' />
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