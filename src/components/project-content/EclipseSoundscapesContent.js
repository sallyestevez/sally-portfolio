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
            src="https://embed.figma.com/proto/CbqocIqoua2b9Xoc1GEVxK/Eclipse-Soundscapes?page-id=0%3A1&node-id=144-1643&node-type=canvas&viewport=597%2C108%2C0.05&scaling=scale-down&content-scaling=fixed&starting-point-node-id=144%3A1643&embed-host=share" allowfullscreen> 
          </iframe>
        </div>
      </div>
      </section>
    </div>
  )
  
}

export default EclipseSoundscapesContent;
