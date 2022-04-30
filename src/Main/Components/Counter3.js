import React from "react";
import "../Styles/Counter3.css";

const Counter3 = ({colo , textColor , innerDec, innerInc , innerText}) => {
  return (
    <div className="container" style={{background:colo}}>
      <button className="incrementbtn">{innerInc}</button>
      <h6 className="textbtn" style={{backgroundColor:colo,color:textColor}}>{innerText}</h6>
      <button className="decrementbtn">{innerDec}</button>
    </div>
  );
};


export default Counter3