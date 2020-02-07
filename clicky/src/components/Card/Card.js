import React from "react";

function Card(props){
    return (
        <div className="row col-1 col-md-3">
            <div className="col-md-1">
                <div className="card">
                    <img src={props.image} alt={props.id}/>
                </div>
            </div>

        </div>
    )
}

export default Card;