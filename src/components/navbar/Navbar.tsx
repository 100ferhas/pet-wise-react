import React from "react";
import "./Navbar.css"
import logo from "../../assets/images/logo.png"
import {FiSearch, BiUserCircle, FiShoppingCart} from "react-icons/all";

function Navbar() {
    return (
        <div className="navbar">
            <FiSearch className="primary" size="1.5rem"/>

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

            <FiShoppingCart className="primary" size="1.5rem"/>
            <BiUserCircle className="primary" size="1.5rem"/>
        </div>
    );
}

export default Navbar;