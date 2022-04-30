import React from "react";
import Counter from "./Main/Components/CounterComponent";
import Counter2 from "./Main/Components/Counter2"
import Counter3 from "./Main/Components/Counter3"
import CustomFont from "./Main/Components/CustomFont"
const App = () => {
  return (
    <div>
      {/* <Counter col="red" yog="name" />
  
      <Counter2/> */}
      {/* <Counter3  colo="blue" textColor="red" innerText="1004" innerInc="inc" innerDec="dec"/>
      <Counter3  colo="red" textColor="green" innerText="1005" innerInc="increment" innerDec="dec"/>
      <Counter3  colo="green" textColor="orange" innerText="1007" innerInc="inc" innerDec="decrement"/> */}
      <CustomFont sizes="10px" color="blue">vikas yadav</CustomFont>
      <CustomFont sizes="13px" color="green">ariukcug</CustomFont>
      <CustomFont sizes="14px" color="yellow">wefrwfrwgf</CustomFont>
      <CustomFont sizes="30px" color="orange">egfergerg</CustomFont>
    </div>
  );
};

export default App;
