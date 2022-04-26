import React from "react";

function Services(props){
    return(
        <section id="service-section">
            <h2 className="section-title">SERVICES</h2>
            <div className="service-container">

               <div className="service-item-container">
                <div className="services-item-container-1">


                    <div className="service-item service-1">
                        <div className="service-image"> <img src={props.item[0].image} alt="service-1" /></div>
                        <h3 className="service-title">{props.item[0].title}</h3>
                        <p className="service-description">{props.item[0].desc}</p>
                    </div>

                    <div className="service-item service-2">
                        <div className="service-image"> <img src={props.item[1].image} alt="service-2" /></div>
                        <h3 className="service-title">{props.item[1].title}</h3>
                        <p className="service-description">{props.item[1].desc}</p>
                    </div>

                    <div className="service-item service-3">
                        <div className="service-image"> <img src={props.item[2].image} alt="service-3" /></div>
                        <h3 className="service-title">{props.item[2].title}</h3>
                        <p className="service-description">{props.item[2].desc}</p>
                    </div>
                </div>    

                <div className="service-item-container-2">   
                    <div className="service-item service-4">
                        <div className="service-image"> <img src={props.item[3].image} alt="service-4" /></div>
                        <h3 className="service-title">{props.item[3].title}</h3>
                        <p className="service-description">{props.item[3].desc}</p>
                    </div>

                    <div className="service-item service-5">
                        <div className="service-image"> <img src={props.item[4].image} alt="service-5" /></div>
                        <h3 className="service-title">{props.item[4].title}</h3>
                        <p className="service-description">{props.item[4].desc}</p>
                    </div>
                
                </div>
            </div>
            </div>
        </section>
    )
}
export default Services;