import React from "react";
import images from "./resources/images";
import instaImage from "./InstaImages";

function SocialContent(){
    return(
        <section id="social-content">
            <div className="social-container">
            <div className="hashed-description">
                <h2>#javanepal</h2>
                <p>Liked Our Coffee? Share your moments with us. Follow us on Instagram.</p>
            </div>
            <div className="instaImage-container">
            { instaImage.map( images => {
                return(
                    <div className="insta-images">
                        <img src={images.image} alt="instagram" />
                    </div>
                )
            }) }
            </div>
            <div className="bean">
                <img src={images.coffeeBean} alt="coffee-bean" className="social-section-bean" />
            </div>
            </div>
        </section>
    )
}
export default SocialContent;