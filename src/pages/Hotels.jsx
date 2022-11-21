import React, { useRef, useEffect } from 'react'
import Select from '../components/Select/Select'
import SearchBar from '../components/SearchBar/SearchBar'
import CityHotel from '../components/CityHotel/CityHotel'
import { useDispatch, useSelector } from 'react-redux'
import hotelActions from '../redux/actions/hotelActions'


export default function Hotels() {
    const dispatch = useDispatch()
    const { getHotels, getHotelsFiltered } = hotelActions
    const { hotels, name, order } = useSelector((state) => state.hotels)
    const searchId = useRef()
    const selectId = useRef()

    console.log(hotels)
    
    useEffect(() => {
        if (name || order) {
            let data = {
                name,
                order
            }
            dispatch(getHotelsFiltered(data))
            searchId.current.value = name
            selectId.current.value = order
        } else {
            dispatch(getHotels())
        }
    }, [])
    
    function filterCheckCards() {
        let order = selectId.current.value
        if (order !== 'asc' && order !== 'desc') {
            order = 'asc'
        }
        let data = {
            name: searchId.current.value,
            order
        }
        dispatch(getHotelsFiltered(data))
    }

    return (
          <div id='containerGeneral'>
            <div className='containerInputs'>
                     <input className="search-input w-100" type="search" name="search" id="search" placeholder="Search" ref={searchId} onChange={filterCheckCards} />
                        <select name="select" defaultValue={'default'} onInput={filterCheckCards} ref={selectId}>
                            <option value='default' disabled>Select a capacity order:</option>
                            <option value="asc">Ascendent</option>
                            <option value="desc">Descendent</option>
                        </select>
              </div>
              <div className='containerCards'>
                {(hotels.map((hotel) => <CityHotel key={hotel?._id} name={hotel?.name} description={hotel?.description} image={hotel?.photo[0]} capacity={hotel?.capacity} id={hotel?._id} />))}
             </div>
          </div>
        )
    }


