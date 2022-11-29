import React from 'react'
import { Link as LinkRouter } from 'react-router-dom';
import './MyTineraryCard.css'
import tineraryActions from '../../redux/actions/tineraryAction';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

export default function CityCard(props) {

    const { deleteMyTinerary } = tineraryActions
    const { mensaje } = useSelector( (store) => store.tineraryReducer )
    const { token } = useSelector( store => store.signIn)

    const dispatch = useDispatch()
    let {img,name,duration , description, id, price} = props;

    return (
            <div className='card-Itinerary'>
                <img className='imageCardItineraries' src={img} alt={name} />
                <h2 className='titleCardItineraries'>{name}</h2>
                <p className='descriptionCardItineraries'>{description}</p>
                <p className='durationItineraries'>Duration - {duration}HS</p>
                <p className='durationItineraries'>${price}</p>
                <LinkRouter to={`edit/${id}`} className='btnCardEdit'><div>Edit</div></LinkRouter>
                <button className='btnCardDelete' onClick={() => {
                    dispatch(deleteMyTinerary({idTinerary: id, token: token}));
                    if (mensaje.length > 0) {
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
                        // toast.info("Press 'F5' to see the updates", {
                        //     icon: '🥳',
                        //     position: "top-right",
                        //     autoClose: 3000,
                        //     hideProgressBar: false,
                        //     closeOnClick: false,
                        //     pauseOnHover: false,
                        //     draggable: false,
                        //     progress: undefined,
                        //     theme: "colored",
                        //     });
                    }
                }} >Delete</button>
                <ToastContainer />
            </div>
            
        )
}