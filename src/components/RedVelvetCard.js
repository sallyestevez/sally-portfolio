import React, { useState } from "react";
import RedVelvetData from "./RedVelvetData";

function RedVelvetCards() {
  const [item] = useState(RedVelvetData);
  return (
    <>
      <div className="UIPromptsSection" id="UIPrompts">
        {item.map((Val) => {
          return (
            <div className="UIProject">
              <div className="UI_IMAGE">
                <img src={Val.img} alt={`${Val.title} song titles`}></img>
              </div>
              <div className="UIProjectText">
                <div className="PromptTitle">{Val.title}</div>
              </div>
              <div className="ProjectDateCategory UIPage">
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
