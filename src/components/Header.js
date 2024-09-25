import { React, useState } from "react";
import { NavLink } from "react-router-dom";
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
            <NavLink to="/">
              <img src={icon} alt="logo icon" width="50" height="50"></img>
            </NavLink>
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <Hamburger />
          </div>
          <div className={`nav-elements  ${showNavbar && "active"}`}>
            <ul>
              <li className="home">
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/projects">Projects</NavLink>
              </li>
              <li>
                <NavLink to="/other_work">Other Work</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
