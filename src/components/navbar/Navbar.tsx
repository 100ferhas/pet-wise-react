import React from "react";
import "./Navbar.css";
import {BiUserCircle, FiSearch, FiShoppingCart} from "react-icons/all";
import logo from "../../assets/images/logo.png"

export default function Navbar() {
    const showSettings = (event: Event) => {
        event.preventDefault();
    }

    return (
        <>
            <nav id="navigation" className="navbar">
                <a href="#"><FiSearch className="primary" size="1.5rem"/></a>

                <a href="#" className="active">Home</a>
                <a href="#">Shop</a>
                <a href="#">Collections</a>

                <div className="logo-container">
                    <img src={logo} alt="logo" width={50} height={57}/>
                    SuperMarket
                </div>

                <a href="#">Services</a>
                <a href="#">About Us</a>
                <a href="#">Contact Us</a>

                <a href="#"><FiShoppingCart className="primary" size="1.5rem"/></a>
                <a href="#"><BiUserCircle className="primary" size="1.5rem"/></a>
            </nav>
        </>
    );
}
