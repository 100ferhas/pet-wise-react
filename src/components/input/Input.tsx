import React from "react";
import "./Input.css";

function Input(props: any) {
    let type = "text";
    if (props.type) {
        type = props.type;
    }

    return (
        <>
            <input type={type} className={props.className} placeholder={props.placeholder} style={{backgroundImage: `url("${props.background}")`}} />
        </>
    );
}

export default Input;