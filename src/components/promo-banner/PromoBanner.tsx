import React from "react";
import './PromoBanner.css'

function PromoBanner(props: any) {
    return (
        <div className="promo-banner">
            {props.message}
        </div>
    );
}

export default PromoBanner;

