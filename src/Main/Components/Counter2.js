import React from "react"
import '../Styles/Counter2.css'
function Counter2(){
    const mybtn = {
        backgroundColor : "red",
        padding : "6px",
        borderRadius : "10px",
        color :"white"
    }
return(
    <div>
        <h4 className="couterText">144</h4>
        <button style={mybtn} >INCREMENT</button>
        <button style={{backgroundColor:"yellow", padding :"10px"}}>DECREMENT</button>
    </div>
)

}

export default Counter2

