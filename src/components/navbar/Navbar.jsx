import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import "./Navbar.css";

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
            
            <img src="https://i.imgur.com/LXsfmxO.png">
            </img>
          </Link>
        </div>
        <FaBars className="toggle" onClick={() => setToggle(!toggle)} />
        <ul
          className="menu"
          style={mobileView ? { display: toggle ? "flex" : "none" } : {}}
          onClick={() => setToggle(!toggle)}
        >
      
      <li>
            <Link to="/about">about</Link>
          </li>
          {/* <li>
            <Link to="/about">A new right</Link>
          </li>
          <li>
            <Link to="/about">Principles</Link>
          </li> */}

          <li>
            {/* <Link to="/contact">Community</Link> */}
            <a href="https://discord.gg/sqjdyCWNAR" target={"_blank"}>Community</a>

          </li>
          <li>{button}</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
