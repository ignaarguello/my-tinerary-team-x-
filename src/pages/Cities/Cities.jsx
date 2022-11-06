import React from 'react'
import cities from '../../cities'
import SearchBar from '../../components/SearchBar/SearchBar'
import CityCard from '../../components/CityCard/CityCard'
import { useState } from 'react'

export default function Cities() {
  let [citiess,setcities]=useState([])
  let [newcities,setNewcities]=useState([])
  let [print,setPrint]=useState(false)

  let aplied={}

  function onFilterValueSelected(FilterValue,especialist){

    aplied[especialist] = FilterValue;
    
    console.log(aplied)
    
    for(let date in aplied){
        
        if(date==="searchBar"){
            if(aplied["searchBar"] !== ''){
                setNewcities(newcities.filter(element=>element.name.toLowerCase().includes(aplied[date].toLowerCase())))
            } 
            
            newcities=cities
            console.log('lpm', newcities)
        }
        
        if(newcities.length===0){
            console.log("vacio")
        }
    }
    setPrint(true)
}

return (
  <div id='containerGeneral'>
    <div className='containerInputs'>
        <SearchBar functionFilter={onFilterValueSelected}/>
    </div>
      <div className='containerCards'>
        {(!print)
        ? cities.map(hotel=><CityCard key={hotel?.id} name={hotel?.name} description={hotel?.continent} image={hotel?.photo} capacity={hotel?.population}/>)
        : newcities.map(hotel=><CityCard key={hotel?.id} name={hotel?.name} description={hotel?.continent} image={hotel?.photo} capacity={hotel?.population}/>)}
      </div>
  </div>
)
}