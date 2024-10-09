import React from "react";
import ProjectData from "../ProjectData";

function KirbysCornerContent() {
  return (
    <div>
      <header className="ProjectHeader">
        <div className="ProjectHeaderText">
          <h1 className="PageTitle">{ProjectData[2].title}</h1>
          <div className="ProjectSummary">{ProjectData[2].summary}</div>
          <div className="ProjectDateCategory">
            {ProjectData[2].date} | {ProjectData[2].category}
          </div>
        </div>
        <div className="ProjectImage--ProjectPage">
          <a href={`${ProjectData[2].link}`} className="link">
            <img
              src={ProjectData[2].img}
              alt={`${ProjectData[2].title} screenshot`}
            />
          </a>
          <br></br>
          <a href={`${ProjectData[2].link}`}>
            <div className="ProjectLink">Visit the site!</div>
          </a>
        </div>
      </header>
      <section>
        <div className="ProjectContent">
          <div className="ProjectDiv ProjectDetails">
            <div className="ProjectPageSubtitle">More Information</div>
            <p>
              The site features detailed information (written by me!) about
              games, characters, and lore, presented through a visually
              appealing and user-friendly interface.
            </p>
            <p>The website was created using HTML, CSS, and JavaScript.</p>
            <p>
              To add on to the site's interactivity, I included a music player
              and a quiz.
            </p>
            <p>
              This was my Senior Project! I was in charge of everything related
              to the project, from its conception to launch.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default KirbysCornerContent;
