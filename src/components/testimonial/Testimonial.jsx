import "./Testimonial.css";
import { clientImages, clientReviews } from "./TestimonialData";
import { FaQuoteLeft } from "react-icons/fa";
import { useState } from "react";

function Testimonial({ design, circles, buttons }) {
  const [currentSlide] = useState(0);
  const [position] = useState(0);

  // const nextSlide = () => {
  //   if (currentSlide < clientReviews.length - 1) {
  //     setCurrentSlide((currentSlide) => currentSlide + 1);
  //     setPosition((position) => position - 100);
  //   }
  //   return currentSlide;
  // };

  // const prevSlide = () => {
  //   if (currentSlide > 0) {
  //     setCurrentSlide((currentSlide) => currentSlide - 1);
  //     setPosition((position) => position + 100);
  //   }
  //   return currentSlide;
  // };

  return (
    <div className="testimonial-bg">
      {design}
      <div className="wrapper">
        <div className="testimonial">
          {/* <h2>How does it feel, being equal on this matter?</h2> */}
          <h2>
            Generation Peace!<br></br> How would you imagine, express and make a
            a World Peace?
          </h2>
          <p>
            So far, this is how we have imagined, and proposed as a solution,{" "}
            <strong>a Flow of Peace</strong>; that evolved since January, while
            there was a brutal war out there, well you know about that already.
            <br></br>          <br></br>

          This project is our restoration, one that is peaceful and movemental.
          Now is the new future, and <strong> we are the power.</strong>
          
          </p>
          <br></br>
          
          <p>
            Historically, we have been observing this: parties opts-in and out
            of peace treaties; traditionally and naturally, by delegation or
            inheritance of power, have been the ones with highest capacity of
            violence; whether use that hard power in an offensive manner or not, or not even
           not use that, at all.
            <br></br>
            <br></br>
            However, the majority of citizens, worldwide, impacted by conflicts; have no
            direct impact, significant labor, hence any observable equity, nor
            legitimacy in the making and sustaining a World Peace, which could have been as well assured
            via its greatest level of participation and experience.
          </p>{" "}
          <br></br>
          <br></br>
          <p>
            We are highly motivated on changing this for real. Once, and for
            all. This should be tried. We'd like to start a process, where
            people are as powerful as their states, and expect a reflection,
            that is beyond a respect or all that.
            <br></br>
            <br></br>From now on, it'll be our states, that will receive respect
            from us, as they commit their intentions and deeds on peacemaking
            with other states in the world. We'll not that happen anymore.{" "}
          </p>
          <div className="testimonial-content">
            <div className="testimonial-design">
              {circles}
              <div className="testimonial-boxs">
                {clientImages?.slice(0, 4).map((client, index) => (
                  <div key={index} className="testimonial-box">
                    <img src={client.brand} alt="brands" />
                  </div>
                ))}
              </div>
            </div>
            <div className="testimonial-reviews">
              {clientReviews?.slice(0, 4).map((review, index) => (
                <div
                  key={index}
                  className={`testimonial-slide ${
                    currentSlide === index ? "active" : ""
                  }`}
                  style={{
                    left: `${position}%`,
                  }}
                >
                  <FaQuoteLeft className="testimonial-quote" />
                  <p className="quote-text">{review.text}</p>
                  <div className="author">
                    <h3>{review.name}</h3>
                    <small>
                      <em>{review.designation}</em>
                    </small>
                  </div>
                  {/* {index >= 0 && clientReviews.length - 1 !== index ? (
                    <FaArrowAltCircleLeft
                      className="quote-arrow left"
                      onClick={nextSlide}
                    />
                  ) : (
                    ""
                  )}
                  {index > 0 ? (
                    <FaArrowAltCircleRight
                      className="quote-arrow right"
                      onClick={prevSlide}
                    />
                  ) : (
                    ""
                  )} */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
