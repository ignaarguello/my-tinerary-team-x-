import React from 'react'
import '../Cities/Cities.css'
import CitiesSearchBar from '../../components/CitiesSearchBar/CitiesSearchBar'
import EachCard from '../../components/EachCard'
import AllCheckbox from '../../components/AllCheckbox'

export default function Cities() {
  return (
        <div className='cities-container'>
            <CitiesSearchBar className='cities-search' type='text' placeholder='Find your favourite city...' />
            {/* <ul>
              {cities.filter( (cities) => cities.name.toLowerCase().includes(searched)).map( (cities) => (
                <li key={cities.id} > {cities.name} </li>
              ) ) }
            </ul> */}
            <AllCheckbox />
            <EachCard />
        </div>
  )
}
