import React from 'react'

export default function ButtonSignUp(props) {
    let {type, value, id, className, event} = props
  return (
    <div>
        <button type={type} value={value} id={id} className={className} onClick={event}>Sign Up</button>
    </div>
  )
}
