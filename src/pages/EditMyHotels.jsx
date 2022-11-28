import React from 'react'
import { useRef, useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../api/api'
import { useLocation, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux'
import hotelActions from '../redux/actions/hotelActions'


function EditMyHotels() {

    let [cities, setCities] = useState([])
    let [idCities, setIdCities] = useState([])

    useEffect( () => {
      axios.get(`${BASE_URL}/api/cities/`)
      .then(res => setCities(res.data.response))
    }, [])

    const nameRef = useRef()
    const photoRef1 = useRef()
    const capacityRef = useRef()
    const descriptionRef = useRef()
    const citiIdRef = useRef()
    const navigate = useNavigate()

    let location = useLocation()
    let myUrl = (location.pathname.slice(15))

    const {id} = useSelector(store => store.signIn)
    const {token} = useSelector(store => store.signIn)
    const dispatch = useDispatch()
    const { editMyHotel } = hotelActions


    const handleSubmit = (event)=>{
        event.preventDefault()
        
        const data = {
          name: nameRef.current?.value, 
          photo:  photoRef1.current?.value, 
          capacity: capacityRef.current?.value, 
          description: descriptionRef.current?.value, 
          citiId:citiIdRef.current?.value,
          userId:id, //proximamente no será hardcodeado
        }
        
        dispatch(editMyHotel({token:token, data:data, idHotel:myUrl})) 

        event.target.reset()

        setTimeout(() => {
          navigate(`/myhotels`, { replace: true })
      }, 5000)
      }

    return (
        <div id='containerSign-In'>
            <div id='containerForm-Sing-In'>
              <h1 id='title-Sign-In'>- Edit Hotel -</h1>
                <div id='containerForm-Sign-In'>
                    <form onSubmit={handleSubmit} id='form-Sign-In'>
                      <div className='container-Inputs'>
                          <label htmlFor="input-name-SI" className='labelForm-SI'>- Name-</label>
                          <input type="text" name='input-name-SI' id='input-name'className='input-SI' placeholder='Name' ref={nameRef}  />
                        </div>
                        <div className='container-Inputs'>
                          <label htmlFor="input-password-SI" className='labelForm-SI' required>- Photos -</label>
                          <input type="text" name='input-password-SI' id='input-photos'className='input-SI' required placeholder='Photos' ref={photoRef1}/>
                        </div>
                        <div className='container-Inputs'>
                          <label htmlFor="input-password-SI" className='labelForm-SI' required>- Capacity -</label>
                          <input type="number" name='input-password-SI' id='input-capacity'className='input-SI' required placeholder='Capacity' ref={capacityRef}/>
                        </div>
                        <div className='container-Inputs'>
                          <label htmlFor="input-password-SI" className='labelForm-SI' required>- Description -</label>
                          <textarea name='input-password-SI' id='input-description'className='input-SI' required placeholder='Description' ref={descriptionRef}/>
                        </div>
                        <div className='container-Inputs'>
                          <label htmlFor="cityId" className='labelForm-SI' required>- City Id -</label>
                            <select name='cityId' id='cityId'>
                              <option value="none" selected>Select a city...</option>
                              {(cities.map(city =>  <option value={`${city._id}`} ref={citiIdRef}>{`${city.name}`}</option>))}
                            </select>
                        </div>
                        <div className='container-Inputs'>
                          <input type="submit" name='input-submit-SI' id='input-submit-SI' value='Finish Edition' />
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
      )
}

export default EditMyHotels