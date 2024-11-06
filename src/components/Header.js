import { React, useState } from "react";
import { Link } from "react-router-dom";
import icon from "./images/icon.png";
import { ReactComponent as Hamburger } from "./images/hamburger-menu.svg";

// code used as reference: https://www.codevertiser.com/reactjs-responsive-navbar/
function Header() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <Link to="/">
              <img src={icon} alt="logo icon" width="50" height="50"></img>
            </Link>
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <Hamburger />
          </div>
          <div className={`nav-elements  ${showNavbar && "active"}`}>
            <ul>
              <li className="home">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/other_work">Other Work</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
