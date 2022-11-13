import React from 'react'
import cities from '../../cities'
import SearchBar from '../../components/SearchBar/SearchBar'
import CityCard from '../../components/CityCard/CityCard'
import { useState } from 'react'
import AllCheckbox from '../../components/AllCheckbox'

export default function Cities() {

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
            console.log('cities', newcities)
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
        <AllCheckbox />
    </div>
      <div className='containerCards'>
        {(!print)
        ? cities.map(each=><CityCard key={each?.id} id={each?.id} name={each?.name} continent={each?.continent} img={each?.photo} population={each?.population}/>)
        : newcities.map(each=><CityCard key={each?.id} id={each?.id} name={each?.name} continent={each?.continent} img={each?.photo} population={each?.population}/>)}
      </div>
  </div>
)
}