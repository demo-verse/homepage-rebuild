import './Services.css';
import { forwardRef } from 'react';
import { services } from './ServicesData';

const Services = forwardRef(({ button }, ref) => {
	return (
		<div className="wrapper">
			<div className="services" id="services" ref={ref}>
				<h2>Equality and equity based peacemaking, on blockchain</h2>
				<br></br>
				<p>
          Here we are highly motivated on imagining and laying the open sourced
          and minded foundations of a decentralised diplomacy paradigm, backed by an equality and equity based, new human right {" "}
          <strong></strong> and its economy.
        </p>
<br></br>
		<p>
          Trust that, experiencing an observable, undeniable and
          unstoppable, World Peace <strong>is possible with your actions </strong> through understanding, kindness and generosity..{" "}
        </p>
		<br></br>

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
				<div className="signup">{button}</div>
			</div>
		</div>
	);
});

export default Services;
