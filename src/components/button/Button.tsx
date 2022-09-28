import React from "react";
import "./Button.css"

function Button(props: any) {
    return (
        <a href={props.link || "#"} className={`button ${props.primary ? "primary" : ""}`}>
            {props.text}
        </a>
    );
}

export default Button;