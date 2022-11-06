import React from 'react'
import './Select.css'

export default function Select(props) {
    
    let {functionFilter}=props
    function catchEvent2(event){
        functionFilter(event.target.value,"select")
    }

  return (
    <select className='select' name="hotelsSelect" onChange={catchEvent2}>
            <option value="0">Capacidad...</option>
            <option value="1">Ascedent</option>
            <option value="2">Descendent</option>
    </select>
  )
}