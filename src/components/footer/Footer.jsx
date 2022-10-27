import {
  FaEnvelope,
  FaMapPin,
  FaTwitter,
  FaGithub,
  FaYoutube,
  FaSoundcloud,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";
import "./Footer.css";

function footer({ buttons }) {
  return (
    <div className="wrapper">
      <div className="footer">
        <div className="footer-top">
          <div className="logo"></div>
          {/* {buttons[0]} {buttons[1]} */}
        </div>
        <div className="footer-bottom">
          <div className="copyright">
            <p>
              Nothing to copyright.{" "}
              <strong>
                {"|> "} all rights acknowledged {"<|"}
              </strong>
              <br></br> <br></br>
              We will help you to start a World Peace project if you needed
              empowerment. This is our mission.
              <br></br>
              <br></br>Money can only catalyse peace. You are the power, who can
              make it real, just like this.
            </p>
            <p>
              Experiencing of this new human right and stand equal on peace{" "}
              {"&"} trust making, is somewhat a satisfactory gain for this
              project and its starters.
            </p>
            <br></br>
            <p>
              What we will experience; a World Peace by Equality and Equity, in
              the 21st century, is priceless legacy, to live and leave.
              <br></br>
              There is no question or hesitation on that, nor will be.
              <br></br> <br></br>
              Expect the Peace by equality and equity, and Mutual assured
              regeneration, being articulated on the{" "}
              <a
                href="https://en.wikipedia.org/wiki/World_peace"
                target={"_blank"}
                rel="noreferrer"
              >
                wikipage of World Peace
              </a>{" "}
              later this year, having their places, somewhere between the World
              Peace theories, Mutual assured destruction and Peace through
              strength.
              <br></br> <br></br>
              yes, we've both introduced an anti-thesis to a 20st centurty thesis, and the synthesis that brought that new human right definition together.

              and all that happened naturally, while there was a war out there, <strong>we have just felt a level of awareness and intellectual responsibility</strong>, that's all.
             <br></br>             <br></br>
             <strong> history shall record that, as well.</strong>
            </p>
            <br></br>
            <br></br>
            <a href="https://stateful.art" target={"_blank"} rel="noreferrer">
              initiated by stateful.art | start
            </a>{" "}
            , back in Jan/Feb 2022. <br></br>
            <br></br> ~ nearly just before, a war in Ukraine have started. and
            since then, <br></br> we are dealing with our feeling of urgency on
            this, <br></br> with no financial resource offered/received up to
            this date.
            <br></br>            <br></br>

            <strong>that{"'"}s our story.</strong>
            <br></br>
            <br></br>
            <div className="contacts">
              <span>
                <FaEnvelope className="icon" />
                <span>contact@stateful.art</span>
              </span>
              <span>
                <FaMapPin className="icon" />
                <span>{"{down to the}"} Earth</span>
              </span>

              <div className="social">
                <a
                  href="https://miro.com/app/board/uXjVOX94E5k=/?share_link_id=267054985896"
                  target="_blank"
                  rel="noreferrer"
                >
                  {"|> imagination <|"}
                </a>
                <a
                  href="https://discord.gg/sqjdyCWNAR"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaDiscord className="social-icon" />
                </a>
                <a
                  href="https://github.com/demo-verse"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub className="social-icon" />
                </a>
                <a
                  href="https://twitter.com/demoversal"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTwitter className="social-icon" />
                </a>
                <a
                  href="https://instagram.com/demoversal"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram className="social-icon" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCqtm34_hfBCSnFr03KgqUSg"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaYoutube className="social-icon" />
                </a>
                <a
                  href="https://soundcloud.com/stateful-art"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaSoundcloud className="social-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default footer;
