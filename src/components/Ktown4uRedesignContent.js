import React from "react";
import OtherWorkData from "./OtherWorkData";

function Ktown4uRedesignContent() {
  return (
    <div>
      <header className="ProjectHeader">
        <div className="ProjectHeaderText">
          <h1 className="PageTitle">{OtherWorkData[0].title}</h1>
          <h2 className="ProjectBlurb">{OtherWorkData[0].summary}</h2>
          <div className="ProjectDateCategory UIPage">
            {OtherWorkData[0].date} | {OtherWorkData[0].category}
          </div>
        </div>
      </header>
      <section>
        <div className="ProjectContent">
          <div className="ProjectDiv ProjectDetails">
            <div className="ProjectPageSubtitle">Overview</div>
            <p>
              I am currently working on a comprehensive overhaul of the Ktown4u
              website to enhance the user experience, visual appeal, and
              functionality.
            </p>
            <p>
              By conducting research and usability testing, I identified key
              pain points and gathered insights to inform the redesign.
            </p>
            <p>
              I'm developing wireframes, prototypes, and high-fidelity mockups
              using Figma, focusing on improving navigation and information
              architecture.
            </p>
            <p>
              I am not affiliated with Ktown4u. This redesign is just for fun!
            </p>
          </div>
          <h2 className="CaseStudyText">
            Full case study coming soon! A working prototype can be seen below.
          </h2>
          <div className="FigmaPrototypeDiv">
            <iframe
              className="FigmaPrototype"
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
