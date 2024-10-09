import React from "react";
import ProjectData from "../ProjectData";

function VisitMiraContent() {
  return (
    <div>
      <header className="ProjectHeader">
        <div className="ProjectHeaderText">
          <h1 className="PageTitle">{ProjectData[6].title}</h1>
          <div className="ProjectSummary">{ProjectData[6].summary}</div>
          <div className="ProjectDateCategory">
            {ProjectData[6].date} | {ProjectData[6].category}
          </div>
        </div>
        <div className="ProjectImage--ProjectPage">
          <a href={`${ProjectData[6].link}`} className="link">
            <img
              src={ProjectData[6].img}
              alt={`${ProjectData[6].title} screenshot`}
            />
          </a>
          <br></br>
          <a href={`${ProjectData[6].link}`}>
            <div className="ProjectLink">Visit the site!</div>
          </a>
        </div>
      </header>
      <section>
        <div className="ProjectContent">
          <div className="ProjectDiv ProjectDetails">
            <div className="ProjectPageSubtitle">More Information</div>
            <p>
              This is a "travel website" for the fictional planet Mira from the
              video game Xenoblade Chronicles X.
            </p>
            <p>
              There is a separate page for each in-game region (for a total of
              5) and a home page.
            </p>
            <p>
              The website was created using HTML, CSS, and JavaScript. It also
              uses the Fancybox JavaScript library.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default VisitMiraContent;
