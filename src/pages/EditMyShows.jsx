import React from 'react'
import { useRef} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux'
import showActions from '../redux/actions/showActions'

function EditMyHotels() {

    const nameRef = useRef()
    const photoRef1 = useRef()
    const descriptionRef = useRef()
    const citiIdRef = useRef()
    const navigate = useNavigate()

    const {id} = useSelector(store => store.signIn)
    const {token} = useSelector(store => store.signIn)
    const dispatch = useDispatch()
    const { editMyShow } = showActions

    let location = useLocation()
    let myUrl = (location.pathname.slice(14))
    
    const handleSubmit = (event)=>{
        event.preventDefault()
  
        const data = {
          name: nameRef.current?.value, 
          photo:  photoRef1.current?.value,
          description: descriptionRef.current?.value, 
          citiId:citiIdRef.current?.value,
          userId:id,
        }
        
        dispatch(editMyShow({token:token, data:data, idShow:myUrl})) 

        event.target.reset()

        setTimeout(() => {
          navigate(`/myshows`, { replace: true })
      }, 5000)

      }



    return (
        <div id='containerSign-In'>
            <div id='containerForm-Sing-In'>
              <h1 id='title-Sign-In'>- Edit Show -</h1>
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
                          <label htmlFor="input-password-SI" className='labelForm-SI' required>- Description -</label>
                          <input type="text" name='input-password-SI' id='input-description'className='input-SI' required placeholder='Description' ref={descriptionRef}/>
                        </div>
                        <div className='container-Inputs'>
                          <label htmlFor="input-password-SI" className='labelForm-SI' required>- City Id -</label>
                          <input type="text" name='input-password-SI' id='input-cityId'className='input-SI' required placeholder='City ID' ref={citiIdRef}/>
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