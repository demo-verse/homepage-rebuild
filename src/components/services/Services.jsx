import "./Services.css";
import { forwardRef } from "react";
import Button from "../button/Button";
import SocialInterpretations from "../../images/social_interaction_to_interpretations.png";

const Services = forwardRef(({ button, buttons }, ref) => {
  return (
    <div className="wrapper">
      <div className="services" id="services" ref={ref}>
        <h2>
          A new human right has born: <br></br>It{"'"}s all about standing equal
          on peace {"&"} trust making
        </h2>
        <div className="peacemaking-is-our-right-too">
          <img src="" alt="peacemaking is our right too.."></img>
        </div>
        <p>
          "Everyone is free to be proactive, claim their equality and free will
          to act on peace and trust making; and be legitimate co-signer and
          sealer of a World Peace treaty, regardless of their entitlement, being
          official or not."
        </p>
        <br></br>
        <p>
          <i>
            {" "}
            ^ This human right, concept, perspective and notion shall be a
            canvas; on which our kind making Art of Peace, together.
          </i>
        </p>
        <p>
         
          <strong>
            {" "}
            Hey there, Peacemaker!
            <br></br>
            <br></br>
            Start, a World Peace ~ express yourself!
          </strong>
          <br></br>
          <br></br>
          Feel welcomed {"&"} invited to bring your perspective, empowered and
          empowering being, those co-existing communities of your choice: :{" "}
        </p>
        <br></br>
        <br></br> {buttons[0]} {buttons[1]}
        <br></br> <br></br> @ {buttons[2]} <br></br>
        <br></br>@ {buttons[3]}
        <br></br>
        <br></br> <br></br>
        <br></br>
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
        <p>
          Peacemaking is an experience, that is priceless; it is more about
          being, than having. Here, we'll be sharing rights, along with
          resources. It's even easier; let's get used to that, the sooner the
          better.
          <br></br>
          <br></br>
          Trust that, a World Peace, initiated by citizens, is not a matter of
          legitimacy, but matter of time, in its observation and accomplishment.
        </p>
        <br></br>
        {/* <p>
          Here we are highly motivated on starting the open sourced and minded
          foundations of a decentralised diplomacy paradigm.
        </p> */}
        <br></br>
        <p>
          At{" "}
          <a href="https://demover.se" target={"_blank"} rel="noreferrer">
            demoVerse,
          </a>{" "}
          we'd like transparency, resilience and especially undeniability on the
          making of a World Peace, through equality and equity; more
          specifically, having responsibility and stakes in the remote, as well
          as local scope, in an unstoppable fashion.
          <br></br>
          <br></br>
          Let it flo~ let it be.
          <br></br>
          <br></br> That{"'"}s why, blockchain is at the core of our solution
          design. Yet, this whole thing could be done with pencils and papers as
          well.
          {/* then all that impact
            generating projects and efforts, that are appreciated well and build
            a new economy of peace. */}
        </p>
        <br></br>
        <br></br>
        <h2>
          Peace, as a start: <br></br>Introducing Circles of Peace for + Impact
        </h2>
        <p>
          In a web3 social platform, Circles of Peace, we are already taking the
          first step with the least action required to enter +impact generating
          and scaling environments, and we are calling them Circles for Impact.
          Below is our interpretation of the basic social media interactions,
          that are familiar to all by now, hopefully.
          <br></br>
          <br></br>
          <img
            src={SocialInterpretations}
            width={"90%"}
            alt="reinterpretation of social media in peacemaking context"
          ></img>
          <br></br>
          As we use our right on being equal on peace and trust making, either
          as citizens of our countries, or as sovereign world residents in this
          context, assured that for one another especially, via expressions,
          acknowledgements and reflections.
          <br></br>
          <br></br>
          Visiting Circles of Peace{" "}
          <a
            href="https://github.com/demo-verse/circles-of-peace"
            target={"_blank"}
            rel="noreferrer"
          >
            github page.
          </a>{" "}
          one can learn more about the details and its planned development for
          2022 and 2023 and all that .
          {/* <br></br>
          <br></br>With an $impact, $cause and $need based Decentralized
          Exchange / DEX as well to be introduced next, on top of our utility
          tokens such as $peace, $wisdom, $honesty and $respect for a Flow of
          Peace, with its economy.
          <br></br> */}
        </p>
        <br></br> <br></br>
        <div className="enter-circles-of-peace">
          <a
            href="https://astounding-sprite-02f5bb.netlify.app/"
            target={"_blank"}
            rel="noreferrer"
          >
            <Button
              text1="Enter"
              text2="Circles of Peace for +Impact"
              // onClick={() => alert("You clicked button")}
            />
          </a>
        </div>
        <br></br>
        <div className="signup">{button}</div>
        <br></br>
        {/* <div className="services-content">
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
        </div> */}
        <p>
          <br></br> The entry to Circles of Peace, is free and will not be
          moderated or require a registration flow. However, it will be acting
          as a gateway to Circles for Impact, and yes, the least yet deliberate
          effort spent for peace, is a starter point for +impact collaborations.
        </p>
        <br></br>
        <p>
          That is an intentional and international bond, that would give us the
          entitlement of being a collaborator of the{" "}
          <a href="https://sdgs.un.org/" target={"_blank"} rel="noreferrer">
            United Nations Sustainable Development Goals
          </a>{" "}
          <a
            href="https://sdgs.un.org/goals/goal5"
            target={"_blank"}
            rel="noreferrer"
          >
            #5
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
          for the common goals.
          <br></br>
          <br></br>One more, thing to mention here, is that goals #5: Gender
          Equality and #10: Reducing inequalities between and within countries,
          are quite relevant for us, as we have introduced a World Peace by
          equality approach between people in the first place.
          <br></br>
          <br></br> Especially on gender equality, including people without
          official entitlements on signing those peace treaties between
          countries, is a balancer action.
          <br></br>
          <br></br>How so?
          <br></br>
          <br></br>
          As of 19 September 2022,{" "}
          <a
            href="https://www.unwomen.org/en/what-we-do/leadership-and-political-participation/facts-and-figures"
            target={"_blank"}
            rel="noreferrer"
          >
            <strong>only </strong> 13 women
          </a>{" "}
          {/* (50.4%) and 496 are women (49.6%) */}
          are in executive government positions as leaders of their
          countries/states.
          <br></br>
          <br></br>
          Considering 193 member states in the United Nations, women in
          executive positions are represented as low as 6-7%, and that, sadly,
          also goes for the official peacemaking/sealing activities of course.
          <br></br> <br></br>
          That might be a reason why there has not been an ultimate consensus
          around peace in our history. However, we would like to increase
          women's participation for sealing those treaties by decentralization
          of diplomacy, with our commitment to provide equality in peacemaking.
          <br></br> <br></br>
          So that goes almost 50%/50% between genders with that egalitarian way,
          without having to wait more years on women's inclusion as them,
          official entitled to be the signers of a World Peace treaty.
          <br></br>
          {/* <img src="https://i.imgur.com/oB7SZAs.png" width={"100%"} alt="mobile" />
          <br></br> <br></br> */}
          <br></br>
          <p>
            Recently we have given a try to a cool virtual environment setting
            for Circles for Impact @ welo.space, and is recorded when we were
            co-imagining how impact generation would be, while experiencing that
            tool's capacities. how would education, collaboration, demonstration
            and resolutions on such spaces would be happening is always open for
            co-imagination, let's bring in the best communication, coordination
            and collaboration tools out there.
          </p>
          {/* <br></br>
          <br></br>
          <iframe
            width="100%"
            height="480"
            src="https://www.youtube.com/embed/Ek7AvWng7J8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>{" "} */}
          <br></br> <br></br>
          <h2>Good news, peacemaker!</h2>
          <br></br>
          If you are at this stage, then you have not only experienced these
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
        Just recently, we have imagined that, in one of those spaces and
        recorded those moments,{" "}
        <a
          href="https://www.youtube.com/embed/Ek7AvWng7J8"
          target={"_blank"}
          rel="noreferrer"
        >
          just like this.
        </a>{" "}
        <br></br>
        <br></br>
        <p>
          Hopefully, will be partnering with and be sponsored by those, and use
          the least amount of the funding we'd receive to be spent on that
          infrastructure, since it would be more meaningful to empower +impact
          generating projects people imagine and collaborate to realise.
        </p>
        <br></br>
        <p>
          <strong>Just in case</strong> , we're also prepared to build{" "}
          <a
            href="https://github.com/demo-verse/peace-game"
            target={"_blank"}
            rel="noreferrer"
          >
            open sourced, in-house systems and integrations
          </a>{" "}
          for advanced virtual communication, collaboration and learning
          capacity, with gamification component in place.
          <br></br>
          <br></br>
          That, will be launched as Peace Game, already have a portaling feature
          to be adapted for the passages between +impact spaces and causes.{" "}
          <i>Please do not use it now, a lot to enhance there.</i>
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
          Well, we'd like to have{" "}
          <strong>
            a strong stand around taking intentions over impressions, right from
            the beginning of this journey.
          </strong>{" "}
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </p>
        <br></br>
      </div>
    </div>
  );
});

export default Services;
