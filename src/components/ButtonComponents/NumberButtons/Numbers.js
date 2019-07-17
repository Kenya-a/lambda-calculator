import React from "react";
import { numbers } from "../../../data";
import { useState } from "react";
import NumberButton from "./NumberButton";
//import any components needed

//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  console.log ('These are numbers:', numbers)
  const [stNumber, setNumber] = useState(numbers)
 
  return (
    <div className = "numberButtonCon">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {stNumber.map((digits, index) => (
         <NumberButton digits ={digits} key ={index}/>
       ))}
    </div>
  );
};
export default Numbers;