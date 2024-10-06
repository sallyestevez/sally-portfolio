import React from "react";
import ProjectData from "../ProjectData";


function DiscordContent() {
  return (
    <div>
      <header className="ProjectHeader">
        <div className="ProjectHeaderText">
          <h1 className="PageTitle">{ProjectData[5].title}</h1>
          <h2 className="ProjectBlurb">{ProjectData[5].summary}</h2>
          <h3>{ProjectData[5].date} | {ProjectData[5].category}</h3>
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
        <div className="ProjectResearchPlan">
            <h3>Research Plan</h3>
            {/* competitive analysis */}
            {/* user interviews */}
            {/* user classification */}
            {/* quotes from users */}
        </div>
        <div className="ProjectResearchPlan">
            <h3>Research Plan</h3>
            {/* competitive analysis */}
            {/* user interviews */}
            {/* user classification */}
            {/* quotes from users */}
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
            src="https://embed.figma.com/proto/e1vYj4lHiAYzK7kQfaMlcc/Discord-Prototype?page-id=1%3A75&node-id=1-4174&node-type=canvas&viewport=2560%2C1086%2C0.35&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A4174&embed-host=share" allowfullscreen> 
          </iframe>
        </div>
      </div>
      </section>
    </div>
  )
  
}

export default DiscordContent;
