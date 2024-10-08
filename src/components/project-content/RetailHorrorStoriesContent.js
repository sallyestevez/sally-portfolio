import React from "react";
import ProjectData from "../ProjectData";

function RetailHorrorStoriesContent() {
  return (
    <div>
      <header className="ProjectHeader">
        <div className="ProjectHeaderText">
          <h1 className="PageTitle">{ProjectData[1].title}</h1>
          <div className="ProjectSummary">{ProjectData[1].summary}</div>
          <div className="ProjectDateCategory">
            {ProjectData[1].date} | {ProjectData[1].category}
          </div>
        </div>
        <div className="ProjectImage--ProjectPage">
          <a href={`${ProjectData[1].link}`} className="link">
            <img
              src={ProjectData[1].img}
              alt={`${ProjectData[1].title} screenshot`}
            />
          </a>
          <br></br>
          <a href={`${ProjectData[1].link}`}>
            <div className="ProjectLink">Visit the site!</div>
          </a>
        </div>
      </header>
      <section>
        <div className="ProjectContent">
          <div className="ProjectDiv ProjectDetails">
            <div className="ProjectPageSubtitle">More Information</div>
            <p>
              The player takes the role of a Walmart employee navigating
              different retail scenarios and making choices that impact the
              storyline.
            </p>
            <p>The game was made with HTML, CSS, and JavaScript.</p>
            <p>
              I also added background music to enhance the gaming experience.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RetailHorrorStoriesContent;
