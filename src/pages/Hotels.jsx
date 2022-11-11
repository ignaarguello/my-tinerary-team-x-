import React from 'react'
import hotels from '../hotels'
import Select from '../components/Select/Select'
import SearchBar from '../components/SearchBar/SearchBar'
import CityHotel from '../components/CityHotel/CityHotel'
import { useState, useEffect } from 'react'
import {BASE_URL} from '../api/api'
import axios from 'axios'



export default function Hotels() {
    
    let [hotelss,sethotels]=useState([])
    let [newHotels,setNewHotels]=useState([])
    let [print,setPrint]=useState(false)

    let [dataUlt, setDataUlt] = useState([]);

    useEffect( () => {
        axios.get(`${BASE_URL}/hotels`)
          .then(response => setDataUlt(response.data.response))
          .catch (err => console.log(err))
        }, [dataUlt])

    let aplied={}

    function onFilterValueSelected(FilterValue,especialist){

      aplied[especialist] = FilterValue;
      
      for(let date in aplied){
          
          if(date==="searchBar"){
              if(aplied["searchBar"] !== ''){
                  setNewHotels(newHotels.filter(element=>element.name.toLowerCase().includes(aplied[date].toLowerCase())))
              } 
              newHotels=dataUlt
          }
          if(date==="select"){
              
              if (aplied["select"] === '1') {
                  setNewHotels(hotels.sort(function (a, b) {
                      if (a.capacity > b.capacity) {
                          return -1;
                      } else if (a.capacity < b.capacity) {
                          return 1; 
                      } else {
                          return 0;
                      }
                      }))
              } 
              if (aplied["select"] === '2') {
                  setNewHotels(hotels.sort(function (a, b) {
                      if (a.capacity < b.capacity) {
                          return -1;
                      } else if (a.capacity > b.capacity) {
                          return 1; 
                      } else {
                          return 0;
                      }
                      }))
                  }

                  if (aplied["select"] === '0') {
                    hotels.map(hotel=><CityHotel key={hotel?.id} name={hotel?.name} description={hotel?.description} image={hotel?.photo[0]} capacity={hotel?.capacity}/>)
                  }
                }
                
              
          if(newHotels.length===0){
              console.log("vacio")
          }
      }
      setPrint(true)
  }

  return (
    <div id='containerGeneral'>
      <div className='containerInputs'>
            <Select functionFilter={onFilterValueSelected}/>
            <SearchBar functionFilter={onFilterValueSelected}/>
        </div>
        <div className='containerCards'>
        {(!print)
        ? dataUlt.map(hotel=><CityHotel key={hotel?._id} name={hotel?.name} description={hotel?.description} image={hotel?.photo[0]} capacity={hotel?.capacity} id={hotel?.id}/>)
        : newHotels.map(hotel=><CityHotel key={hotel?._id} name={hotel?.name} description={hotel?.description} image={hotel?.photo[0]} capacity={hotel?.capacity} id={hotel?.id}/>)}
        </div>
    </div>
  )
}
