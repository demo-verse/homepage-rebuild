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
          Experiencing an observable World Peace{" "}
          <strong>is possible with your actions </strong> through understanding,
          kindness and generosity in giving out an assurance to the rest, in a
          borderless and direct fashion, as sovereign, world residents.{" "}
        </p>
        <br></br>
        {/* <p>
          Here we are highly motivated on starting the open sourced and minded
          foundations of a decentralised diplomacy paradigm.
        </p> */}
        <br></br>
        <p>
          <p>
            @ demoVerse, we are experiencing the sharing of rights, along with
            resources. And we'd like transparency, resilience and especially
            undeniability on the making of a World Peace, through equality and
            equity; more specifically, having responsibility and stakes in the
            remotes, as well as locally in an unstoppable fashion.
            <br></br>
            <br></br> That{"'"}s why, blockchain is at the core of our solution
            design. Yet, this whole thing could be done with pencils and papers
            as well.
            {/* then all that impact
            generating projects and efforts, that are appreciated well and build
            a new economy of peace. */}
          </p>
          <br></br>
        </p>
        <br></br>
        <h2>
          Peace, as a start: <br></br>Introducing Circles of Peace for + Impact
        </h2>
        <p>
          As we use our right on being equal on peace and trust making, as
          sovereign world residents on this context, and assure that for one
          another especially, via expressions and acknowledgements, we are
          already taking the first step with the least action required to enter
          a UN focused working group-like environment, that is what we are
          calling Circles for Impact.
        </p>
        <div className="signup">{button}</div>
        <br></br>
        <br></br>
        <div className="services-content">
          {services?.slice(0, 3).map((service, index) => (
            <div key={index} className="service-item">
              <div className="service-icon">
                <div className="service-design">
                  <span className="dot"></span>.{" "}
                </div>
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
        <br></br> <br></br>
        <p>
          That is an intentional and international bond, that would give us the
          entitlement of being a collaborator of the{" "}
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
          and{" "}
          <a
            href="https://sdgs.un.org/goals/goal16"
            target={"_blank"}
            rel="noreferrer"
          >
            #17
          </a>{" "}
          before invited to the Circles for Impact.
          <br></br> <br></br>
          Those goals are basically around equality, peace, and collaboration
          for the goals:
          <br></br>
          <br></br>
          <img src="https://i.imgur.com/oB7SZAs.png" alt="mobile" />
          <br></br> <br></br>
          <p>
            For all that to happen in a fun and effective way, we are initially
            curating a few +impact spaces through non-premium memberships and
            hence, limited capacity, starting with providers:{" "}
            <a href="https://welo.space" target={"_blank"} rel="noreferrer">
              welo.space
            </a>{" "}
            <a href="https://spatial.chat" target={"_blank"} rel="noreferrer">
              spatial.chat
            </a>{" "}
            and{" "}
            <a href="https://gather.town" target={"_blank"} rel="noreferrer">
              gather.town
            </a>{" "}
          </p>{" "}
          <br></br>
          <p>Below is an environment for Circles for Impact @ welo.space</p>
          <br></br>
          <br></br>
          <iframe
            width="100%"
            height="480"
            src="https://www.youtube.com/embed/Ek7AvWng7J8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>{" "}
          <br></br> <br></br>
          <h2>Good news, peacemaker!</h2>
          <br></br>
          if you are at this stage, then you have not only experienced these
          Sustainable Development Goals, but also practice pretty much all
          skills and qualities of{" "}
          <a
            href="https://www.innerdevelopmentgoals.org/framework"
            target={"_blank"}
            rel="noreferrer"
          >
            Inner Development Goals
          </a>{" "}
          to some extent, if you made the right choice and kept yourself
          non-violent along the way
          <br></br> <br></br>
          Yes, <strong>peace should be this easy</strong>, in the 21st century,
          through a proactive, individual and collective process of wise and
          aware actions, that are based on equality and equity.
          <br></br> <br></br>
          <i>
            In fact, it is a low-hanging fruit, all you need is to take it, and
            share with generosity.
          </i>
          <br></br>
          <br></br>
          +Impact projects in all SDGs and new ones we{"'"}d bring in together
          (eg. mental health, cognitive security, well, maybe new rights to
          introduce and share), can be brought to public discussion, imagined,
          resolved, be realised and well, funded by investments, grants and many
          more.
        </p>
        <br></br>
        <p>
          Hopefully, will be partnering with and be sponsored by those, and use
          the least amount of the funding we'd receive to be spent on that
          infrastructure, since it would be more meaningful to empower +impact
          generating projects people imagine and collaborate to realise.
        </p>
        <br></br>
        <p>
          <strong>Just in case</strong> , we're also{" "}
          <a
            href="https://github.com/demo-verse/peace-game"
            target={"_blank"}
            rel="noreferrer"
          >
            building our open sourced, in-house systems and integrations
          </a>{" "}
          for advanced virtual communication, collaboration and learning
          capacity, with gamification component in place.
          <br></br>
          <br></br>
          That, will be launched as Peace Game, already have a portaling feature
          to be adapted for the passages between +impact spaces and causes.
        </p>
        <br></br>
        <p>
          Ongoing efforts be kept open sourced and be concurrently developed
          with Circles of Peace for +Impact, in 2022 and 2023{" "}
        </p>
        <br></br>
        <p>
          All we need is to bring ourselves as peaceful we are, respect one
          another, and share responsibility and stakes, locally and remotely,
          with resolutions following, via peaceful, intentional actions ...{" "}
          {"&"}
          sustain that indefinitely, for{" "}
          <strong>a mutual assured regeneration</strong>.
        </p>
        <p>
          <br></br>
          Well, we'd like to be persistent about taking{" "}
          <strong>intentions over impressions</strong> along the way.. <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h2>~ Let{"'"}s gooooO! ~</h2>
          <br></br>
          <i>
            This whole thing, is all about boosting and observable, resilient
            evolution of a self-legitimising flow, of peace.
          </i>
        </p>
        <br></br>
        <p>
          <strong>
            For all that, calling everyone to live and leave a priceless legacy;
            namingly, a World Peace through Equality and Equity
          </strong>
          .
        </p>
        <br></br>
        <p>
          World deserves the best, and we want the best for the world.
          <br></br> <br></br>
          <strong>& bests, in peace</strong>
        </p>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>
  );
});

export default Services;
