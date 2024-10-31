import React from "react";
import { NavLink } from "react-router-dom";
import explore from "./images/explore.png";

function SallyIntro() {
  return (
    <div className="PageWrapper">
      <div className="SallyTitleCSS">
        <div className="SallyTitleText">
          <h1>
            Sally Estevez is a UI/UX designer & front-end developer based in
            NYC ✴
          </h1>
        </div>
      </div>
      <div className="IntroSpacing1"></div>
      <div class="rotatingImageDiv">
        <div class="">
          <NavLink to="/projects">
            <img
              class="rotatingImage"
              src={explore}
              alt="rotating explore pic"
            ></img>
          </NavLink>
        </div>
      </div>
      <div className="IntroSpacing2"></div>
    </div>
  );
}

export default SallyIntro;
