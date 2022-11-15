import React from "react";
import { useState } from "react";
import { useEffect } from 'react'
import axios from "axios";
import {BASE_URL} from '../../api/api'

function CitiesCheckbox(props){
let {continent} = props


/* const handleOnChange = () => {
    setIsChecked(!isChecked);
    isChecked ? console.log(continent + ' es false') : console.log(continent + ' es true')
}; */

let [dataUltCities, setdataUltCities] = useState([]);

    useEffect( () => {
        axios.get(`${BASE_URL}/api/cities`)
          .then(response => setdataUltCities(response.data.response))
          .catch (err => console.log(err))
        }, [])

        console.log(dataUltCities)

const handleOnChange = () =>{
    setIsChecked(!isChecked)
    if(isChecked == false){
        console.log('es true')
    }
}

return(
    <>
        <div>
            <label><input type="checkbox" name="continent" value={continent} />{continent}</label>
        </div>
    </>
)
}
export default CitiesCheckbox;