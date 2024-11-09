import React, { useState } from "react";
import Days71_80Data from "../UIChallengeData/Days71_80Data";

function Day71_80Cards() {
    const [item] = useState(Days71_80Data);
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

export default Day71_80Cards;

