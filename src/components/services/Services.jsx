import './Services.css';
import { forwardRef } from 'react';
import { services } from './ServicesData';

const Services = forwardRef(({ button }, ref) => {
	return (
		<div className="wrapper">
			<div className="services" id="services" ref={ref}>
				<h2>Equality {"&"} equity based peace {"&"} trust making, on blockchain</h2>
				<br></br>
				<p>
          Here we are highly motivated on starting the open sourced
          and minded foundations of a decentralised diplomacy paradigm and its economy.{" "}
        </p>
<br></br>
		<p>
          Experiencing an observable World Peace <strong>is possible with your actions </strong> through understanding, kindness and generosity in giving out that assurance to the rest, as sovereign, world residents.{" "}
        </p>
		<br></br><br></br><br></br>
		<h2>Circles of Peace for + Impact</h2>
<p>
Good news: as we use our right on being equal on peace and trust making, and express & acknowledge that for one another explicitly, we are somehow, already fulfilling UN Sustainable Development Goals 10, 16 and 17, before moving into the Circles for Impact.
</p>

<br></br>
		<div className="signup">{button}</div>
<br></br><br></br>
				<div className="service-design">
					<span className="dot"></span>
					<span className="dot"></span>
					<span className="dot"></span>
				</div>
				<div className="services-content">
					{services?.slice(0, 3).map((service, index) => (
						<div key={index} className="service-item">
							<div className="service-icon">
								<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
									{service.svg}
								</svg>
								<img src={service.icon} alt="icon" />
							</div>
							<div className="service-text">
								<p>{service.text}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
});

export default Services;
