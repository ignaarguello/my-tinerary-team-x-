import React from 'react'
import Select from '../components/Select/Select'
import SearchBar from '../components/SearchBar/SearchBar'
import CityHotel from '../components/CityHotel/CityHotel'
import { useState, useEffect } from 'react'
import {BASE_URL} from '../api/api'
import axios from 'axios'



export default function Hotels() {

    let [dataUlt, setDataUlt] = useState([]);

    useEffect( () => {
        axios.get(`${BASE_URL}/hotels`)
          .then(response => setDataUlt(response.data.response))
          .catch (err => console.log(err))
        }, [])

        
let [dataFilter, setDataFilter] = useState([])
        
        function getData(event){
            if(event.target.value == 1){
                axios.get(`${BASE_URL}/hotels?order=asc`)
                .then(response => setDataFilter(response.data.response))
                console.log('Data Filter', dataFilter)
                }
            if(event.target.value == 2){
                axios.get(`${BASE_URL}/hotels?order=desc`)
                .then(response => setDataFilter(response.data.response))
            }
            if(event.target.value == 0){
                axios.get(`${BASE_URL}/hotels`)
                .then(response => setDataFilter(response.data.response))
                .catch (err => console.log(err))
            }
        }
        
        if(dataFilter.length == 0){
                axios.get(`${BASE_URL}/hotels`)
                .then(response => setDataFilter(response.data.response))
                .catch (err => console.log(err))
                console.log('vacio')
            }
      
      return (
          <div id='containerGeneral'>
            <div className='containerInputs'>
                  <Select functionFilter={getData}/>
                  <SearchBar functionFilter={getData}/>
              </div>
              <div className='containerCards'>
                  {dataFilter.map(hotel=><CityHotel key={hotel?._id} name={hotel?.name} description={hotel?.description} image={hotel?.photo[0]} capacity={hotel?.capacity} id={hotel?.id}/>)}
                  </div>
          </div>
        )
    }

  


