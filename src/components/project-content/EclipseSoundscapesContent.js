import React from "react";
import ProjectData from "../ProjectData";

function EclipseSoundscapesContent() {
  return (
    <div>
      <header className="ProjectHeader">
        <div className="ProjectHeaderText">
          <h1 className="PageTitle">{ProjectData[3].title}</h1>
          <h2 className="ProjectBlurb">{ProjectData[3].summary}</h2>
        </div>
      </header>
      <section>
        <div className="ProjectContent">
          <div className="ProjectDetails">
            <h3>Project Details</h3>
            <p>Role: Lead UX Designer</p>
            <p>Duration: 6 weeks</p>
            <p>Tools: Figma, Figjam</p>
          </div>
          <div className="ProjectOverview">
            <h3>Overview</h3>
            {/* what is Discord? */}
            {/* What is the problem? */}
          </div>
          <div className="ProjectProcess">
            <h3>Process</h3>
            {/* Identify the Problem */}
            {/* Research and Analysis */}
            {/* Wireframing & Ideation */}
            {/* Visualization & Iteration */}
            {/* Prototyping & User Testing */}
          </div>
          <div className="ProjectResearchPlan">
            <h3>Research Plan</h3>
            {/* competitive analysis */}
            {/* user interviews */}
            {/* user classification */}
            {/* quotes from users */}
          </div>
          <div className="ProjectResearchSynthesis">
            <h3>Research Synthesis</h3>
            {/* user journey */}
            {/* takeaways */}
          </div>
          <div className="ProjectStoryboarding">
            <h3>Storyboarding</h3>
            {/* storyboarding */}
            {/* top solutions */}
          </div>
          <div className="ProjectLoFi">
            <h3>Low-Fidelity Concepts</h3>
            {/* wireframing */}
            {/* lo-fi prototype */}
          </div>
          <div className="ProjectUserTesting">
            <h3>User Testing</h3>
            {/* user testing */}
            {/* gathering feedback */}
          </div>
          <div className="ProjectHiFi">
            <h3>Refinement & Final Designs</h3>
            {/* final prototype */}
          </div>
          <div className="ProjectTakeaways">
            <h3>Takeaways</h3>
            {/* final prototype */}
          </div>
          <h3>Full case study coming soon!</h3>
          {/* <div className="ProjectImage--ProjectPage">
          <img
            src={ProjectData[0].img}
            alt={`${ProjectData[0].title} screenshot`}
          />
        </div> */}
          <div className="FigmaPrototypeDiv">
            <iframe
              className="FigmaPrototype"
              title="Eclipse Soundscapes"
              src="https://embed.figma.com/proto/CbqocIqoua2b9Xoc1GEVxK/Eclipse-Soundscapes?page-id=0%3A1&node-id=144-1643&node-type=canvas&viewport=597%2C108%2C0.05&scaling=scale-down&content-scaling=fixed&starting-point-node-id=144%3A1643&embed-host=share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EclipseSoundscapesContent;
