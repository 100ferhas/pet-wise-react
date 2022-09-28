import React from "react";
import "./Banner.css"

function Banner(props: any) {
    return (
        <div className="banner" style={{backgroundColor: props.background}}>
            <div className="banner-content">
                <span className="banner-title">{props.title}</span>
            </div>

            <img src={props.image} alt="banner-image" />
        </div>
    );
}

export default Banner;