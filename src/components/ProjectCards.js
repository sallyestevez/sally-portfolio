import React from "react";
import { NavLink } from "react-router-dom";

// import ProjectData from "../components/ProjectData";

// Ktown4u Project
import Ktown4uRedesign from "./images/Ktown4uRedesign.png";

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

// MAKE ALL IMAGES THE SAME SIZE & CREATE GIFS OF THE SCREENSHOTS
function ProjectCards() {
  return (
    <main>
      <div className="ProjectsSection" id="projects">
        <div className="ProjectWrapper">
          {/* Ktown4u Redesign */}
          <div className="Project">
            <div className="ProjectImage">
              <NavLink to="/project/ktown4u-redesign">
                <img src={Ktown4uRedesign} alt="Ktown4u screenshot"></img>
              </NavLink>
            </div>
            <div className="ProjectText">
              <NavLink to="/project/ktown4u-redesign">
                <div className="ProjectTitle">Ktown4u Web Redesign</div>
              </NavLink>
              <div className="ProjectSummary">
                Improving web users' shopping experiences
              </div>
              <div className="ProjectDateCategory">
                <p>Summer 2024 - Present | UX Design, UI Design</p>
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
              <NavLink to="/project/retail-horror-stories">
                <div className="ProjectTitle">
                  Retail Horror Stories: Black Friday Edition
                </div>
              </NavLink>
              <div className="ProjectSummary">
                A "Choose Your Own Adventure" game inspired by real retail
                workers' experiences
              </div>
              <div className="ProjectDateCategory">
                <p>Spring 2023 | Web Development, Game Development</p>
              </div>
            </div>
          </div>
        </div>

        <div className="ProjectWrapper">
          {/* Kirby's Corner */}
          <div className="Project">
            <div className="ProjectImage">
              <NavLink to="/project/kirbys-corner">
                <img src={KirbysCorner} alt="Kirby's Corner screenshot"></img>
              </NavLink>
            </div>
            <div className="ProjectText">
              <NavLink to="/project/kirbys-corner">
                <div className="ProjectTitle">Kirby's Corner</div>
              </NavLink>
              <div className="ProjectSummary">
                An interactive fanpage dedicated to the Kirby universe
              </div>
              <div className="ProjectDateCategory">
                <p>Spring 2023 | Web Development</p>
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
              <NavLink to="/project/eclipse-soundscapes">
                <div className="ProjectTitle">Eclipse Soundscapes</div>
              </NavLink>
              <div className="ProjectSummary">
                Improving the accessibility of a field researcher training page
                for older adults
              </div>
              <div className="ProjectDateCategory">
                Fall 2022 | UX Design, UI Design
              </div>
            </div>
          </div>
        </div>

        <div className="ProjectWrapper">
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
              <NavLink to="/project/miiverse-revival">
                <div className="ProjectTitle">Miiverse Revival</div>
              </NavLink>
              <div className="ProjectSummary">
                A "revival" of the now-defunct Nintendo social media site called
                Miiverse
              </div>
              <div className="ProjectDateCategory">
                <p>Fall 2022 | Web Development</p>
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
              <NavLink to="/project/discord-file-compressor">
                <div className="ProjectTitle">Discord File Compressor</div>
              </NavLink>
              <div className="ProjectSummary">
                An in-app compression feature for larger files sent through
                Discord
              </div>
              <div className="ProjectDateCategory">
                <p>Fall 2022 | UX Design, UI Design</p>
              </div>
            </div>
          </div>
        </div>

        <div className="ProjectWrapper">
          {/* Visit Mira */}
          <div className="Project">
            <div className="ProjectImage">
              <NavLink to="/project/visit-mira">
                <img src={VisitMira} alt="Visit Mira screenshot"></img>
              </NavLink>
            </div>
            <div className="ProjectText">
              <NavLink to="/project/visit-mira">
                <div className="ProjectTitle">Visit Mira</div>
              </NavLink>
              <div className="ProjectSummary">
                We're stuck on a different planet - by choice
              </div>
              <div className="ProjectDateCategory">
                <p>Fall 2021 | Web Development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProjectCards;
