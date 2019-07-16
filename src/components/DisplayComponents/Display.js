import React from "react";
import Numbers from "../ButtonComponents/NumberButtons/Numbers";
import Specials from "../ButtonComponents/SpecialButtons/Specials";
import Operators from "../ButtonComponents/OperatorButtons/Operators";
import Logo from "../DisplayComponents/Logo";
import Screen from "../DisplayComponents/Screen";

const Display = () => {
  return (
    <div className="calcContainer">
      <div className="calculatorLogo">
          <Logo />
        </div>
         <div className="calcScreen">
          <Screen />
        </div>
        <div className="calcButtons">
          <div> 
            <Specials />
            <Numbers className = "numberButton"/>
          </div>
          <div>
            <Operators />
          </div>
        </div>
      </div>
  );

};
export default Display;