import React from "react";
import "./card.css"

function Card(props){
    return (
        <div className="row">
            <div className="col-md-1">
                <div className="card">
                    <img src={props.image} alt={props.id} onClick={() => props.clickMe(props.id)}/>
                </div>
            </div>

        </div>
    )
}

export default Card;