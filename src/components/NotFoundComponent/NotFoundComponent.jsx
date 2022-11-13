import React from 'react'
import './NotFoundComponent.css'
import CallToAction from '../CallToAction/CallToAction'

export default function NotFoundComponent() {
  return (
    <div id='containerNotFound'>
        <div id='containerTitles'>
            <h1 className='title404'>Oops, Error 404...</h1>
            <h2 className='titleSorry'>Sorry, an error occurred, please try again.</h2>
            <CallToAction name='/home' id='btn-home'/>
        </div>
    </div>
  )
}
