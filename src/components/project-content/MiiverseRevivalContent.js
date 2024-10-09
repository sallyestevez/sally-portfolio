import React from "react";
import ProjectData from "../ProjectData";

function MiiverseRevivalContent() {
  return (
    <div>
      <header className="ProjectHeader">
        <div className="ProjectHeaderText">
          <h1 className="PageTitle">{ProjectData[4].title}</h1>
          <div className="ProjectSummary">{ProjectData[4].summary}</div>
          <div className="ProjectDateCategory">
            {ProjectData[4].date} | {ProjectData[4].category}
          </div>
        </div>
        <div className="ProjectImage--ProjectPage">
          <a href={`${ProjectData[4].link}`} className="link">
            <img
              src={ProjectData[4].img}
              alt={`${ProjectData[4].title} screenshot`}
            />
          </a>
          <br></br>
          <a href={`${ProjectData[4].link}`}>
            <div className="ProjectLink">Visit the site!</div>
          </a>
        </div>
      </header>
      <section>
        <div className="ProjectContent">
          <div className="ProjectDiv ProjectDetails">
            <div className="ProjectPageSubtitle">More Information</div>
            <p>
              I wanted the user experience to feel as close to the original
              Miiverse as possible, so I replicated Miiverse's aesthetic.
            </p>
            <p>
              Users can create accounts to make their own posts, which are then
              displayed in the Activity Feed alongside posts by other users.
            </p>
            <p>
              This project was created using HTML, CSS, JavaScript, and React.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MiiverseRevivalContent;
