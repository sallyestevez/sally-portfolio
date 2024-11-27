import React from "react";

import OtherWorkData from "./OtherWorkData";

function SunAndLOONAContent() {
    return (
        <div>
          <header className="ProjectHeader">
            <div className="ProjectHeaderText">
              <h1 className="PageTitle">{OtherWorkData[5].title}</h1>
              <div className="ProjectSummary">{OtherWorkData[5].summary}</div>
              <div className="ProjectDateCategory">
                {OtherWorkData[5].date} | {OtherWorkData[5].category}
              </div>
            </div>
            <div className="ProjectImage--ProjectPage">
              <a href="https://sun-and-loona.netlify.app/" className="link">
                <img
                  src={OtherWorkData[5].img}
                  alt={`${OtherWorkData[5].title} screenshot`}
                />
              </a>
              <br></br>
              <a href="https://sun-and-loona.netlify.app/">
                <div className="ProjectLink">Visit the site!</div>
              </a>
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

export default SunAndLOONAContent