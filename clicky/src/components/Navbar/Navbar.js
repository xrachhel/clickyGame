import React from "react";

function Navbar(props){
    return(
        <div>
            <nav className="navbar fixed-top navbar-dark bg-dark">
                <h4>Bachelor Clicky Game!</h4>
                <h4>{props.text}</h4>
                <h4>Score: {props.score} | Top Score {props.highScore}</h4>
            </nav>

        </div>
    )
}

export default Navbar;