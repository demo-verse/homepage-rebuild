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
            A new human right: <br></br>standing equal on peace {"&"} trust
            making
          </h2>
          <div className="become-content">
            <div className="become-text-left">
              {/* {circles} */}
              <p>
                Everyone is free to be proactive, claim their equality and free
                will to act on peace and trust making; and be legitimate
                co-signer and sealer of a World Peace treaty, regardless of
                their entitlement, being official or not.
              </p>
              {/* <img src={aNewRight} alt="mobile" /> */}
            </div>
            <div className="become-text-right">
              <p>
                This human right, concept, perspective and notion shall be a
                canvas; on which our kind making Art of Peace, together.
              </p>{" "}
              <br></br>
              {/* <p>Feel welcomed and invited to bring your perspectives @ these efforts, and join naturally growing communities of peacemakers, to co-exist: </p>
							<br></br>
						<div className="community-links">
						@ {buttons[0]} {" "} 
							@ {buttons[1]} {" "}
							@ {buttons[2]}{" "}
							@ {buttons[3]}
						</div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Become;
