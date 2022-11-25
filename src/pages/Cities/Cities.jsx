import React from 'react'
import CityCard from '../../components/CityCard/CityCard'
import { useState, useEffect, useRef } from 'react'
import '../../components/AllCheckbox.css'
import { useDispatch, useSelector } from 'react-redux'
import cityActions from '../../redux/actions/cityAction'

export default function Cities() {

  const dispatch = useDispatch()
  const {getCities, filterCities} = cityActions

  const { categories, cities } = useSelector( (store) => store.cityReducer )

  let [checked, setChecked] = useState([])
  let searchInput = useRef()

  useEffect( () => {
    if (cities.length === 0){
      dispatch(getCities())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  let filter = (event) => {
    let checks = checkFunction(event)
    let text = searchInput.current.value.trim()
    let urlChecks = checks.map( (check) => `continent=${check}`).join('&')
    dispatch(filterCities({ continent: urlChecks, value: text}))
  }
  
  let checkFunction = (e) => {
    let auxArray = []
    if(e.target.checked){
      auxArray.push(...checked, e.target.value)
    } else {
      auxArray = checked.filter( ele => ele !== e.target.value)
    }
    setChecked(auxArray)
    return auxArray
  }

return (
  <div id='containerGeneral'>
    <div className='containerInputs'>
      <input className='inputSearch' type="text" onKeyUp={filter} placeholder="Search.." ref={searchInput}/>
      <div className="checkbox-container">
        {categories.map(e => 
        <label key={e}><input onChange={filter} type="checkbox" id={e} value={e}/>{e}</label>
        )}
      </div>
    </div>
    <div className='containerCards'>
      {
        (cities.length > 0)
        ? cities.map(each=><CityCard key={each?._id} id={each?._id} name={each?.name} continent={each?.continent} img={each?.photo} population={each?.population}/>)
        : <h2>Try again! We do not have that city</h2>
      }
      </div>
  </div>
)

}