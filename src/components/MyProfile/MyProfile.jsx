import React from 'react'
import './MyProfile.css' 
import { useEffect, useState } from 'react';
import { BASE_URL } from '../../api/api';
import userActions from '../../redux/actions/userActions'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { Link as LinkRouter, Navigate } from 'react-router-dom'

export default function Profile() {

  const {id} = useParams()

  let [userFound, setUserFound] = useState([])

  useEffect(()=>{
    axios.get(`${BASE_URL}/api/auth/me/${id}`)
    .then(response => setUserFound(response.data.response.user[0]))
  },[])

  console.log(userFound)

 return (
    <div id='containerGeneralMyProfile'>
      <h1 id='titleMyProfile'>My Profile</h1>
        <div id='containerCard'>
            <div id='containerImage'>
                <img id='imageCardUser' src={userFound.photo} alt="" />
            </div>
            <div id='containerDatosUsuario'>
              <div id='containerNamesUser'>
                <h3 className='nameUser'>Name: {userFound.name}</h3>
                <h3 className='nameUser'>{userFound.lastName}</h3>
              </div>
                <h4 className='ageUser text'>Age: {userFound.age}</h4>
                <h4 className='countryUser text'>Country: {userFound.country}</h4>
                <h5 className='emailUser'>Email: {userFound.email}</h5>
            </div>
        </div>
        <LinkRouter to={`/editprofile/${id}`} id='LinkRouter'>
             <div id='EditmyProfileButton'>Edit My Profile</div>
        </LinkRouter>
    </div>
  )
}
