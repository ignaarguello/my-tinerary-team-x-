import React from "react";
import { useState } from "react";

function CitiesCheckbox(props){
let {continent} = props

const [isChecked, setIsChecked] = useState(false);

const handleOnChange = () => {
    setIsChecked(!isChecked);
    isChecked ? console.log(continent + ' es false') : console.log(continent + ' es true')
};



return(
    <>
        <div>
            <label><input type="checkbox" name="continent" value={continent} checked={isChecked} onChange={handleOnChange} />{continent}</label>
        </div>
    </>
)
}
export default CitiesCheckbox;