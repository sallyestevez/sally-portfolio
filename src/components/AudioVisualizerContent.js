import React from "react";

import OtherWorkData from "./OtherWorkData";

function AudioVisualizerContent() {
    return (
        <div>
          <header className="ProjectHeader">
            <div className="ProjectHeaderText">
              <h1 className="PageTitle">{OtherWorkData[4].title}</h1>
              <div className="ProjectSummary">{OtherWorkData[4].summary}</div>
              <div className="ProjectDateCategory">
                {OtherWorkData[4].date} | {OtherWorkData[4].category}
              </div>
            </div>
            <div className="ProjectImage--ProjectPage">
                <img
                  src={OtherWorkData[4].img}
                  alt={`${OtherWorkData[4].title} screenshot`}
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

export default AudioVisualizerContent