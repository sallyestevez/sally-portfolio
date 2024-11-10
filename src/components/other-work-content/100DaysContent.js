import React, { useState } from "react";

// card files:
import Day1_10Cards from "../UIChallengeCards/Day1_10Cards";
import Day11_20Cards from "../UIChallengeCards/Day11_20Cards";
import Day21_30Cards from "../UIChallengeCards/Day21_30Cards";
import Day31_40Cards from "../UIChallengeCards/Day31_40Cards";
import Day41_50Cards from "../UIChallengeCards/Day41_50Cards";
import Day51_60Cards from "../UIChallengeCards/Day51_60Cards";
import Day61_70Cards from "../UIChallengeCards/Day61_70Cards";
import Day71_80Cards from "../UIChallengeCards/Day71_80Cards";
import Day81_90Cards from "../UIChallengeCards/Day81_90Cards";
import Day91_100Cards from "../UIChallengeCards/Day91_100Cards";

// data files
import OtherWorkData from "../OtherWorkData";
import Days1_10Data from "../UIChallengeData/Days1_10Data";
import Days11_20Data from "../UIChallengeData/Days11_20Data";
import Days21_30Data from "../UIChallengeData/Days21_30Data";
import Days31_40Data from "../UIChallengeData/Days31_40Data";
import Days41_50Data from "../UIChallengeData/Days41_50Data";
import Days51_60Data from "../UIChallengeData/Days51_60Data";
import Days61_70Data from "../UIChallengeData/Days61_70Data";
import Days71_80Data from "../UIChallengeData/Days71_80Data";
import Days81_90Data from "../UIChallengeData/Days81_90Data";
import Days91_100Data from "../UIChallengeData/Days91_100Data";

function UIContent() {
  const [item1] = useState(Days1_10Data);
  const [item2] = useState(Days11_20Data);
  const [item3] = useState(Days21_30Data);
  const [item4] = useState(Days31_40Data);
  const [item5] = useState(Days41_50Data);
  const [item6] = useState(Days51_60Data);
  const [item7] = useState(Days61_70Data);
  const [item8] = useState(Days71_80Data);
  const [item9] = useState(Days81_90Data);
  const [item10] = useState(Days91_100Data);

  return (
    <>
      <div className="PageWrapper">
        <div className="ProjectHeaderText">
          <h1 className="PageTitle UIPage">{OtherWorkData[0].title}</h1>
          <div className="ProjectSummary UIPage">
            {OtherWorkData[0].summary}
          </div>
          <div className="ProjectDateCategory UIPage">
            {OtherWorkData[0].date} | {OtherWorkData[0].category}
          </div>
        </div>
        <div className="UIDropdown">
          <details open name="open">
            <summary>Days 1 - 10</summary>
            <Day1_10Cards item={item1} />
          </details>
          <details name="open">
            <summary>Days 11 - 20</summary>
            <Day11_20Cards item={item2} />
          </details>
          <details name="open">
            <summary>Days 21 - 30</summary>
            <Day21_30Cards item={item3} />
          </details>
          <details name="open">
            <summary>Days 31 - 40</summary>
            <Day31_40Cards item={item4} />
          </details>
          <details name="open">
            <summary>Days 41 - 50</summary>
            <Day41_50Cards item={item5} />
          </details>
          <details name="open">
            <summary>Days 51 - 60</summary>
            <Day51_60Cards item={item6} />
          </details>
          <details name="open">
            <summary>Days 61 - 70</summary>
            <Day61_70Cards item={item7} />
          </details>
          <details name="open">
            <summary>Days 71 - 80</summary>
            <Day71_80Cards item={item8} />
          </details>
          <details name="open">
            <summary>Days 81 - 90</summary>
            <Day81_90Cards item={item9} />
          </details>
          <details name="open">
            <summary>Days 91 - 100</summary>
            <Day91_100Cards item={item10} />
          </details>
        </div>
      </div>
    </>
  );
}

export default UIContent;
