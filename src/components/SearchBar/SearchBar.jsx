import React from 'react'
import './SearchBar.css'

export default function SearchBar(props) {
    let{functionFilter}=props
    function catchEvent(event){
        functionFilter(event.target.value,"searchBar")
    }
    return (
        <input className='inputSearch' type="text" onKeyUp={catchEvent} placeholder="Search.."/>
        )
    }