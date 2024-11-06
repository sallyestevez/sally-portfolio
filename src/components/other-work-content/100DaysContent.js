import React, { useState } from "react";
import Day1_10Cards from "../UIChallengeCards/Day1_10Cards";
import Days1_10Data from "../UIChallengeData/Days1_10Data";
import OtherWorkData from "../OtherWorkData";


function UIContent() {
  const [item] = useState(Days1_10Data);
  return (
    <>
      <div className="PageWrapper">
      <div className="ProjectHeaderText">
        <h1 className="PageTitle UIPage">{OtherWorkData[0].title}</h1>
        <div className="ProjectSummary UIPage">{OtherWorkData[0].summary}</div>
          <div className="ProjectDateCategory UIPage">
            {OtherWorkData[0].date} | {OtherWorkData[0].category}
          </div>
        </div>
        <div className="UIDropdown">
        <details open name="open">
          <summary>Days 1 - 10</summary>
          <Day1_10Cards item={item} />
        </details>
        {/* <details name="open">
          <summary>Days 11 - 20</summary>
          <Day1_10Cards item={item} />
        </details> */}
        </div>
        
      </div>
    </>
  );
}

export default UIContent;
