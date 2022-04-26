import React from "react";
import "./style.css";
import images from "./resources/images";

function Header(){
    const [isMobile, setIsMobile] = React.useState(false);

    return (
        <header className="header">
        <div className="header-container">
            <div className="brand-logo">
            <img src={images.logo} alt="brand-logo" />
            </div>
            <nav className="navbar">
            <div className= "nav-menu">
                <ul className={isMobile? "nav__lists nav__list__mobile" : "nav__lists"}>
                    <li className="nav-item"> <a href="#menu-section" className="nav__menu">Menu</a> </li>
                    <li className="nav-item"> <a href="#service-section" className="nav__menu">Services</a> </li>
                    <li className="nav-item"> <a href="#testimonials-section" className="nav__menu">About Us</a> </li>
                    <li className="nav-item"> <a href="#find-section" className="nav__menu">Locations</a> </li>
                    <li className="nav-item"> <a href="#social-content" className="nav__menu">Franchise</a> </li>
                    <li className="nav-item"> <a href="#footer" className="nav__menu">Contact Us</a> </li>
                </ul>
            </div>
            <div className="mobile-menu-mode">
                <button className="hamburger-icon" onClick={()=> setIsMobile(!isMobile)}>
                {isMobile ? <i className="fa-solid fa-x" style={ {fontSize: '2rem',border: 'none', backgroundColor: 'rgb(249, 249, 255)',}}></i> : <i className="fa-solid fa-bars"></i>} 
                </button>
            </div>
            </nav>
        </div>
    </header>
    )
}

export default Header;