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
            World Peace?
          </h2>
          <p className="gen-peace">
            This project is our restoration, one that is{" "}
            <strong> peaceful</strong> and movemental.
            <br></br>
            <br></br>
            Here, we are introducing a new human right, and starting a
            progressive decentralization and peace-orientation in diplomacy;
            along with a demand-aware, proactive electorship paradigm, for the
            21st century.
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
            ; which evolved since January, while there was a brutal war out
            there, well you know about that already.
             <br></br> <br></br>

             Hereby, as a booster for a decentralization in diplomacy, recently
          initiated the{" "}
          <a
            href="https://expressionsofdemand.org/"
            target={"_blank"}
            rel="noreferrer"
          >
            {" "}
            Expressions of Demand,
          </a>{" "}
          and that started with a full focus on the Proactive Electorship theory
          we'd like to gift to our kind and the rest.
          <br></br><br></br>
            {/* <div style={{ background: "black" }}>
              <div style={{ padding: "22px" }}>
                <iframe
                  title="Imagination canvas"
                  width="100%"
                  height="540"
                  src="https://miro.com/app/live-embed/uXjVOX94E5k=/?moveToViewport=-684614,378837,440785,230034&embedId=985083596001"
                  frameBorder="0"
                  scrolling="no"
                  allowFullScreen
                ></iframe>
              </div>
            </div> */}
          
            This is how and what it feels like for peacemakers making this movement something real, who have so far
            encouraged, empowered and most importantly, experienced this
            egalitarian, state of the art notions and efforts, with their
            peaceful, wise and free beings:
          </p>
          <br></br>
          <div className="testimonial-content">
            <div className="testimonial-design">
              {circles}
              <div className="testimonial-boxs">
                
                {clientImages
                  ?.slice(0, clientImages.length)
                  .map((client, index) => (
                    <div key={index} className="testimonial-box">
                      <img src={client.brand} alt="brands" />
                    </div>
                  ))}
              </div>
            </div>
            <div className="testimonial-reviews">
              {clientReviews
                ?.slice(0, clientImages.length)
                .map((review, index) => (
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
          <br></br>
          <h2>Reasonings, critiques and hopes</h2>
          <p>
            Historically, we have been observing this: parties opts-in and out
            of peace treaties; traditionally and naturally, by delegation or
            inheritance of power, have been the ones with highest capacity of
            violence; whether use that hard power in an offensive manner or not,
            or not even use that, at all.
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
            shall be prepared for receiving respect from us, as they express and
            commit their intentions and deeds on peacemaking with other states
            in the world. Of course, cautiously, with conditionals, so their
            reflections would not jeopardize security in the first place.
            <br></br>
            <br></br>
            While condemning an agressor, undermining each other is a fallacy.
            On that regard, we'd like to implement whatever it takes, to remove
            the perception of threat between any states in the world, something
            like the member countries of the European Union, and their citizens
            experiencing since decades. We need to scale that notion of EU to a
            global level.
            <br></br>
            <br></br>A peaceful unity is what that is: a border and threat free,
            space-time, assured by intentions and deeds.
            <br></br> <br></br>
            On the other hand, peace is something to experience and sustain
            without the risk of political opt-outs.
            <br></br>
            It is a universal and unconditional basic experience, cannot be
            limited within alliances, nor become luxury.
            <br></br> <br></br>
            So, secure all, equally. Peace and security is quite together,
            however, what we want is to separate violence and power.
            {/* checkitout later */}
            {/* <br></br> <br></br>
            Ones expecting to benefit from armament races, polarisation, and in
            a strong belief in sustaining security and cooperation through hard
            power and trade mostly and maybe only;
            <strong>
              <i>
                we have found your lack of creativity and wisdom, disturbing..
              </i>
            </strong>
            <br></br>
            <br></br>
            First make peace between each other, then the impact will be way
            more than any resolutions that became symbolic.
            <br></br>
            <br></br>
            That's why, a mutual assured regeneration, by citizens/world
            residents to all, will begin just like this, on web3/blockcain. So
            it is undeniable and cannot be altered or destroyed.
            <br></br>
            <br></br>Hereby, expect <strong>Expressions of Demand</strong> and
            Demand-aware Framework we are about to introduce later this month;
            to catalyse this whole peaceful flow even more effectively, with a
            political dimension intended to be brought into the scene.
            <br></br>
            <br></br>
            We are imagining a proactive electorship paradigm, where people are able to require peacemaking with all other
            countries from the politicians and parties of their choice; and demand
            that policies being included in future political agendas and electoral promises, reflecting the common will at the
            intentions and then in deeds. <strong>Otherwise</strong> , people would express a non-intest for voting for those parties proactively,
            before elections.
            <br></br>
            <br></br>
            Expressions of Demand will most probably part of/attached to
            Expressions of Peace, on a setting level or per expression,
            optionally.
            
            <br></br>
            <br></br>  
            It is to be a future-manifesting, opinionated era of electorship/voting.
            <br></br>
            <br></br>
            That'll be one of those cool campaigns we'll start. Be ready. */}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
