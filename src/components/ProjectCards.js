import React from "react";
// import ProjectData from "../components/ProjectData";

// Ktown4u Project

// Retail Horror Stories Project
// import RetailHorrorStories from "./images/RetailHorrorStories.png";

// Kirby's Corner Project
// import KirbysCorner from "./images/KirbysCorner.png";

// Miiverse Revival Project
// import MiiverseRevival from "./images/MiiverseRevival.png";

// Eclipse Soundscapes Project
import EclipseSoundscapes from "./images/EclipseSoundscapes.png";
import EclipseSoundscapesProject from "../pages/EclipseSoundscapesProject";

// Discord File Compressor Project
// import Discord from "./images/Discord.png";

// Visit Mira Project
// import VisitMira from "./images/VisitMira.png";

// CREATE NEW SCREENSHOTS / MAKE THEM ALL THE SAME SIZE
function ProjectCards() {
  return (
    <main classNameName="PageWrapper">
      <h1 classNameName="projectHeader">Projects</h1>
      <div className="ProjectsSection" id="projects">
        <div className="Project">
          <div className="ProjectImage">
            <a href={EclipseSoundscapesProject}>
              <img
                src={EclipseSoundscapes}
                alt="Kirby's Corner screenshot"
              ></img>
            </a>
          </div>
          <div className="ProjectText">
            <div className="ProjectTextLeft">
              <div className="ProjectTitle">Ktown4u Web Redesign</div>
              <div className="ProjectDate">Summer 2024 - Present</div>
            </div>
            <div className="ProjectTextRight">
              <div className="ProjectSummary">
                Improving web users' shopping experiences
              </div>
              <div className="ProjectCategory">UX Design, UI Design</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProjectCards;
