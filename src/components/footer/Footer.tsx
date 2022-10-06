import "./Footer.css"
import React from "react";
import Input from "../input/Input";
import paymentsImg from "../../assets/images/footer/payments.png";
import logoRev from "../../assets/images/logo_rev.png";
import mail from "../../assets/images/footer/mail.png";
import facebook from "../../assets/images/footer/facebook.png";
import pinterest from "../../assets/images/footer/pinterest.png";
import instagram from "../../assets/images/footer/instagram.png";

function Footer() {
    return (
        <footer>
            <div className="links">
                <a href="#" className="logo hidden-md">
                    <img src={logoRev} alt="logo_rev" width={50} height={57}/>
                    <h3 className="no-margin-top">SuperMarket</h3>
                    <small>
                        4517 Washington Ave. <br/>
                        Manchester, Kentucky 39495
                    </small>
                </a>
                <div>
                    <h2>Corporate</h2>
                    <a href="#">Careers</a>
                    <a href="#">About Us</a>
                    <a href="#">Contact Us</a>
                    <a href="#">FAQs</a>
                    <a href="#">Vendors</a>
                </div>
                <div>
                    <h2>Information</h2>
                    <a href="#">Online Store</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Refund Policy</a>
                    <a href="#">Shipping</a>
                    <a href="#">Policy</a>
                </div>
                <div>
                    <h2>Services</h2>
                    <a href="#">Grooming</a>
                    <a href="#">Positive Dog Training</a>
                    <a href="#">Veterinary Services</a>
                </div>
                <div>
                    <h2>Newsletter</h2>
                    <span>Be the first to know about our new collection launches, special offers & other updates.</span>
                    <Input className="rev" placeholder="Enter your email..." background={mail} />
                    <div className="social">
                        <a href="#">
                            <img src={facebook} alt="facebook" />
                        </a>
                        <a href="#">
                            <img src={instagram} alt="instagram" />
                        </a>
                        <a href="#">
                            <img src={pinterest} alt="pinterest" />
                        </a>
                    </div>
                </div>
                <a href="#" className="logo hidden-lg">
                    <img src={logoRev} alt="logo_rev" width={50} height={57}/>
                    <h3 className="no-margin-top">SuperMarket</h3>
                    <small>
                        4517 Washington Ave. <br/>
                        Manchester, Kentucky 39495
                    </small>
                </a>
            </div>
            <div className="payments">
                <img src={paymentsImg} alt="payments"/>
            </div>
        </footer>
    );
}

export default Footer;
