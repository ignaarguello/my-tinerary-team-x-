import React from 'react'
import { Link as LinkRouter } from 'react-router-dom';
import '../components/CityHotel/CityHotel.css'
import showActions from '../redux/actions/showActions';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

export default function MyShowCard(props) {

    const { deleteMyShow } = showActions
    const { mensaje } = useSelector( (store) => store.shows )
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {token} = useSelector(store => store.signIn)
    let {image,name,description, id} = props;

    return (
            <div className='card-city'>
                <img className='imageCardHotels' src={image} alt={name} />
                <h2 className='titleCardHotels'>{name}</h2>
                <p className='descriptionCardHotels'>{description}</p>
                <LinkRouter to={`edit/${id}`} className='btnCardHotels'><div>Edit</div></LinkRouter>
                <button className='btnCardDelete' onClick={() => {
                    dispatch(deleteMyShow({token:token, idShow:id}));
                    if (mensaje.length >= 0) {
                       console.log(mensaje) 
                        toast.success(mensaje, {
                            icon: '🌆',
                            position: "top-right",
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: false,
                            pauseOnHover: false,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                        });
                        toast.info("Nada", {
                            icon: '🥳',
                            position: "top-right",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: false,
                            pauseOnHover: false,
                            draggable: false,
                            progress: undefined,
                            theme: "colored",
                            });
                    }
                }} >Delete</button>
                <ToastContainer />
            </div>
        )
}