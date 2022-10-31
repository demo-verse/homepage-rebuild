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
            <br></br>
            <img
              src="https://i.imgur.com/mp0bo76.png"
              width={"100%"}
              alt="logo"
            ></img>
            <br></br>
            <br></br>
            <br></br>
            So far, this is how we have imagined, and proposed as a solution,{" "}
            <a
              href="https://miro.com/app/board/uXjVOX94E5k=/?share_link_id=267054985896"
              target={"_blank"}
              rel="noreferrer"
            >
              a Flow of Peace
            </a>{" "}
            ; that evolved since January, while there was a brutal war out
            there, well you know about that already.
            <br></br> <br></br>
            This project is our restoration, one that is peaceful and
            movemental. Now is the new future, and{" "}
            <strong> we are the power.</strong>
          </p>
          <br></br>
          <p>
            Historically, we have been observing this: parties opts-in and out
            of peace treaties; traditionally and naturally, by delegation or
            inheritance of power, have been the ones with highest capacity of
            violence; whether use that hard power in an offensive manner or not,
            or not even not use that, at all.
            <br></br>
            <br></br>
            However, the majority of citizens, worldwide, impacted by conflicts;
            have no direct impact, significant labor, hence any observable
            equity, nor legitimacy in the making and sustaining a World Peace,
            which could have been as well assured via its greatest level of
            participation and experience.
          </p>{" "}
          <br></br>
          <p>
            We'd like to change that status-quo and untie a historical knot;
            from now on, our states and people in executive power in governance,
            that will receive respect from us, as they express and commit their
            intentions and deeds on peacemaking with other states in the world.
            <br></br>
            <br></br>
            It is clear that, condemning an agressor, while undermining each
            other is the fallacy, if not mockery. However, it is certainly not a
            best practice. On that regard, we'd like to scale the non-perception
            of threat notion that members of European Union sharing.
            <br></br>
            <br></br>
            Ones expecting to grasp armament race, and prepare for another world war, or give reasons for potential agressors to invest their citizens' taxes for all that preparations;
            and endanger lives of people and all; <strong><i>we have found your lack of creativity, disturbing.</i></strong> .
            <br></br>
            <br></br>
            Expect <strong>Expressions of Demand</strong> and Demand-aware
            Framework we are about to introduce later this month, to catalyse
            this whole thing even more, effectively, with a political dimension. 
            <br></br>
            <br></br>
            There will be proactive electorship paradigm, for the 21st century, and people will be able to require peacemaking to go into political agendas and electoral promises of political parties, or declare a non-intest of voting for them. 
            <br></br>
            <br></br>
            That'll be one of those cool campaigns we'll start. Be ready.
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
