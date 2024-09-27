import React from "react";
import { NavLink } from "react-router-dom";

// import ProjectData from "../components/ProjectData";

// Ktown4u Project

// Retail Horror Stories Project
import RetailHorrorStories from "./images/RetailHorrorStories.png";

// Kirby's Corner Project
import KirbysCorner from "./images/KirbysCorner.png";

// Miiverse Revival Project
import MiiverseRevival from "./images/MiiverseRevival.png";

// Eclipse Soundscapes Project
import EclipseSoundscapes from "./images/EclipseSoundscapes.png";
// import EclipseSoundscapesProject from "../pages/EclipseSoundscapesProject";

// Discord File Compressor Project
import Discord from "./images/Discord.png";

// Visit Mira Project
import VisitMira from "./images/VisitMira.png";

// CREATE NEW SCREENSHOTS / MAKE THEM ALL THE SAME SIZE
function ProjectCards() {
  return (
    <main className="PageWrapper">
      <div className="ProjectsSection" id="projects">
      <h1 className="PageTitle">Projects</h1>
      {/* Ktown4u Redesign */}
        <div className="Project">
          <div className="ProjectImage">
          <NavLink to="/project/ktown4u-redesign">
              <img
                src={EclipseSoundscapes}
                alt="Kirby's Corner screenshot"
              ></img>
            </NavLink>
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
        {/* Retail Horror Stories */}
        <div className="Project">
          <div className="ProjectImage">
          <NavLink to="/project/retail-horror-stories">
              <img
                src={RetailHorrorStories}
                alt="Retail Horror Stories screenshot"
              ></img>
            </NavLink>
          </div>
          <div className="ProjectText">
            <div className="ProjectTextLeft">
              <div className="ProjectTitle">Retail Horror Stories: Black Friday Edition</div>
              <div className="ProjectDate">Spring 2023</div>
            </div>
            <div className="ProjectTextRight">
              <div className="ProjectSummary">
              A "Choose Your Own Adventure" game inspired by real retail workers' experiences
              </div>
              <div className="ProjectCategory">Web Development, Game Development</div>
            </div>
          </div>
        </div>
        {/* Kirby's Corner */}
        <div className="Project">
          <div className="ProjectImage">
          <NavLink to="/project/kirbys-corner">
              <img
                src={KirbysCorner}
                alt="Kirby's Corner screenshot"
              ></img>
            </NavLink>
          </div>
          <div className="ProjectText">
            <div className="ProjectTextLeft">
              <div className="ProjectTitle">Kirby's Corner</div>
              <div className="ProjectDate">Spring 2023</div>
            </div>
            <div className="ProjectTextRight">
              <div className="ProjectSummary">
              An interactive fanpage dedicated to the Kirby universe
              </div>
              <div className="ProjectCategory">Web Development</div>
            </div>
          </div>
        </div>
        {/* Eclipse Soundscapes */}
        <div className="Project">
          <div className="ProjectImage">
          <NavLink to="/project/eclipse-soundscapes">
              <img
                src={EclipseSoundscapes}
                alt="Eclipse Soundscapes screenshot"
              ></img>
            </NavLink>
          </div>
          <div className="ProjectText">
            <div className="ProjectTextLeft">
              <div className="ProjectTitle">Eclipse Soundscapes</div>
              <div className="ProjectDate">Winter 2023</div>
            </div>
            <div className="ProjectTextRight">
              <div className="ProjectSummary">
              Enhancing the accessibility of a field researcher training page for older adults
              </div>
              <div className="ProjectCategory">UX Design, UI Design</div>
            </div>
          </div>
        </div>
        {/* Miiverse Revival */}
        <div className="Project">
          <div className="ProjectImage">
          <NavLink to="/project/miiverse-revival">
              <img
                src={MiiverseRevival}
                alt="Miiverse Revival screenshot"
              ></img>
            </NavLink>
          </div>
          <div className="ProjectText">
            <div className="ProjectTextLeft">
              <div className="ProjectTitle">Miiverse Revival</div>
              <div className="ProjectDate">Fall 2022</div>
            </div>
            <div className="ProjectTextRight">
              <div className="ProjectSummary">
              A "revival" of the now-defunct Nintendo social media site called Miiverse
              </div>
              <div className="ProjectCategory">Web Development</div>
            </div>
          </div>
        </div>

        {/* Discord File Compressor */}
        <div className="Project">
          <div className="ProjectImage">
          <NavLink to="/project/discord-file-compressor">
              <img
                src={Discord}
                alt="Discord File Compressor screenshot"
              ></img>
            </NavLink>
          </div>
          <div className="ProjectText">
            <div className="ProjectTextLeft">
              <div className="ProjectTitle">Discord File Compressor</div>
              <div className="ProjectDate">Fall 2022</div>
            </div>
            <div className="ProjectTextRight">
              <div className="ProjectSummary">
              An in-app compression feature for larger files sent through Discord
              </div>
              <div className="ProjectCategory">UX Design, UI Design</div>
            </div>
          </div>
        </div>

        {/* Visit Mira */}
        <div className="Project">
          <div className="ProjectImage">
          <NavLink to="/project/visit-mira">
              <img
                src={VisitMira}
                alt="Visit Mira screenshot"
              ></img>
            </NavLink>
          </div>
          <div className="ProjectText">
            <div className="ProjectTextLeft">
              <div className="ProjectTitle">Visit Mira</div>
              <div className="ProjectDate">Fall 2021</div>
            </div>
            <div className="ProjectTextRight">
              <div className="ProjectSummary">
              We're stuck on a different planet - by choice
              </div>
              <div className="ProjectCategory">Web Development</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProjectCards;
