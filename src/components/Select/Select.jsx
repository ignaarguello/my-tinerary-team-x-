import React from 'react'
import './Select.css'

export default function Select(props) {
  
  let {functionFilter}=props
  
  return (
    <select className='select' name="hotelsSelect" onChange={functionFilter} type="select">
            <option value="/">Capacity...</option>
            <option value="order=asc">Low Capacity</option>
            <option value="order=desc">High Capacity</option>
    </select>
  )
}