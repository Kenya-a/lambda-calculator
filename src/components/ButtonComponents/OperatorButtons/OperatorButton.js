import React from "react";

const OperatorButton = props => {
  return (
    <div>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className = "operatorButton">{props.operatorsMap}</button>
   
    </div>
  );
};
export default OperatorButton;
