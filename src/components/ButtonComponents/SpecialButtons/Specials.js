import React from "react";
import { specials } from "../../../data";
import { useState } from "react";
import SpecialButton from "./SpecialButton";
//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state
console.log("These are special:", specials)
const [stSpecials, setSpecials] = useState(specials);

  return (
    <div className = "specialButtonCon">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {stSpecials.map((digits, index) =>(
         <SpecialButton digits = {digits} key = {index}/>
       ))}
    </div>
  );
};

export default Specials;