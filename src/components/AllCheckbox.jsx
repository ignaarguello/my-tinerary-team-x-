import React from "react";
import CitiesCheckbox from "./CitiesCheckbox/CitiesCheckbox";
import './AllCheckbox.css'
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../api/url";

function AllCheckbox(props){
    let { evento, type } = props
    let [dataUlt, setDataUlt] = useState([])

    useEffect( () => {
        axios.get(`${BASE_URL}/api/cities`)
          .then(response => setDataUlt(response.data.response))
          .catch (err => console.log(err))
        }, [dataUlt])

    let allcities = dataUlt.map((continent)=>continent.continent)
    let eachContinent = [...new Set(allcities)]
    eachContinent = Array.from(eachContinent)
    
    return (
    <div className="checkbox-container">
        {eachContinent.map((continents,index)=><CitiesCheckbox key={index} onClick={evento} type={type} continent={continents} value={continents}/>)}
    </div>
    )
} 
export default AllCheckbox;