import React, { useState } from "react";
import Days1_10Data from "../UIChallengeData/Days1_10Data";

// USE SAME FORMAT FOR 'OTHER WORK' PAGE

function Day1_10Cards() {
    const [item] = useState(Days1_10Data);
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

export default Day1_10Cards;

