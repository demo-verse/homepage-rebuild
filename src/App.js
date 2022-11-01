import "./App.css";
import {
  BackTop,
  Become,
  Button,
  Circles,
  Design,
  Footer,
  Header,
  Navbar,
  Services,
  Testimonial,
} from "./components";

import { FaKeybase, FaDiscord } from "react-icons/fa";
import { BrowserRouter as Router } from "react-router-dom";
import { useRef } from "react";

function App() {
  const becomeRef = useRef();
  const servicesRef = useRef();
  const topRef = useRef();

  return (
    <Router>
      <div className="bg-section">
        <Navbar
          button={
            <div className="be-a-peacemaker">
              <Button
                text1="Join"
                text2="this movement"
                onClick={() => becomeRef.current.scrollIntoView()}
              />
            </div>
          }
        />
        <Header servicesRef={servicesRef} ref={topRef} />
      </div>

      <Testimonial circles={<Circles />} />

      <Services
        ref={servicesRef}
        buttons={[
          <a
            href="https://discord.gg/sqjdyCWNAR"
            target="_blank"
            rel="noreferrer"
          >
            <FaDiscord className="discord-icon" />
          </a>,
          <a
            href="https://keybase.io/team/peacemakers"
            target={"_blank"}
            rel="noreferrer"
          >
            <FaKeybase className="keybase-icon" />
          </a>,
          <a
            href="https://app.orbis.club/group/kjzl6cwe1jw147jurloxh41cderszpog6t2bho8kwoa90jfvj9dk0z930oykndk"
            target={"_blank"}
            rel="noreferrer"
          >
            Orbis.club
          </a>,
          <a
            href="https://matrix.to/#/#demoverse:matrix.org"
            target={"_blank"}
            rel="noreferrer"
          >
            Matrix
          </a>,
        ]}
        // button={
        //   <a
        //     href="https://github.com/demo-verse/circles-of-peace"
        //     target={"_blank"}
        //     rel="noreferrer"
        //   >
        //     We are about to scale +impact, with Inner and Sustainable
        //     Development Goals focus. <br></br>
        //     (click to see the details @ github)
        //   </a>

        // }
      />

      <Become
        ref={becomeRef}
        design={
          <Design
            style={{
              left: "0",
              right: "0",
              top: "180px",
              transform: "rotate(70deg)",
            }}
          />
        }
        circles={
          <Circles
            style={{
              top: "82%",
              left: "9%",
              transformOrigin: "center top",
              transform: "rotate(180deg)",
            }}
          />
        }
      />

      <Footer
        buttons={[
          <Button
            text1="Bring your "
            text2="perspective"
            onClick={() => alert("You clicked button")}
          />,
          <Button
            text1="Start a new "
            text2="peace project"
            onClick={() => alert("You clicked button")}
          />,
        ]}
      />

      <BackTop topRef={topRef} />
    </Router>
  );
}

export default App;
