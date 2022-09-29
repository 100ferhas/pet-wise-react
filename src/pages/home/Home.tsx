import React, {useEffect, useState} from "react";
import "./Home.css";
import PromoBanner from "../../components/promo-banner/PromoBanner";
import Navbar from "../../components/navbar/Navbar";
import Banner from "../../components/banner/Banner";
import bannerImage from "../../assets/images/home/banner.png";
import Button from "../../components/button/Button";
import hearthDog from "../../assets/images/home/hearth_dog.png"
import {BiSupport, BsFillShieldLockFill, TbTruckDelivery} from "react-icons/all";
import CardIcon from "../../components/card-icon/CardIcon";
import CategoryService from "../../api/categories";
import {Category} from "../../api/models";
import {PropagateLoader} from "react-spinners";
import petcoLogo from "../../assets/images/home/petco_logo.png"
import petcoBanner from "../../assets/images/home/petco_banner.png"

function Homepage() {
    const [loadingCategories, setLoadingCategories] = useState<boolean>(true);
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        CategoryService.fetchTopCategories().then(data => {
            setCategories(data);
            setLoadingCategories(false);
        });
    }, []);

    return (
        <>
            <PromoBanner message="Free Shipping USA & Worldwide on All Orders"/>
            <Navbar/>
            <Banner image={bannerImage} background={"#ffc632"} title="Pet food of supermarket"
                    description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"
                    buttons={[<Button key="btn1" text="Shop Top" primary/>, <Button key="btn2" text="Shop Now"/>]}/>

            <section className="needs">
                <img src={hearthDog} alt="hearthDog" width={125} height={125}/>
                <h1 className="title">
                    <span className="primary">What your pet needs,</span>
                    <span> when they need it.</span>
                </h1>
                <div className="needs-row">
                    <CardIcon icon={BiSupport} color={"rgb(0, 34, 156, 0.1)"} title="24/7 Support"
                              description="Shop online to get orders over $35 shipped fast and free."/>
                    <CardIcon icon={TbTruckDelivery} color={"rgb(152, 80, 197, 0.25)"} title="Free Same-Day Delivery"
                              description="Order by 2pm local time to get free delivery on orders $35+ today."/>
                    <CardIcon icon={BsFillShieldLockFill} color={"rgb(172, 51, 51, 0.3)"} title="Security payment"
                              description="35% off your first order plus 5% off all future orders."/>
                </div>
            </section>

            <section className="categories">
                <h1 className="title">
                    <span className="primary">Top</span>
                    <span> Categories</span>
                </h1>
                <div className="categories-row">
                    <>
                        <PropagateLoader className="loader" loading={loadingCategories}/>
                        {
                            !loadingCategories && categories.length > 0 && categories.map(category => {
                                return <div className="category">
                                    <div className="category-img"
                                         style={{
                                             backgroundImage: `url(${category.image})`,
                                             backgroundColor: category.background
                                         }}/>
                                    <a href="#">
                                        <h3>{category.name}</h3>
                                    </a>
                                </div>
                            })
                        }

                        {
                            !loadingCategories && categories.length == 0 &&
                            <>Any category found!</>
                        }
                    </>
                </div>
            </section>

            <section className="petco">
                <div className="petco-content">
                    <img src={petcoLogo} alt="petco-logo"/>
                    <h3>Save big annually with our veterinarian recommended wellness plan.</h3>
                    <Button text="Shop Now" primary/>
                </div>
                <img src={petcoBanner} alt="petco-banner"/>
            </section>

            {/*<section className="best-sellers">*/}
            {/*    <h1 className="title">*/}
            {/*        <span className="primary">Best</span>*/}
            {/*        <span>Seller</span>*/}
            {/*    </h1>*/}
            {/*</section>*/}

            <br/><br/><br/><br/>
        </>
    );
}

export default Homepage;