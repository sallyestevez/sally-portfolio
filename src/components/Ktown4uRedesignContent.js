import React from "react";
import OtherWorkData from "./OtherWorkData";

function Ktown4uRedesignContent() {
  return (
    <div className="project-wrapper">
      <header className="project-header">
        <div className="header-text">
          <h1 className="page-title">{OtherWorkData[0].title}</h1>
          <h2 className="project-summary">{OtherWorkData[0].summary}</h2>
          <div className="project-date-category">
            {OtherWorkData[0].date} | {OtherWorkData[0].category}
          </div>
        </div>
      </header>
      <section>
        <div className="project-content">
          <div className="project-div">
            <div className="page-subtitle">Overview</div>
            <div className="project-subsection">
              <p>
                I am currently working on a comprehensive overhaul of the
                Ktown4u website to enhance the user experience, visual appeal,
                and functionality.
              </p>
            </div>
            <div className="project-subsection">
              <p>
                Ktown4u is a popular online store for K-pop merchandise, but its
                current design lacks user-friendliness and modern aesthetics.
              </p>
            </div>
            <div className="project-subsection">
              <p>
                By conducting research and usability testing, I identified key
                pain points and gathered insights to inform the redesign.
              </p>
            </div>
            <div className="project-subsection">
              <p>
                I'm developing wireframes, prototypes, and high-fidelity mockups
                using Figma, focusing on improving navigation and information
                architecture.
              </p>
            </div>
            <div className="project-subsection">
              <p>
                I am not affiliated with Ktown4u. This redesign is just for fun!
              </p>
            </div>
          </div>
          <h2 className="case-study-text">
            Full case study coming soon! A working prototype can be seen below.
          </h2>
          <div className="figma-prototype-div">
            <iframe
              className="figma-prototype"
              title="Ktown4u Redesign"
              src="https://embed.figma.com/proto/ObFPCNRp8v4ZXWIhluzx73/Ktown4u-Prototype?page-id=30%3A2432&node-id=185-4804&node-type=canvas&viewport=781%2C271%2C0.1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=185%3A4804&embed-host=share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Ktown4uRedesignContent;
