import React, { useState } from "react";
import DAY_41_50_DATA from "../../UIChallengeData/Days41_50Data";

function Day41_50Cards() {
  const [item] = useState(DAY_41_50_DATA);
  return (
    <>
      <div className="UIPromptsSection" id="UIPrompts">
        {item.map((Val) => {
          return (
            <div className="UIProject">
              <div className="UI_IMAGE">
                <img src={Val.img} alt={`${Val.title} mockup`}></img>
              </div>
              <div className="UIProjectText">
                <div className="PromptTitle">{Val.title}</div>
                <div className="PrototypeLink">
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

export default Day41_50Cards;
