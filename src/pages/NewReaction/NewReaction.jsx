import React from 'react'
import { useRef, useState, useEffect } from 'react'
import './NewReaction.css'
import axios from 'axios';
import { BASE_URL } from '../../api/url';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';

function NewReaction() {

    const { token } = useSelector(store => store.signIn)

    const itineraryRef = useRef()
    const nameRef = useRef()
    const iconRef = useRef()
    const iconBackRef = useRef()

    let [itineraries, setItineraries] = useState([])
    useEffect( () => {
        axios.get(`${BASE_URL}/api/itineraries/`)
        .then(res => setItineraries(res.data.response))
    }, [])

    const handleSubmit = async (event)=>{
        event.preventDefault()
    
        const data = {
            name: nameRef.current?.value,
            itineraryId: itineraryRef.current?.value,
            icon: iconRef.current?.value,
            iconBack: iconBackRef.current?.value,
        }
    
        let headers = { headers: { Authorization: `Bearer ${token}` } };
        try {
            Swal.fire({
                title: 'Are you sure?',
                text: `You are creating "${data.name}" reaction`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, create!'
            }).then( async(result) => {
                if (result.isConfirmed) {
                    let res = await axios.post(`${BASE_URL}/api/reactions`, data, headers);
                    if (res.data.success) {
                        Swal.fire(
                            res.data.message,
                            "Excellent!",
                            'success'
                        )
                        event.target.reset()       
                    } else {
                        Swal.fire(
                            res.data.message.join(', '),
                            "Try again",
                            'error'
                        )
                    }
                }
            })
        } catch (error) {
            console.log(error);
        }
    }


return (
    <div id='cont-newReaction'>
        <div id='cont-formnewReaction'>
            <h1 id='title-NewReaction'>New Reaction</h1>
            <div id='cont-formularioNewReaction'>
                <form onSubmit={handleSubmit} id='form-NewReaction'>
                    <div className='cont-inputsNewReaction'>
                        <label htmlFor="input-name-SI" className='label-NewReaction' required>Itinerary:</label>
                        <select name='cityId' id='cityId' className='input-SI' ref={itineraryRef}>
                            <option value="none" defaultValue="None">Choose an itinerary...</option>
                            {(itineraries.map(it =>  <option key={`${it.name}`} value={`${it._id}`} >{`${it.name}`}</option>))}
                        </select>
                    </div>
                    <div className='cont-inputsNewReaction'>
                        <label htmlFor="input-password-SI" className='label-NewReaction' required>Name:</label>
                        <input type="text" name='input-password-SI' id='input-photos' className='input-NewReaction' required placeholder='Name of the reaction' ref={nameRef}/>
                    </div>
                    <div className='cont-inputsNewReaction'>
                        <label htmlFor="input-password-SI" className='label-NewReaction' required>Icon:</label>
                        <input type="text" name='input-password-SI' id='input-capacity' className='input-NewReaction' required placeholder='(URL) Icon that will be filled when clicked' ref={iconRef}/>
                    </div>
                    <div className='cont-inputsNewReaction'>
                        <label htmlFor="input-password-SI" className='label-NewReaction' required>Icon back:</label>
                        <input type="text" name='input-password-SI' id='input-capacity' className='input-NewReaction' required placeholder='(URL) Icon that will be empty (not clicked)' ref={iconBackRef}/>
                    </div>
                    <div className='cont-inputsNewReaction'>
                        <input type="submit" name='input-submit-SI' id='submit-NewCity' value='Create a Reaction' />
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}

export default NewReaction