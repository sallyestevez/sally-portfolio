import React from "react";
import ProjectData from "../ProjectData";
import DesignSystemColors from "../images/PupilRedesign/DesignSystemColors.png";
import DesignSystemSpacing from "../images/PupilRedesign/DesignSystemSpacing.png";
import DesignSystemTypography from "../images/PupilRedesign/DesignSystemTypography.png";
import HeroMockups from "../images/PupilRedesign/HeroMockups.png";
import InstitutionAbout from "../images/PupilRedesign/InstitutionAbout.png";
import M2MIteration from "../images/PupilRedesign/M2MIteration.png";
import M2MTutorial from "../images/PupilRedesign/M2MTutorial.gif";
import OldvNewFeed from "../images/PupilRedesign/OldvNewFeed.png";
import RedesignedScreens from "../images/PupilRedesign/RedesignedScreens.png";
import UserSettingsIA from "../images/PupilRedesign/UserSettingsIA.png";

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

function PupilRedesignContent() {
  return (
    <div className="project-wrapper">
      <header className="project-header">
        <div className="header-text">
          <h1 className="page-title">{ProjectData[1].title}</h1>
          <div className="project-summary">{ProjectData[1].summary}</div>
          <div className="project-date-category">
            {ProjectData[1].date} | {ProjectData[1].category}
          </div>
        </div>
        <div className="project-page-image">
          <img
            src={ProjectData[1].img}
            alt={`${ProjectData[1].title} screenshot`}
            loading="lazy"
          />
          <br></br>
        </div>
      </header>
      <section>
        <div className="project-content">
          <div className="project-div">
            <div className="page-subtitle">Project Details</div>
            <p>
              <strong>Role:</strong> Product Designer
            </p>
            <p>
              <strong>Duration:</strong> July 2024 - July 2025 (1 year)
            </p>
            <p>
              <strong>Tools:</strong> Figma, Figjam
            </p>
          </div>
          <div className="project-div">
            <div className="page-subtitle">Overview</div>
            <p>
              Pupil is a mentorship platform designed to help high school
              students connect with college mentors who can guide them through
              applications, academics, and career choices.
            </p>
            <p>
              I led a redesign of the mobile app, focusing on usability, visual
              consistency, and expanding features to better support mentees,
              mentors, and institutions.
            </p>
          </div>
          <div className="project-div">
            <div className="page-subtitle">The Problem</div>
            <div className="project-subsection">
              <p>
                Early feedback revealed the app felt outdated, confusing, and
                inconsistent:
              </p>
              <p>✴ Mentees struggled to find mentors.</p>
              <p>✴ Mentors lacked clear tools to manage connections.</p>
              <p>✴ Institutions couldn't showcase opportunities.</p>
            </div>
            <div className="project-subsection">
              <div className="pupil-image">
                <a
                  href={OldvNewFeed}
                  data-fancybox
                  data-caption="Feed Screen: Before vs. After"
                >
                  <img
                    src={OldvNewFeed}
                    alt={`Feed Screen: Before vs. After`}
                    loading="lazy"
                  />
                </a>
                <p>
                  <strong>Feed Screens: Before vs. After</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="project-div">
            <div className="page-subtitle">Process</div>
            <div className="project-subsection">
              <h2>Research & Information Architecture</h2>
              <p>
                I started by auditing the app's existing structure and
                identifying pain points. I then reorganized navigation flows for
                settings, messaging, and mentorship. I benchmarked against
                familiar apps like Instagram and TikTok to align with user
                expectations.
              </p>
            </div>
            <div className="project-subsection">
              <div className="pupil-image">
                <a
                  href={UserSettingsIA}
                  data-fancybox
                  data-caption="Information Architecture: Messaging Details & Feedback"
                >
                  <img
                    src={UserSettingsIA}
                    alt={`Information Architecture: Messaging Details & Feedback`}
                    loading="lazy"
                  />
                </a>
                <p>
                  <strong>
                    Information Architecture: Messaging Details & Feedback
                  </strong>
                </p>
              </div>
            </div>
            <div className="project-subsection">
              <h2>Wireframing & Iteration</h2>
              <p>
                Starting with low-fidelity designs, I iterated weekly to refine
                the following features:
              </p>
              <p>✴ User onboarding</p>
              <p>✴ Mentor/mentee matching</p>
              <p>✴ Messaging experience</p>
              <p>✴ User settings</p>
            </div>
            <div className="project-subsection">
              <div className="pupil-image">
                <a
                  href={M2MIteration}
                  data-fancybox
                  data-caption="Mentor Profile Iteration"
                >
                  <img
                    src={M2MIteration}
                    alt={`Mentor Profile Iteration`}
                    loading="lazy"
                  />
                </a>
                <p>
                  <strong>Mentor Profile Iteration</strong>
                </p>
              </div>
            </div>
            <div className="project-subsection">
              <h2>Updating the Design System</h2>
              <p>
                To ensure scalability, I updated and expanded the design system:
              </p>
              <p>✴ Introduced new colors and icons</p>
              <p>✴ Standardized text styles</p>
              <p>
                ✴ Created and updated reusable components (headers, buttons,
                popups)
                <p>These changes created consistency across all app flows.</p>
              </p>
            </div>
            <div className="project-subsection">
              <div className="pupil-image pupil-section">
                <a
                  href={DesignSystemColors}
                  data-fancybox
                  data-caption="Design System (Colors)"
                >
                  <img
                    src={DesignSystemColors}
                    alt={`Design System (Colors)`}
                    loading="lazy"
                  />
                </a>
                <a
                  href={DesignSystemSpacing}
                  data-fancybox
                  data-caption="Design System (Spacing)"
                >
                  <img
                    src={DesignSystemSpacing}
                    alt={`Design System (Spacing)`}
                    loading="lazy"
                  />
                </a>
                <a
                  href={DesignSystemTypography}
                  data-fancybox
                  data-caption="Design System (Typography)"
                >
                  <img
                    src={DesignSystemTypography}
                    alt={`Design System (Typography)`}
                    loading="lazy"
                  />
                </a>
              </div>
              <p className="pupil-section">
                <strong>
                  Design System Snapshots (Colors, Spacing, & Typography)
                </strong>
              </p>
            </div>
            <div className="project-subsection">
              <h2>Prototyping & Validation</h2>
              <p>
                I built interactive prototypes and tested them with users.
                Feedback led to refinements like:
              </p>
              <p>✴ Message hold-down menus</p>
              <p>✴ Feed filters</p>
              <p>✴ Institution pages displaying majors and deadlines</p>
            </div>
            <div className="project-subsection">
              <div className="pupil-image pupil-section">
                <a
                  href={M2MTutorial}
                  data-fancybox
                  data-caption="M2M (Mentor 2 Mentee) Tutorial"
                >
                  <img
                    src={M2MTutorial}
                    alt={`M2M (Mentor 2 Mentee) Tutorial`}
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
            <p className="pupil-section">
              <strong>M2M (Mentor 2 Mentee) Tutorial</strong>
            </p>
          </div>
          <div className="project-div">
            <div className="page-subtitle">Solution</div>
            <p>The redesign introduced:</p>
            <p>✴ Clear navigation with consistent headers and footers</p>
            <p>✴ Improved messaging with archiving and reactions</p>
            <p>✴ A dynamic feed to engage with mentors and institutions</p>
            <p>✴ Institution pages featuring majors, mentors, and deadlines</p>
            <p>✴ An updated design system to support future updates</p>
            <div className="project-subsection">
              <div className="pupil-image">
                <a
                  href={RedesignedScreens}
                  data-fancybox
                  data-caption="Redesigned Screens (Mentor Profile, Feed, Institution
                    Profile, Messaging)"
                >
                  <img
                    src={RedesignedScreens}
                    alt={`Redesigned Screens (Mentor Profile, Feed, Institution
                    Profile, Messaging)`}
                    loading="lazy"
                  />
                </a>
                <p>
                  <strong>
                    Redesigned Screens (Mentor Profile, Feed, Institution
                    Profile, Messaging)
                  </strong>
                </p>
              </div>
            </div>
          </div>
          <div className="project-div">
            <div className="page-subtitle">Impact</div>
            <p>The redesign had meaningful outcomes:</p>
            <p>✴ Mentor matching became simpler and faster</p>
            <p>✴ Mentors gained more control over availability</p>
            <p>✴ Institutions were able to clearly highlight opportunities</p>
            <p>
              ✴ The design system laid the foundation for future web and
              campaign interactions
            </p>
            {/* image placeholder: stat cards or mock metrics, e.g. 30% faster mentor matching */}
            <div className="project-subsection">
              <div className="pupil-image">
                <a
                  href={InstitutionAbout}
                  data-fancybox
                  data-caption="Redesigned Institution Screens"
                >
                  <img
                    src={InstitutionAbout}
                    alt={`Redesigned Institution Screens`}
                    loading="lazy"
                  />
                </a>
                <p>
                  <strong>Redesigned Institution Screens</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="project-div">
            <div className="page-subtitle">Reflection</div>
            <p>
              This project taught me the importance of designing for scalability
              and systems. By relying on a strong design system and continuous
              iteration, I created an app experience that feels modern,
              consistent, and intuitive for all stakeholders.
            </p>
            <div className="project-subsection">
              <div className="pupil-image">
                <a
                  href={HeroMockups}
                  data-fancybox
                  data-caption="Mentor Profile Screens"
                >
                  <img
                    src={HeroMockups}
                    alt={`Mentor Profile Screens`}
                    loading="lazy"
                  />
                </a>
                <p>
                  <strong>Mentor Profile Screens</strong>
                </p>
              </div>
            </div>
            {/* [image placeholder: closing full-screen mockup] */}
          </div>
        </div>
      </section>
    </div>
  );
}

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

export default PupilRedesignContent;
