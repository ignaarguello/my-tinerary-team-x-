import React from "react";
import { useState } from "react";

function CitiesCheckbox(props){
let {continent} = props





return(
    <>
        <div>
            <label><input type="checkbox" name="continent" value={continent} />{continent}</label>
        </div>
    </>
)
}
export default CitiesCheckbox;