import "./Become.css";
// import aNewRight from "../../images/our_right_to_make_peace_and_trust.png";
import { forwardRef } from "react";

const Become = forwardRef(({ buttons, design, circles }, ref) => {
  return (
    <div className="become-bg">
      {design}
      <div className="wrapper">
        <div className="become" id="become" ref={ref}>
          <h2>
            A new human right has born: <br></br>It{"'"}s all about standing
            equal on peace {"&"} trust making
          </h2>
          <div className="become-content">
            <div className="become-text-left">
              <p>
                "Everyone is free to be proactive, claim their equality and free
                will to act on peace and trust making; and be legitimate
                co-signer and sealer of a World Peace treaty, regardless of
                their entitlement, being official or not".
              </p>
              <br></br>
              <p>
                This human right, concept, perspective and notion shall be a
                canvas; on which our kind making Art of Peace, together.
              </p>
              <div className="become-text-right">
                <div className="community-links">
                  <p>
                    Hey there, peacemaker! <br></br> start, a world peace ~ express yourself!
                    <br></br><br></br>Feel welcomed {"&"} invited to bring your perspective and empowered being, 
                    <br></br>to, initially those co-existing communities of your choice:
                     :{" "}
                  </p>

                  @ {buttons[0]} @ {buttons[1]} @ {buttons[2]} @ {buttons[3]}
                </div>
                <br></br>

                <h2>Why blockchain, for a World Peace?</h2>
                <div>
                  <p>
                    So far, this project been developed in a design-thinking
                    process, and we've welcomed and discovered new perspectives
                    and imagined better; as we were building a proof of concept,
                    a peacemaker app on a blockchain test network:{" "}
                    <a
                      href="https://expressionsofpeace.org"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Expressions of Peace.{" "}
                    </a>
                  </p>
                  <p>
                    We've so far focused using the context-aware capacity of
                    this decentralised ledger technology.
                    <br></br>
                    <br></br>
                    In the proof of concept, peacemaker (decentralised) app,
                    accessible on expressionsofpeace.org.
                    <br></br>
                    <br></br>@ our{" "}
                    <a
                      href="https://www.youtube.com/channel/UCqtm34_hfBCSnFr03KgqUSg"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Youtube channel
                    </a>{" "}
                    , you can see the making of{" "}
                    <a
                      href="https://www.youtube.com/watch?v=SaqKac-3ncM"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Expressions{" "}
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://www.youtube.com/watch?v=Z_9rQ6zqh1Q"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Acknowledgements
                    </a>{" "}
                    of Peace in action. Also have a look and read their smart
                    contract code, using a simple data struct with the initial,
                    contextual attributes that people provide and write on
                    blockchain, with their interactions.
                  </p>

                  <p>
                    <strong>As Generation Peace, </strong>
                    the multi-generation of this era, the stage is ours now. All
                    we need is to accumulate common sense, will and intentions,
                    and make them observable, via persisting them transparently
                    and resiliently.
                    <br></br>
                    <br></br>
                    That{"'"}s why, blockchain has been the first tool we're
                    using for this purpose. <br></br> Also we humbly want to
                    start something we call, Peace Economy.
                  </p>
                </div>
              </div>
              {/* <img src={aNewRight} alt="mobile" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Become;
