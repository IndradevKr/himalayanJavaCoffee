import React from "react";
import "./style.css";
import images from "./resources/images";

function Footer(){
    return (
        <footer id="footer" className="footer">
            <div className="logo-container">
                <img src={images.footerLogo} alt="footer-logo" className="footer-logo" />
            </div>
            <div className="address">
                <p>Tridevi Marg, Thamel Kathmandu, Nepal</p>
                <p>info@himalayanjava.com</p>
                <p>+977-[0]1-4422519</p>
                <div className="social-icon">
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"> <img src={images.facebookLogo} alt="facebook-logo" /> </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"> <img src={images.instaLogo} alt="instagram-logo" /> </a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"> <img src={images.twitterLogo} alt="twitter-logo" /> </a>
                </div>
                <div className="beans-position">
                    <img src={images.coffeeBean1} alt="coffee-bean" className="top-corner-bean"/>
                    <img src={images.coffeeBean2} alt="coffee-bean" className="logo-aside-bean"/>
                    <img src={images.coffeeBean3} alt="coffee-bean" className="bottom-right-bean"/>
                    <img src={images.coffeeBean4} alt="coffee-bean" className="middle-right-bean"/>
                    <img src={images.coffeeBean5} alt="coffee-bean" className="bottom-left-bean"/>
                </div>
            </div>
        </footer>
    )
}
export default Footer;