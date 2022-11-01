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
              Nothing to copyright. <br></br>
              <strong>
                however, intellectual rights, humbly self-acknowledged,
                <br></br>
                would be even cooler if we haven't mentioned at all.
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
              the 21st century, is a priceless legacy, to live and leave.
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
              later this year, and having their places there, somewhere between
              the World Peace theories,{" "}
              <a
                href="https://en.wikipedia.org/wiki/Mutual_assured_destruction"
                target={"_blank"}
                rel="noreferrer"
              >
                Mutual assured destruction
              </a>{" "}
              and{" "}
              <a
                href="https://en.wikipedia.org/wiki/Peace_through_strength"
                target={"_blank"}
                rel="noreferrer"
              >
                Peace through strength.
              </a>{" "}
              <br></br> <br></br>
              Yes, we've both introduced an anti-thesis to a 20st centurty
              thesis via negating that; and the synthesis, Peace by/through
              equality and equity, which brought a new human right to life
              <br></br>
              <br></br>
              And all that happened naturally, while there was a war out there,{" "}
              we have just felt{" "}
              <strong>
                the least level of awareness and the highest level of
                intellectual responsibility required to start this
              </strong>{" "}
              and take action in our sincere, egalitarian way.
            </p>
            <br></br>~~~~~~~~~~~~~~~
            <br></br>
            <br></br> This whole concept and perspective began, nearly just
            before the war in Ukraine have started.
            <br></br>
            <br></br>
            Back then we were in a{" "}
            <a href="https://sovereignnature.com/winter-2022-hackathon-challenge" target={"_blank"} rel="noreferrer">
              hackathon by Sovereign Nature Initiative and De Ceuvel
            </a>{" "}
            , to give nature voice and build a high level of consensus, including
            many livings in urban scenes.
            <br></br>
            <br></br>
            You may want to have a look at our initial effort there, {" "}
            <a href="https://github.com/ent-dao/ent-portals" target={"_blank"} rel="noreferrer">
            Portals of EntDAO
            </a>{" "}
            , as it is raw, and still dormant at its imagination phase, since February 5-6 2022. EntDAO, with its liquid democracy and scientific data and ruleset integrations in pollution offset decision making, will
            also be part of the umbrella project,{" "}
            <a href="https://demover.se" target={"_blank"} rel="noreferrer">
              demoVerse
            </a>{" "}
            which has been coined as{" "}
            <strong>"a metaverse for democracy/demonstrations".</strong>
            <br></br> <br></br>~~~~~~~~~~~~~~~ <br></br>
            initiated by{" "}
            <a href="https://stateful.art" target={"_blank"} rel="noreferrer">
              stateful.art | start
            </a>{" "}
            since then, we are dealing with our expressed feeling of urgency on
            this, <br></br> with no financial resource offered/received up to
            this date.
            <br></br>
            that's all, folks..
            <strong>that{"'"}s our story.</strong>
            <br></br>
            <strong> the history shall record this, as well.</strong>
            <br></br>
            <br></br>
            <img
              src="https://expressionsofpeace.org/YinYang.png"
              width={"62px"}
              alt="logo"
            ></img>
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
