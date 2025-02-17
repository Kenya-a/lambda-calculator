import React from "react";
import { operators } from "../../../data";
import { useState } from "react";
import OperatorButton from "./OperatorButton";
//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  console.log('These are Operators:', operators)
  const [stOperator, setOperator] = useState(operators);
  // STEP 2 - add the imported data to state
  return (
    <div className = "operatorButtonCon">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {stOperator.map((digits, index) => (
         <OperatorButton digits = {digits} key = {index}/>
       ))}
    </div>
  );
};
export default Operators;