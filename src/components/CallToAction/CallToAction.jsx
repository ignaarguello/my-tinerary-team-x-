import React from 'react'
import { Link as LinkRouter } from 'react-router-dom';
import '../CallToAction/CallToAction.css'

export default function CallToAction(props) {
    let {name, id} = props
  return (
        <LinkRouter to={name}>
          <button className='button-goto' id={id}>GO TO {name.toUpperCase().slice(1)}</button>
        </LinkRouter>
  )
}