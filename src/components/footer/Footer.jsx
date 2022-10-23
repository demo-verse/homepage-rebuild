import {
  FaEnvelope,
  FaMapPin,
  FaTwitter,
  FaGithub,
  FaYoutube,
  FaSoundcloud,
  FaInstagram
} from "react-icons/fa";
import "./Footer.css";

function footer({ buttons }) {
  return (
    <div className="wrapper">
      <div className="footer">
        <div className="footer-top">
          <div className="logo">
         
          </div>
          {buttons[0]} {buttons[1]}
          <div className="social">
            <a href="https://twitter.com/demoversal" target="_blank" rel="noreferrer">
              <FaTwitter className="social-icon" />
            </a>
            <a href="https://instagram.com/demoversal" target="_blank" rel="noreferrer">
              <FaInstagram className="social-icon" />
            </a>
            <a href="https://www.youtube.com/channel/UCqtm34_hfBCSnFr03KgqUSg" target="_blank" rel="noreferrer">
              <FaYoutube className="social-icon" />
            </a>
            <a href="https://soundcloud.com/stateful-art" target="_blank" rel="noreferrer">
              <FaSoundcloud className="social-icon" />
            </a>
            <a href="https://github.com/demo-verse" target="_blank" rel="noreferrer">
              <FaGithub className="social-icon" />
            </a>

            {/* <FaLinkedinIn className="social-icon" /> */}
          </div>
        </div>
        <div className="footer-bottom">
          <div className="copyright">
            <p>
            <p>
              Nothing to copyright. We will help you to start a better World
              Peace project if you needed empowerment.  <br></br><br></br> Money can only catalyse peace. You are the power, who can make it real; peace can be easy, just like this.
            </p>
            <br></br> <br></br>
              Any acknowledgement through experiencing of this new human right to
              stand equal on peace {"&"} trust making, is somewhat a
              satisfactory gain for this project and its starters.
            </p>
            <br></br> <br></br>
            <p>
              What we will experience, a World Peace by Equality and Equity, in the 21st century, is
              priceless legacy, to live and leave. There is no question or
              hesitation on that, nor will be.
            </p>
            <a href="https://stateful.art" target={"_blank"} rel="noreferrer">
              by stateful.art
            </a>{" "}
            <br></br>
            <br></br>
            <div className="contacts">
              {/* <span>
              <FaPhoneAlt className="icon" />
              <span>+00 111 222 5555</span>
            </span> */}
              <span>
                <FaEnvelope className="icon" />
                <span>contact@stateful.art</span>
              </span>
              <span>
                <FaMapPin className="icon" />
                <span>( down to the ) Earth</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default footer;
