import React from "react"

const CustomFont = (prop) => {
    const {sizes, children ,color} = prop
    console.log(prop)
    return(

        <div style={{fontSize:sizes,color:color}}>{children}</div>
    )

}
export default CustomFont