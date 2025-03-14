import React from "react";

import OtherWorkData from "./OtherWorkData";

function SunAndLOONAContent() {
  return (
    <div className="project-wrapper">
      <header className="project-header">
        <div className="header-text">
          <h1 className="page-title">{OtherWorkData[7].title}</h1>
          <div className="project-summary">{OtherWorkData[7].summary}</div>
          <div className="project-date-category">
            {OtherWorkData[7].date} | {OtherWorkData[7].category}
          </div>
        </div>
        <div className="project-page-image">
          <a
            href="https://sun-and-loona.netlify.app/?sunMoonData=sun"
            className="link"
          >
            <img
              src={OtherWorkData[7].img}
              alt={`${OtherWorkData[7].title} screenshot`}
              loading="lazy"
            />
          </a>
          <br></br>
          <div className="project-link">
            <a href="https://sun-and-loona.netlify.app/?sunMoonData=sun">
              Visit the site!
            </a>
          </div>
        </div>
      </header>
      <section>
        <div className="project-content">
          <div className="project-div">
            <div className="page-subtitle">Project Details</div>
            <p>
              <strong>Role:</strong> Front-End Developer
            </p>
            <p>
              <strong>Duration:</strong> October 2022 (2.5 weeks)
            </p>
            <p>
              <strong>Tools:</strong> HTML, CSS, JavaScript, React, Astronomy
              API
            </p>
          </div>
          <div className="project-div">
            <div className="page-subtitle">Overview</div>
            <p>
              Sun and LOONA is a React-based web application blending astronomy
              and music. It combines real-time sun and moon information with
              LOONA song suggestions that are tailored to the time of day.
            </p>
          </div>
          <div className="project-div">
            <div className="page-subtitle">Key Features</div>
            <div className="project-subsection">
              <h2>Astronomy Data Integration</h2>
              <p>
                ✴ Displays real-time sunrise, sunset, moonrise, moonset, and day
                length using an API.
              </p>
            </div>
            <div className="project-subsection">
              <h2>Song Recommendations</h2>
              <p>
                ✴ Suggests a LOONA song based on the current hour, featuring
                album, running time, and genre information.
              </p>
            </div>
          </div>
          <div className="project-div">
            <div className="page-subtitle">Challenges & Solutions</div>
            <p>
              I was initially unsure how to manage hourly song selections while
              keeping them organized. I resolved this using a JSON data file to
              properly maintain song details.
            </p>
          </div>
          <div className="project-div">
            <div className="page-subtitle">Outcomes</div>
            <p>
              ✴ I delivered an engaging application merging music and astronomy
              with LOONA's moon theme. :)
            </p>
            <p>
              ✴ I was able to strengthen my skills in React development and API
              integration.
            </p>
            <p>✴ I received positive feedback for my concept and execution.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SunAndLOONAContent;
