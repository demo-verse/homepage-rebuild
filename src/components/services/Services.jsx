import "./Services.css";
import { forwardRef } from "react";
import { services } from "./ServicesData";

const Services = forwardRef(({ button }, ref) => {
  return (
    <div className="wrapper">
      <div className="services" id="services" ref={ref}>
        <h2>
          Equality {"&"} equity based peace {"&"} trust making, on blockchain
        </h2>
        <br></br>
        <p>
          Here we are highly motivated on starting the open sourced and minded
          foundations of a decentralised diplomacy paradigm and its economy.{" "}
        </p>
        <br></br>
        <p>
          Experiencing an observable World Peace{" "}
          <strong>is possible with your actions </strong> through understanding,
          kindness and generosity in giving out that assurance to the rest, as
          sovereign, world residents.{" "}
        </p>
        <br></br>
        <br></br>
        <br></br>
        <h2>Circles of Peace for + Impact</h2>
        <p>
          As we use our right on being equal on peace and trust
          making, and express & acknowledge that for one another explicitly, we
          are already taking the least action required, to collaborate on the {""}
          <a href="https://sdgs.un.org/" target={"_blank"} rel="noreferrer">
            United Nations Sustainable Development Goals
          </a>{" "}
          <a
            href="https://sdgs.un.org/goals/goal10"
            target={"_blank"}
            rel="noreferrer"
          >
            #10
          </a>
          ,{" "}
          <a
            href="https://sdgs.un.org/goals/goal16"
            target={"_blank"}
            rel="noreferrer"
          >
            #16
          </a>{" "}
          and {" "}
          <a
            href="https://sdgs.un.org/goals/goal16"
            target={"_blank"}
            rel="noreferrer"
          >
            #17
          </a>{" "}
          before invited to the Circles for Impact.
        </p>
        <br></br> 
        <p>
          +Impact projects and education around them in all those SDGs and
          more, can be brought to public discussion, imagined, resolved be realised and as well, funded. 
		  
        </p>
<br></br>
		<p>
		Those efforts will happen in virtual and physical environments, integrated with communication and collaboration tools, leveraging the existing capacity of education and workshops around those causes. 
<br></br> <br></br>
		  Circles for Impact are not meant to be goal or task oriented, and free, peaceful atmosphere be there, where we can keep being themselves and respect one another, and share responsibility and stakes, locally and remotely.
       Will start with: {" "}
		  <a
            href="https://welo.space"
            target={"_blank"}
            rel="noreferrer"
          >
            welo.space
          </a>{" "}
		  <a
            href="https://spatial.chat"
            target={"_blank"}
            rel="noreferrer"
          >
            spatial.chat
          </a>{" "}

		  and {" "}
		  <a
            href="https://gather.town"
            target={"_blank"}
            rel="noreferrer"
          >
            gather.town
          </a>{" "}
	    </p>

	
        <br></br>
        <div className="signup">{button}</div>
        <br></br>
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
      </div>
    </div>
  );
});

export default Services;
