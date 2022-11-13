import React from 'react'
import CityCard from '../../components/CityCard/CityCard'
import { useState, useEffect } from 'react'
import { BASE_URL } from '../../api/url'
import axios from 'axios'

export default function Cities() {

  
  let [cities, setCities] = useState([])
  let [checked, setChecked] = useState([])
  let [search, setSearch] = useState('')
  let [filteredCities, setFilteredCities] = useState([])

  // console.log(names);
  let allcities = cities.map((city)=>city.continent)
  let eachContinent = [...new Set(allcities)]
  eachContinent = Array.from(eachContinent)

  useEffect( () => {
    axios.get(`${BASE_URL}/cities`)
    .then(response => setCities(response.data.response))
    .catch (err => console.log(err.message))
    }, [])


  useEffect( () => {
    let checkQuery = checked.slice()
    if (checked.length > 0){
      checkQuery = checked.join('&continent=')
    }
    axios.get(`${BASE_URL}/cities?name=${search}&continent=${checkQuery}`)
    .then(response => setFilteredCities(response.data.response))
    .catch (err => console.log(err.message))
    }, [search, checked])
  
  let checkFunction = (e) => {
    let auxArray = [...checked]
    if(e.target.checked){
      auxArray.push(e.target.value)
    } else {
      auxArray = auxArray.filter( ele => ele !== e.target.value)
    }
    setChecked(auxArray)
  }

  let inputFunction = (e) => {
    setSearch(e.target.value.trim())
  }
  // console.log("SEARCH: ",search)
  // console.log("CHECKED: ",checked)
  
  useEffect( () => {
    axios.get(`${BASE_URL}/cities?name=${search}${checked.join('')}`)
    .then(response => setFilteredCities(response.data.response))
    .catch (err => console.log(err))
  }, [checked,search])

return (
  <div id='containerGeneral'>
    <div className='containerInputs'>
    <input className='inputSearch' type="text" onChange={inputFunction} placeholder="Search.."/>
    <div className="checkbox-container">
    {eachContinent.map(e => {
          return(
            <label key={e}><input onClick={checkFunction} type="checkbox" id={e} value={e}/>{e}</label>
          )
        })}
    </div>
    </div>
      <div className='containerCards'>
      {
        (filteredCities.length > 0)
        ? filteredCities.map(each=><CityCard key={each?._id} id={each?._id} name={each?.name} continent={each?.continent} img={each?.photo} population={each?.population}/>)
        : <CityCard name="City not found" continent="Try again" img="https://dinahosting.com/blog/cont/uploads/2021/03/error-404.jpg" population="0"/>
      }
      </div>
  </div>
)

}