import React, { useState } from "react";
import DAY_1_10_DATA from "../../UIChallengeData/Days1_10Data";

function DAY_1_10_CARDS() {
  const [item] = useState(DAY_1_10_DATA);
  return (
    <>
      <div className="creative-project-section" id="ui-project">
        {item.map((Val) => {
          return (
            <div className="creative-project">
              <div className="creative-project-image">
                <img src={Val.img} alt={`${Val.title} mockup`}></img>
              </div>
              <div className="creative-project-text">
                <div className="prompt-title">{Val.title}</div>
                <div className="prototype-link">
                  <a href={Val.prototype} className="link">
                    <p>Link to Figma prototype</p>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default DAY_1_10_CARDS;
