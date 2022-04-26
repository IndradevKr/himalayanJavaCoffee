import React from "react";
import images from "./resources/images";


function Testimonials() {

  return (
    <section id="testimonials-section">
      <h3 className="section-title">Feel the vibe of our customers</h3>
      <div className="testimonials-container">
        <div className="frame">
          <div className="card">
            <div className="testimonial-frame">
              <img
                src={images.quoteImage}
                alt="quote"
                className="quote-image"
              />
            </div>
          </div>
        </div>
        
        <div className="testimonials-content">
        <div className="card-container">           
                <div className="testimonials-card">
              <div className="comment">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
                  error alias vero quas distinctio amet itaque delectus
                  reprehenderit mollitia ullam at ipsam laboriosam, laborum
                  consequuntur quasi non voluptatem, nihil nam.
                </p>
              </div>
              <div className="client-details">
                <span className="client-image">
                  <img src={images.client1} alt="client" className="client" />
                </span>
                <span className="client-name">
                  <h3>Jane Doe</h3>
                </span>
              </div>
                </div>

                <div className="testimonials-card">
              <div className="comment">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
                  error alias vero quas distinctio amet itaque delectus
                  reprehenderit mollitia ullam at ipsam laboriosam, laborum
                  consequuntur quasi non voluptatem, nihil nam.
                </p>
              </div>
              <div className="client-details">
                {" "}
                <span className="client-image">
                  <img src={images.client2} alt="client" className="client" />
                </span>
                <span className="client-name">
                  <h3>Jane Doe</h3>
                </span>
              </div>
                </div>

                <div className="testimonials-card">
              <div className="comment">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
                  error alias vero quas distinctio amet itaque delectus
                  reprehenderit mollitia ullam at ipsam laboriosam, laborum
                  consequuntur quasi non voluptatem, nihil nam.
                </p>
              </div>
              <div className="client-details">
                <span className="client-image">
                  <img src={images.client3} alt="client" className="client" />
                </span>
                <span className="client-name">
                  <h3>John Doe</h3>
                </span>
              </div>
                </div>
                
            </div>
          </div>
        
      </div>
    </section>
  );
}
export default Testimonials;
