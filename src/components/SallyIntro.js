import React from "react";
import { NavLink } from "react-router-dom";
import explore from "./images/explore.png";

function SallyIntro() {
  return (
    <div className="page-wrapper">
      <div className="intro-title-div">
        <div className="intro-title-heading">
          <h1>
            Sally Estevez is a UI/UX designer & front-end developer based in NYC
            ✴
          </h1>
        </div>
      </div>
      <div className="intro-spacing"></div>
      <div className="rotating-image-div">
        <div>
          <NavLink to="/projects">
            <img
              src={explore}
              className="explore-pic"
              alt="rotating explore pic"
            ></img>
          </NavLink>
        </div>
      </div>
      <div className="intro-spacing"></div>
    </div>
  );
}

export default SallyIntro;
