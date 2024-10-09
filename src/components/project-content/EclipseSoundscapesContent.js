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
          <div className="ProjectDiv ProjectDetails">
            <div className="ProjectPageSubtitle">Project Details</div>
            <p>Role: UX Researcher & Designer</p>
            <p>Duration: November - December 2022 (6 weeks)</p>
            <p>Tools: Figma, Figjam</p>
          </div>
          <div className="ProjectDiv ProjectInformation">
            <div className="ProjectPageSubtitle">More Information</div>
            <p>
              For this project, my team and I focused on enhancing the
              accessibility of a field researcher training page for older
              audiences.
            </p>
            <p>
              We gathered insights by conducting user interviews with
              individuals aged 55 and older.
            </p>
            <p>
              We optimized navigation, typography, and contrast ratios to create
              a user-friendly interface that complies with WCAG guidelines.
            </p>
            <p>
              We created wireframes and then used them to build a prototype in
              Figma.
            </p>
          </div>
          <h2 className="CaseStudyText">Full case study coming soon!</h2>

          {/* <div className="ProjectDiv ProjectOverview">
            <div className="ProjectPageSubtitle">Overview</div> */}
          {/* what is Discord? */}
          {/* What is the problem? */}
          {/* </div>
          <div className="ProjectProcess">
            <h3>Process</h3> */}
          {/* Identify the Problem */}
          {/* Research and Analysis */}
          {/* Wireframing & Ideation */}
          {/* Visualization & Iteration */}
          {/* Prototyping & User Testing */}
          {/* </div>
          <div className="ProjectResearchPlan">
            <h3>Research Plan</h3> */}
          {/* competitive analysis */}
          {/* user interviews */}
          {/* user classification */}
          {/* quotes from users */}
          {/* </div>
          <div className="ProjectResearchSynthesis">
            <h3>Research Synthesis</h3> */}
          {/* user journey */}
          {/* takeaways */}
          {/* </div>
          <div className="ProjectStoryboarding">
            <h3>Storyboarding</h3> */}
          {/* storyboarding */}
          {/* top solutions */}
          {/* </div>
          <div className="ProjectLoFi">
            <h3>Low-Fidelity Concepts</h3> */}
          {/* wireframing */}
          {/* lo-fi prototype */}
          {/* </div>
          <div className="ProjectUserTesting">
            <h3>User Testing</h3> */}
          {/* user testing */}
          {/* gathering feedback */}
          {/* </div>
          <div className="ProjectHiFi">
            <h3>Refinement & Final Designs</h3> */}
          {/* final prototype */}
          {/* </div>
          <div className="ProjectTakeaways">
            <h3>Takeaways</h3> */}
          {/* final prototype */}
          {/* </div> */}
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
