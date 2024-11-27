import React from "react";

import OtherWorkData from "./OtherWorkData";

function WeatherSoundsContent() {
  return (
    <div>
      <header className="ProjectHeader">
        <div className="ProjectHeaderText">
          <h1 className="PageTitle">{OtherWorkData[3].title}</h1>
          <div className="ProjectSummary">{OtherWorkData[3].summary}</div>
          <div className="ProjectDateCategory">
            {OtherWorkData[3].date} | {OtherWorkData[3].category}
          </div>
        </div>
        <div className="ProjectImage--ProjectPage">
            <img
              src={OtherWorkData[3].img}
              alt={`${OtherWorkData[3].title} screenshot`}
            />
        </div>
      </header>
      <section>
        <div className="ProjectContent">
          <div className="ProjectDiv ProjectDetails">
            <div className="ProjectPageSubtitle">More Information</div>
            <p>under construction</p>
            <h2>coming soon</h2>
            <p></p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WeatherSoundsContent;
