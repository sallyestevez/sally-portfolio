import React from "react";

import OtherWorkData from "./OtherWorkData";

function CosmicHarmoniesContent() {
    return (
        <div>
          <header className="ProjectHeader">
            <div className="ProjectHeaderText">
              <h1 className="PageTitle">{OtherWorkData[2].title}</h1>
              <div className="ProjectSummary">{OtherWorkData[2].summary}</div>
              <div className="ProjectDateCategory">
                {OtherWorkData[2].date} | {OtherWorkData[2].category}
              </div>
            </div>
            <div className="ProjectImage--ProjectPage">
                <img
                  src={OtherWorkData[2].img}
                  alt={`${OtherWorkData[2].title} screenshot`}
                />
            </div>
          </header>
          <section>
            <div className="ProjectContent">
              <div className="ProjectDiv ProjectDetails">
                <div className="ProjectPageSubtitle">More Information</div>
                <p>coming soon</p>
                <h2>under construction</h2>
                <p></p>
              </div>
            </div>
          </section>
        </div>
      );
}

export default CosmicHarmoniesContent