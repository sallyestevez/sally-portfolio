import React, { useState } from "react";

import OtherWorkData from "../OtherWorkData";
import KnitsData from "./KnitsData";

function KnitsContent() {
  const [item] = useState(KnitsData);
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
      </header>
      <div className="KnitsSection">
        {item.map((Val) => {
          return (
            <div className="UIProject">
              <div className="UI_IMAGE">
                <img src={Val.img} alt={`${Val.title}`}></img>
              </div>
              <div className="UIProjectText">
                <div className="PromptTitle"><a href={Val.link} className="link">
                {Val.title}
                    </a></div>
                <div className="ProjectDateCategory">
                    {Val.date}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default KnitsContent;
