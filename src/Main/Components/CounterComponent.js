import React from "react";
function Counter(props){
    console.log(props)
    return(
            <div style={{backgroundColor:props.col}}>
                <h4>0</h4>
                <button>INCREMENT</button>
                <button>DECRIMENT</button>
            </div>
    )
}

export default Counter ;