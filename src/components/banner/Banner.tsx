import React from "react";
import "./Banner.css"

function Banner(props: any) {
    return (
        <div className="banner" style={{ backgroundColor: props.background, backgroundImage: `url("${props.image}")` }}>
            <div className="banner-content">
                <span className="banner-title">{props.title}</span>
                <p className="banner-description">{props.description}</p>
                <p className="banner-buttons">{props.buttons}</p>
            </div>
        </div>
    );
}

export default Banner;