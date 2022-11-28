import React from 'react'
import { Link as LinkRouter } from 'react-router-dom';
import '../components/CityCard/CityCard.css'
import cityAction from '../redux/actions/cityAction'
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CityCard(props) {

    const { token } = useSelector( store => store.signIn)
    const { deleteMyCity } = cityAction
    const { mensaje } = useSelector( (store) => store.cityReducer )
    const dispatch = useDispatch()
    let {img,name,continent, population, id} = props;
    

    return (
            <div className='card-city'>
                <img className='imageCardHotels' src={img} alt={name} />
                <h2 className='titleCardHotels'>{name}</h2>
                <p className='descriptionCardHotels'>{continent}</p>
                <p className='capacityHotels'>Population - {population} </p>
                <LinkRouter to={`edit/${id}`} className='btnCardHotels'><div>Edit</div></LinkRouter>
                <button className='btnCardDelete' onClick={() => {
                    dispatch(deleteMyCity({idCity: id, token: token}));
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