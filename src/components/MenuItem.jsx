import React from "react";

function MenuItem({iconSrc, label}){
    return (
        <div>
            <img src = {iconSrc}/>
            <p>{label}</p>
        </div>
    )
}
export default MenuItem;