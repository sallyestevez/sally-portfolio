import React, { useState } from "react";
import Days31_40Data from "../UIChallengeData/Days31_40Data";

function Day31_40Cards() {
    const [item] = useState(Days31_40Data);
  return (
    <>
      <div className="UIPromptsSection" id="UIPrompts"> 
        {item.map((Val) => {
          return (
            <div className="UIProject">
              <div className="UI_IMAGE">
                <img 
                    src={Val.img}
                    alt={`${Val.title} screenshot`}
                ></img>
              </div>
              <div className="UIProjectText">
                  <div className="PromptTitle">{Val.title}</div>
                <div className="PrototypeLink">
                <a href={Val.prototype} className="link"><p>Link to Figma prototype</p></a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Day31_40Cards;

