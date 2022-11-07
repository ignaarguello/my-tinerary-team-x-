import React from 'react'
import CitiesDet from '../../components/CitiesDet'
import cities from '../cities'

// componente donde renderizo la pagina completa

function CitiesDetails() {
  return (
    <>
      <CitiesDet key={cities?.id} name={cities?.name} continent={cities?.continent} img={cities?.photo} population={cities?.population}/>)
    </>
  )
}

export default CitiesDetails