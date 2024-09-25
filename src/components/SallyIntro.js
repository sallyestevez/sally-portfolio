import React from "react";
import { NavLink } from "react-router-dom";
import explore from "./images/explore.png";

function SallyIntro() {
  return (
    <div className="PageWrapper">
      <div className="SallyTitleCSS">
        <div className="SallyTitleText">
          <h1>
            Sally Estevez is a product designer & front-end developer based in
            NYC ✴
          </h1>
        </div>
      </div>
      <div className="IntroSpacing1"></div>
      <div class="rotatingImageDiv">
        <div class="rotatingImage">
          <NavLink to="/projects">
            <img src={explore} alt="rotating explore pic"></img>
          </NavLink>
        </div>
      </div>
      <div className="IntroSpacing2"></div>
    </div>
  );
}

export default SallyIntro;
