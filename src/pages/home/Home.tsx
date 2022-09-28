import React from "react";
import PromoBanner from "../../components/promo-banner/PromoBanner";
import Navbar from "../../components/navbar/Navbar";
import Banner from "../../components/banner/Banner";
import bannerImage from "../../assets/images/home_banner.png";

function Homepage() {
    return (
        <>
            <PromoBanner message="Free Shipping USA & Worldwide on All Orders"/>
            <Navbar/>
            <Banner image={bannerImage} background={"#ffc632"} title={"Pet food of supermarket"} />

            <h1>bla bla bla</h1>
            <h1>bla bla bla</h1>
            <h1>bla bla bla</h1>
            <h1>bla bla bla</h1>
            <h1>bla bla bla</h1>
            <h1>bla bla bla</h1>
            <h1>bla bla bla</h1>
            <h1>bla bla bla</h1>
            <h1>bla bla bla</h1>
            <h1>bla bla bla</h1>
            <h1>bla bla bla</h1>
            <h1>bla bla bla</h1>
            <h1>bla bla bla</h1>
            <h1>bla bla bla</h1>
        </>
    );
}

export default Homepage;