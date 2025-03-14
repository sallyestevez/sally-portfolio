import React, { useState } from "react";

import OtherWorkData from "../OtherWorkData";
import KnitsData from "./KnitsData";

function KnitsContent() {
  const [item] = useState(KnitsData);
  return (
    <div className="project-wrapper">
      <header className="project-header">
        <div className="header-text">
          <h1 className="page-title">{OtherWorkData[5].title}</h1>
          <div className="project-summary">{OtherWorkData[5].summary}</div>
          <div className="project-date-category">
            {OtherWorkData[5].date} | {OtherWorkData[5].category}
          </div>
        </div>
      </header>
      <div className="creative-project-section" id="knits-project">
        {item.map((Val) => {
          return (
            <div className="creative-project">
              <div className="creative-project-image">
                <img src={Val.img} alt={`${Val.title}`}></img>
              </div>
              <div className="creative-project-text">
                <div className="prompt-title">
                  <a href={Val.link} className="link">
                    {Val.title}
                  </a>
                </div>
                <div className="project-date-category">{Val.date}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default KnitsContent;
