import React, { useState } from "react";
import RedVelvetData from "./RedVelvetData";

function RedVelvetCards() {
  const [item] = useState(RedVelvetData);
  return (
    <>
      <div className="creative-project-section" id="red-velvet-project">
        {item.map((Val) => {
          return (
            <div className="creative-project">
              <div className="creative-project-image">
                <img src={Val.img} alt={`${Val.title} song titles`}></img>
              </div>
              <div className="creative-project-text">
                <div className="prompt-title">{Val.title}</div>
              </div>
              <div className="project-date-category">
                {Val.summary} ({Val.date})
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default RedVelvetCards;
