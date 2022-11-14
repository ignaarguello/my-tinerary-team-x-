import React from 'react'
import CityCard from '../../components/CityCard/CityCard'
import { useState, useEffect } from 'react'
import { BASE_URL } from '../../api/url'
import axios from 'axios'

export default function Cities() {

  let [cities, setCities] = useState([])
  let [checked, setChecked] = useState([])
  let [search, setSearch] = useState([])
  let [filteredCities, setFilteredCities] = useState([])
  //let [busqueda, setBusqueda] = useState([])
  //let names = cities.map(city => city.name)

  // console.log(names);
  let allcities = cities.map((city)=>city.continent)
  let eachContinent = [...new Set(allcities)]
  eachContinent = Array.from(eachContinent)

  useEffect( () => {
    axios.get(`${BASE_URL}/cities`)
    .then(response => setCities(response.data.response))
    .catch (err => console.log(err.message))
    }, [])

  function listen(value){
    // console.log("ESTE ES EL VALUE:  ", value.target.value);
    if(value.target.checked){
      if(value.target.type === "checkbox"){
        setChecked(checked.concat("&continent="+value.target.value))
      }
    } else {
      setChecked(checked.filter(element => element !== "&continent="+value.target.value))
    }

    if (value.target.type === "text"){
      setSearch(value.target.value)
      // let results = cities
      // if (!results){
      //   setBusqueda(cities.filter(city => city.name.toLowerCase().includes(search.toLowerCase())))
      // }
    }
  }


  
  useEffect( () => {
    axios.get(`${BASE_URL}/cities?name=${search}&${checked.join('')}`)
    .then(response => setFilteredCities(response.data.response))
    .catch (err => console.log(err))
  }, [checked,search])


return (
  <div id='containerGeneral'>
    <div className='containerInputs'>
    <input className='inputSearch' type="text" onChange={listen} placeholder="Search.."/>
    <div className="checkbox-container">
    {eachContinent.map(e => {
          return(
            <label key={e}><input onClick={listen} type="checkbox" id={e} value={e}/>{e}</label>
          )
        })}
    </div>
    </div>
      <div className='containerCards'>
        {filteredCities.map(each=><CityCard key={each?._id} id={each?._id} name={each?.name} continent={each?.continent} img={each?.photo} population={each?.population}/>)}
      </div>
  </div>
)

}