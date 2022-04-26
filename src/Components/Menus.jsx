import React from "react";
import images from "./resources/images";
import {drinks, popularChoice, newItems} from './MenuData';

function Menus(){

    let slideIndex = 1;
    function currentSlide(n){
        showSlides( (slideIndex = n) );
    }
    function showSlides(n){
        let i;
        let slides = document.getElementsByClassName('slides');
        let dots = document.getElementsByClassName("dot");
        if(n > slides.length){
            slideIndex = 1;
        }
        if(n < 1){
            slideIndex = slides.length;
        }
        for (i=0; i < slides.length; i++){
            slides[i].style.display= "none";
        }
        for (i = 0; i < dots.length; i++){
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }
    React.useEffect( () => {
        showSlides(slideIndex);
    }, [] );

    return(
        <section id="menu-section">
            <div className="grid">
            <div className="grid-left">
                <img src={images.crossaintImage} alt="crossaint" id="crossaintImage" />
                <img src={images.cupImage} alt="cup" id="cupImage" />
                <img src={images.coffeeImage} alt="coffee" id="coffeeImage" />
            </div>
            
            <div className="grid-right">
            <div id="sack-image">
                <img src={images.sackImage} alt="coffee-sack" id="sack" />
            </div>

            <div className="slideshow-container">
                <div className="category slides fade">
                    <div className="category-name">
                        <h2>DRINKS</h2>
                    </div>

                    {
                        drinks.map( (menu, index) => {
                            return(
                                index <  4 &&
                            <div className="menu-item">
                                <h3 className="menu-title">{menu.menuTitle}</h3>
                                <h3 className="menu-price">{menu.menuPrice}</h3>
                                <p className="menu-description">{menu.menuDesc}</p>
                            </div>
                                
                            )
                        })
                    }

                    <button className="menus-button">View Full Menu</button>
                </div>

                <div className="category slides fade">
                <div className="category-name">
                    <h2>POPULAR CHOICE</h2>
                </div>

                {
                    popularChoice.map( (menu, index) => {
                        return(
                            index < 4 &&
                        <div className="menu-item">
                            <h3 className="menu-title">{menu.menuTitle}</h3>
                            <h3 className="menu-price">{menu.menuPrice}</h3>
                            <p className="menu-description">{menu.menuDesc}</p>
                        </div>
                        )
                    })
                }

                <button className="menus-button">View Full Menu</button>
                </div>

                <div className="category slides fade">
                <div className="category-name">
                    <h2>New Items</h2>
                </div>

                {
                    newItems.map( (menu, index) => {
                        return(
                            index < 4 &&
                        <div className="menu-item">
                            <h3 className="menu-title">{menu.menuTitle}</h3>
                            <h3 className="menu-price">{menu.menuPrice}</h3>
                            <p className="menu-description">{menu.menuDesc}</p>
                        </div>
                        )
                    })
                }

                <button className="menus-button">View Full Menu</button>
                </div>
            </div>


            </div>
            </div>
            <div className="carousel-nav">
                <span className="dot" onClick={ () => currentSlide(1)}></span>
                <span className="dot" onClick={ () => currentSlide(2)}></span>
                <span className="dot" onClick={() => currentSlide(3)}></span>
            </div>
        </section>
    )
}
export default Menus;