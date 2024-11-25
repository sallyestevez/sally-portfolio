import React from "react";

import OtherWorkData from "./OtherWorkData";

function WeatherSoundsContent() {
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
          <a href={`${OtherWorkData[4].link}`} className="link">
            <img
              src={OtherWorkData[4].img}
              alt={`${OtherWorkData[4].title} screenshot`}
            />
          </a>
          <br></br>
          <a href={`${OtherWorkData[4].link}`}>
            <div className="ProjectLink">Visit the site!</div>
          </a>
        </div>
      </header>
      <section>
        <div className="ProjectContent">
          <div className="ProjectDiv ProjectDetails">
            <div className="ProjectPageSubtitle">More Information</div>
            <p></p>
            <h2></h2>
            <p></p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WeatherSoundsContent;
