import React from 'react'
import hotels from '../hotels'
import Select from '../components/Select/Select'
import SearchBar from '../components/SearchBar/SearchBar'
import CityHotel from '../components/CityHotel/CityHotel'
import { useState } from 'react'

export default function Hotels() {
    let [hotelss,sethotels]=useState([])
    let [newHotels,setNewHotels]=useState([])
    let [print,setPrint]=useState(false)

    let aplied={}

    function onFilterValueSelected(FilterValue,especialist){

      aplied[especialist] = FilterValue;
      
      console.log(aplied)
      
      for(let date in aplied){
          
          if(date==="searchBar"){
              if(aplied["searchBar"] !== ''){
                  setNewHotels(newHotels.filter(element=>element.name.toLowerCase().includes(aplied[date].toLowerCase())))
              } 
              
              newHotels=hotels
              console.log('lpm', newHotels)
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
        ? hotels.map(hotel=><CityHotel key={hotel?.id} name={hotel?.name} description={hotel?.description} image={hotel?.photo[0]} capacity={hotel?.capacity}/>)
        : newHotels.map(hotel=><CityHotel key={hotel?.id} name={hotel?.name} description={hotel?.description} image={hotel?.photo[0]} capacity={hotel?.capacity}/>)}
        </div>
    </div>
  )
}
