import React from 'react'
import './SearchBar.css'

export default function SearchBar(props) {
    let { evento, type } = props
    
    return (
        <>
        <input className='inputSearch' type={type} onChange={evento} placeholder="Search.."/>
        </>
        )
    }