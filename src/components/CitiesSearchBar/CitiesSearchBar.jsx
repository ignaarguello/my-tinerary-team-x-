import React from 'react'

function CitiesSearchBar({type, placeholder, classname}, ref) {
  return (
    <div className='search-bar'>
        <input ref={ref} className={classname} type={type} placeholder={placeholder} />
    </div>
  )
}

const forwardedSearchBar = React.forwardRef(CitiesSearchBar)

export default forwardedSearchBar