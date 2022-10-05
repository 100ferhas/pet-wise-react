import React from "react";
import "./Navbar.css";
import {BiUserCircle, FiMenu, FiSearch, FiShoppingCart} from "react-icons/all";
import logo from "../../assets/images/logo.png"

export default function Navbar() {
    return (
        <>
            <nav className="navbar">
                <a href="#"><FiSearch className="primary" size="1.5rem" /></a>

                <a href="#" className="active">Home</a>
                <a href="#">Shop</a>
                <a href="#">Collections</a>

                <a href="#" className="logo-container">
                    <img src={logo} alt="logo" width={50} height={57} />
                    SuperMarket
                </a>

                <a href="#">Services</a>
                <a href="#">About Us</a>
                <a href="#">Contact Us</a>

                <a href="#"><FiShoppingCart className="primary" size="1.5rem" /></a>
                <a href="#"><BiUserCircle className="primary" size="1.5rem" /></a>
            </nav>

            <nav className="navbar-mobile">

                <a href="#" className="logo-container">
                    <img src={logo} alt="logo" width={50} height={57} />
                    SuperMarket
                </a>

                <div className="nav-buttons">
                    <a href="#"><FiSearch size="2rem" /></a>
                    <a href="#"><FiShoppingCart size="2rem" /></a>
                    <a href="#"><FiMenu size="2rem" /></a>
                </div>
            </nav>
        </>
    );
}
