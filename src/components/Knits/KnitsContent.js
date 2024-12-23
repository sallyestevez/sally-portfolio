import React, { useState } from "react";

import OtherWorkData from "../OtherWorkData";
import KnitsData from "./KnitsData";

function KnitsContent() {
  const [item] = useState(KnitsData);
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
      </header>
      <div className="UIPromptsSection" id="UIPrompts">
        {item.map((Val) => {
          return (
            <div className="UIProject">
              <div className="UI_IMAGE">
                <img src={Val.img} alt={`${Val.title}`}></img>
              </div>
              <div className="UIProjectText">
                <div className="PromptTitle">{Val.title}</div>
                <div className="PrototypeLink">
                  <p>{Val.date}</p>
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
