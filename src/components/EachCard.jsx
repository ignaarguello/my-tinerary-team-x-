import React from 'react'
import cities from '../cities'
import CityCard from './CityCard/CityCard'

export default function EachCard() {
  return (
    <div>
        {cities.map(allcities => <CityCard key={allcities?.id} image={allcities?.photo} name={allcities?.name} continent={allcities?.continent} /> )}
    </div>
  )
}
