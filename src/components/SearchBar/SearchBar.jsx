import React from 'react'
import './SearchBar.css'

export default function SearchBar(props) {
    let {functionFilter} = props
    
    return (
        <>
        <input className='inputSearch' type='search' onChange={functionFilter} placeholder="Search.."/>
        </>
        )
    }