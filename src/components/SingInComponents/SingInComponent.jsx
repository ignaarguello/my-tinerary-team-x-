import React from 'react'
import './SingInComponent.css'
import { useRef} from 'react'
import Swal from 'sweetalert2';
import { useDispatch } from "react-redux";
import userActions from '../../redux/actions/userActions'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

export default function SingInComponent() {
    const nameRef = useRef()
    const passwordRef = useRef()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    let { log_in } = userActions
    
    const handleSubmit = async (event)=>{
      event.preventDefault()

      const data = {email: nameRef.current?.value, password: passwordRef.current?.value }
      let res = await dispatch(log_in(data))

      if(res.payload.success){
        Swal.fire({
        title: 'Excellent!',
        text: "Login successful, thanks",
        icon: 'success',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Ok'
        }).then((result) => {
          if(result.isConfirmed){
            navigate('/')
          }
        }
      )
      }else{
        Swal.fire({
          title:'Error!',
          text:`Wrong Login, Try again! - ${res.payload.response}`,
          icon:'error'
        }
      )
    }
  }

return (
    <div id='containerSign-In'>
        <div id='containerForm-Sing-In'>
          <h1 id='title-Sign-In'>Welcome</h1>
            <div id='containerForm-Sign-In'>
                <form onSubmit={handleSubmit} id='form-Sign-In'>
                  <div className='container-Inputs'>
                      <label htmlFor="input-name-SI" className='labelForm-SI'>Email Adress:</label>
                      <input type="email" name='input-name-SI' id='input-name' className='input-SI' placeholder='Email' required ref={nameRef} />
                    </div>
                    <div className='container-Inputs'>
                      <label htmlFor="input-password-SI" className='labelForm-SI' required>Password:</label>
                      <input type="password" name='input-password-SI' id='input-password' className='input-SI' required placeholder='Password' ref={passwordRef}/>
                    </div>
                    <div className='container-Inputs'>
                      <input type="submit" name='input-submit-SI' id='input-submit-SI' value='Sign In' />
                    </div>
                    <div className='container-Inputs'>
                      <div id='containerButtonGoogle'>
                          <img className='logoGoogle' src="https://cdn-icons-png.flaticon.com/512/2702/2702602.png" alt="" />
                          <p>Sign with Google</p>
                      </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
