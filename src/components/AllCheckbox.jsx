import React from "react";
import CitiesCheckbox from "./CitiesCheckbox/CitiesCheckbox";
import cities from "../cities";
import './AllCheckbox.css'

function AllCheckbox(){
    let allcities = cities.map((continent)=>continent.continent)
    let eachContinent = [...new Set(allcities)]
    eachContinent = Array.from(eachContinent)
    
    return (
    <div className="checkbox-container">
        {eachContinent.map((continents,index)=><CitiesCheckbox key={index} continent={continents}/>)}
    </div>
    )
} 
export default AllCheckbox;