import React from 'react'
import '../InputsSignUp/InputsSignUp.css'


function Input({ type, id, className, value, placeholder }, ref){
  return <input ref={ref} type={type}  id={id} className={className} value={value} required placeholder={placeholder} />
}

const forwardedInput = React.forwardRef(Input)

export default forwardedInput;
