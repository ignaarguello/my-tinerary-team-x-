import React from 'react'
import './Select.css'

export default function Select(props) {
  
  let {functionFilter}=props
  
  return (
    <select className='select' name="hotelsSelect" onChange={functionFilter}>
            <option value="0">Capacidad...</option>
            <option value="1">Ascedent</option>
            <option value="2">Descendent</option>
    </select>
  )
}