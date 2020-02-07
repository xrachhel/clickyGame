import React from "react";
import "./wrapper.css"

function Wrapper(props){
    return (
        <div className="container">
            <div className="row">
                {props.children}
            </div>
        </div>
    )
}


export default Wrapper;