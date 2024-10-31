import React from "react";
import OtherWorkData from "../OtherWorkData";

function UIContent() {
  return (
    <div>
      <header className="ProjectHeader">
        <div className="ProjectHeaderText">
          <h1 className="PageTitle">{OtherWorkData[0].title}</h1>
          <div className="ProjectSummary">{OtherWorkData[0].summary}</div>
          <div className="ProjectDateCategory">
            {OtherWorkData[0].date} | {OtherWorkData[0].category}
          </div>
        </div>
        <div className="ProjectImage--ProjectPage">
          {/* <a href={`${ProjectData[0].link}`} className="link"> */}
            <img
              src={OtherWorkData[0].img}
              alt={`${OtherWorkData[0].title} screenshot`}
            />
          {/* </a> */}
          <br></br>
          {/* <a href={`${ProjectData[0].link}`}>
            <div className="ProjectLink">Visit the site!</div>
          </a> */}
        </div>
      </header>
      <section>
        <div className="ProjectContent">
          <div className="ProjectDiv ProjectDetails">
            <div className="ProjectPageSubtitle">More Information</div>
            <p>Testing</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UIContent;
