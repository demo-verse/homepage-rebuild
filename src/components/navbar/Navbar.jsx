import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import "./Navbar.css";
import Button from "../button/Button";

function Navbar({ button }) {
  const [toggle, setToggle] = useState(false);
  const [mobileView, setMobileView] = useState(false);

  window.addEventListener("resize", () => {
    if (window.innerWidth < 480) {
      setMobileView(true);
      setToggle(false);
    } else {
      setMobileView(false);
    }
  });

  return (
    <div className="wrapper">
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            
            <img src="https://i.imgur.com/LXsfmxO.png" alt="logo">
            </img>
          </Link>
        </div>
        <FaBars className="toggle" onClick={() => setToggle(!toggle)} />
        <ul
          className="menu"
          style={mobileView ? { display: toggle ? "flex" : "none" } : {}}
          onClick={() => setToggle(!toggle)}
        >
      
      {/* <li>
            <Link to="/about">about</Link>
          </li>
        */}
          {/* <li>
          <a href="https://discord.gg/sqjdyCWNAR" target={"_blank"} rel="noreferrer">A New human right</a>
          </li> */}
          <li>
          <a href="https://docs.google.com/document/d/1sWWbXOJSf5UdsJr79uQChGEDaFI9cdI-5KSFCARqwoE/" target={"_blank"} rel="noreferrer">Short paper</a>
          </li> 

          <li>
          <a href="https://expressionsofpeace.org" target={"_blank"} rel="noreferrer">proof of concept</a>
          </li> 
          <li>
          <a href="https://miro.com/app/board/uXjVOX94E5k=/?share_link_id=267054985896" target={"_blank"} rel="noreferrer">A flow of peace</a>
          </li> 
          <li>
          {/* <a href="" target={"_blank"} rel="noreferrer">Circles of Peace +Impact</a> */}
          <a
            href="https://astounding-sprite-02f5bb.netlify.app/"
            target={"_blank"}
            rel="noreferrer"
          >
            <Button
              text1="Circles of Peace"
              text2=""
              // onClick={() => alert("You clicked button")}
            />
          </a>
          </li> 

        
          {/* <li>{button}</li> */}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
