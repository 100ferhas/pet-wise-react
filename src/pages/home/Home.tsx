import React from "react";
import "./Home.css";
import PromoBanner from "../../components/promo-banner/PromoBanner";
import Navbar from "../../components/navbar/Navbar";
import Banner from "../../components/banner/Banner";
import bannerImage from "../../assets/images/home/banner.png";
import Button from "../../components/button/Button";
import hearthDog from "../../assets/images/home/hearth_dog.png"

function Homepage() {
    return (
        <>
            <PromoBanner message="Free Shipping USA & Worldwide on All Orders" />
            <Navbar />
            <Banner image={bannerImage} background={"#ffc632"} title="Pet food of supermarket"
                description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"
                buttons={[< Button text="Shop Top" primary />, <Button text="Shop Now" />]} />

            <section className="needs">
                <img src={hearthDog} alt="hearthDog" width={125} height={125} />
                <h1>
                    <span className="primary">What your pet needs,</span>
                    <span> when they need it.</span>
                </h1>
                <div className="needs-row">
                    <div className="need">
                        <h3>24/7 Support</h3>
                        <span>Shop online to get orders over $35 shipped fast and free.</span>
                    </div>

                    <div className="need">
                        <h3>Free Same-Day Delivery</h3>
                        <span>Order by 2pm local time to get free delivery on orders $35+ today.</span>
                    </div>

                    <div className="need">
                        <h3>Security payment</h3>
                        <span>35% off your first order plus 5% off all future orders.</span>
                    </div>
                </div>
            </section>

            <section className="categories">
                <h1>
                    <span className="primary">Top</span>
                    <span> Categories</span>
                </h1>
                <div className="">

                </div>
            </section>
        </>
    );
}

export default Homepage;