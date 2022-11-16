import React from 'react'
import Select from '../components/Select/Select'
import SearchBar from '../components/SearchBar/SearchBar'
import CityHotel from '../components/CityHotel/CityHotel'
import { useState, useEffect } from 'react'
import {BASE_URL} from '../api/api'
import axios from 'axios'


export default function Hotels() {

    let [dataHotels, setDataHotels] = useState([])
    let valueSelect = '/'
    let [valueSearch, setValueSearch] = useState([])


    useEffect(()=>{
        axios.get(`${BASE_URL}/api/hotels`)
        .then(res => setDataHotels(res.data.response))
    },[])
        
    function filter(value){
        if(value.target.type === "select-one"){
            valueSelect = value.target.value
        }

        if(value.target.type === "search"){
            setValueSearch(value.target.value)
        }
        axios.get(`${BASE_URL}/api/hotels/?name=${valueSearch}&${valueSelect}`)
        .then(res => setDataHotels(res.data.response))
    }

    useEffect(()=>{
        axios.get(`${BASE_URL}/api/hotels/?name=${valueSearch}&${valueSelect}`)
        .then(res => setDataHotels(res.data.response))
    },[valueSearch])
      
      return (
          <div id='containerGeneral'>
            <div className='containerInputs'>
                  <Select functionFilter={filter}/>
                  <SearchBar functionFilter={filter}/>
              </div>
              <div className='containerCards'>
                  {dataHotels.map(hotel=><CityHotel key={hotel?._id} name={hotel?.name} description={hotel?.description} image={hotel?.photo[0]} capacity={hotel?.capacity} id={hotel?._id} />)}
                </div>
          </div>
        )
    }

  


