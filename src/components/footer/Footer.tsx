import "./Footer.css"
import React from "react";
import paymentsImg from "../../assets/images/footer/payments.png"

function Footer() {
    return (
        <footer>
            <div>
                links
            </div>
            <div className="payments">
                <img src={paymentsImg} alt="payments" />
            </div>
        </footer>
    );
}

export default Footer;
