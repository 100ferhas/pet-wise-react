import React from "react";
import "./NoResults.css";

export default function NoResults(props: any) {
    return (
        <div className="no-results">
            <props.icon size="4rem"/>
            <h3>{props.text}</h3>
        </div>
    );
}