import React from "react";
import ProjectData from "../ProjectData";

function DiscordContent() {
  return (
    <div>
      <header className="ProjectHeader">
        <div className="ProjectHeaderText">
          <h1 className="PageTitle">{ProjectData[5].title}</h1>
          <div className="ProjectSummary">{ProjectData[5].summary}</div>
          <div>
            {ProjectData[5].date} | {ProjectData[5].category}
          </div>
        </div>
        <div className="ProjectImage--ProjectPage">
          <img
            src={ProjectData[0].img}
            alt={`${ProjectData[0].title} screenshot`}
          />
        </div>
      </header>
      <section>
        <div className="ProjectContent">
          <div className="ProjectDetails">
            <h2>Project Details</h2>
            <p>
              <strong>Role:</strong> Lead UX Designer
            </p>
            <p>
              <strong>Duration:</strong> September - November 2022 (6 weeks)
            </p>
            <p>Tools: Figma, Figjam</p>
          </div>
          <div className="ProjectOverview">
            <h2>Overview</h2>
            {/* what is Discord? */}
            {/* What is the problem? */}
          </div>
          <div className="ProjectProcess">
            <h2>Process</h2>
            {/* Identify the Problem */}
            {/* Research and Analysis */}
            {/* Wireframing & Ideation */}
            {/* Visualization & Iteration */}
            {/* Prototyping & User Testing */}
          </div>
          <div className="ProjectResearchPlan">
            <h2>Research Plan</h2>
            {/* site map */}
            {/* user interviews */}
            {/* user classification */}
            {/* quotes from users */}
            {/* competitive analysis */}
          </div>
          <div className="ProjectResearchSynthesis">
            <h2>Research Synthesis</h2>
            {/* user journey */}
            {/* takeaways */}
          </div>
          <div className="ProjectStoryboarding">
            <h2>Storyboarding</h2>
            {/* storyboarding */}
            {/* feature prioritization */}
            {/* top solutions */}
          </div>
          <div className="ProjectLoFi">
            <h2>Low-Fidelity Concepts</h2>
            {/* wireframing */}
            {/* lo-fi prototype */}
          </div>
          <div className="ProjectUserTesting">
            <h2>User Testing</h2>
            {/* user testing */}
            {/* gathering feedback */}
          </div>
          <div className="ProjectHiFi">
            <h2>Refinement & Final Designs</h2>
            {/* final prototype */}
          </div>
          <div className="ProjectTakeaways">
            <h2>Takeaways</h2>
            {/* final prototype */}
          </div>
          <h2>Full case study coming soon!</h2>

          <div className="FigmaPrototypeDiv">
            <iframe
              className="FigmaPrototype"
              title="Discord File Compressor"
              src="https://embed.figma.com/proto/e1vYj4lHiAYzK7kQfaMlcc/Discord-Prototype?page-id=1%3A75&node-id=1-4174&node-type=canvas&viewport=2560%2C1086%2C0.35&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A4174&embed-host=share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DiscordContent;
