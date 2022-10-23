import './Become.css';
import aNewRight from '../../images/our_right_to_make_peace_and_trust.png';
import { forwardRef } from 'react';

const Become = forwardRef(({ buttons, design, circles }, ref) => {
	return (
		<div className="become-bg">
			{design}
			<div className="wrapper">
				<div className="become" id="become" ref={ref}>
					<h2>A new human right: <br></br>standing equal on peace {"&"} trust making</h2>
					<div className="become-content">
						<div className="become-design">
							{/* {circles} */}
							<div className="become-box">
								<img src={aNewRight} alt="mobile" />
							</div>
						</div>
						<div className="become-text">
							<p>
							This human right, concept, perspective and notion shall be a canvas; on which our kind making Art of Peace, together. 
							</p>
							<p>Feel invited to the new <strong>communities of peacemakers.</strong> </p>
							{/* <p>Gets rating from clients and level up to get more booking.</p> */}
							
						<div className="community-links">
						@ {buttons[0]} {" "} <br></br><br></br>
							@ {buttons[1]} {" "}<br></br><br></br>
							@ {buttons[2]}{" "}<br></br><br></br>
							@ {buttons[3]}<br></br><br></br>
						</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
});

export default Become;
