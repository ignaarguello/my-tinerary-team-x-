import React from 'react'
import './SearchBar.css'

export default function SearchBar(props) {
    let {functionFilter, reference} = props
    
    return (
        <>
        <input className='inputSearch' type='search' onChange={functionFilter} placeholder="Search.." ref={reference}/>
        </>
        )
    }