import React from 'react'
import './Select.css'

export default function Select(props) {
  
  let {functionFilter, reference}=props
  
  return (
    <select className='select' name="hotelsSelect" onChange={functionFilter} ref={reference} type="select">
            <option value="default">Capacity...</option>
            <option value="asc">Low Capacity</option>
            <option value="desc">High Capacity</option>
    </select>
  )
}