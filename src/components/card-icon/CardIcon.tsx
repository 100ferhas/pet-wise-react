import React from "react";
import "./CardIcon.css"

function CardIcon(props: any) {
    return (
        <div className="icon-container">
            <props.icon className="icon" style={{backgroundColor: props.color}}/>
            <h3>{props.title}</h3>
            <span>{props.description}</span>
        </div>
    );
}

export default CardIcon;