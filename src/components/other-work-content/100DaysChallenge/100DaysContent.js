import React, { useState } from "react";

// card files:
import DAY_1_10_CARDS from "../../UIChallengeCards/Day1_10Cards";
import DAY_11_20_CARDS from "../../UIChallengeCards/Day11_20Cards";
import DAY_21_30_CARDS from "../../UIChallengeCards/Day21_30Cards";
import DAY_31_40_CARDS from "../../UIChallengeCards/Day31_40Cards";
import DAY_41_50_CARDS from "../../UIChallengeCards/Day41_50Cards";
import DAY_51_60_CARDS from "../../UIChallengeCards/Day51_60Cards";
import DAY_61_70_CARDS from "../../UIChallengeCards/Day61_70Cards";
import DAY_71_80_CARDS from "../../UIChallengeCards/Day71_80Cards";
import DAY_81_90_CARDS from "../../UIChallengeCards/Day81_90Cards";
import DAY_91_100_CARDS from "../../UIChallengeCards/Day91_100Cards";

// data files
import OtherWorkData from "../../OtherWorkData";
import DAY_1_10_DATA from "../../other-work-data/UIChallengeData/Days1_10Data";
import DAY_11_20_DATA from "../../other-work-data/UIChallengeData/Days11_20Data";
import DAY_21_30_DATA from "../../other-work-data/UIChallengeData/Days21_30Data";
import DAY_31_40_DATA from "../../other-work-data/UIChallengeData/Days31_40Data";
import DAY_41_50_DATA from "../../other-work-data/UIChallengeData/Days41_50Data";
import DAY_51_60_DATA from "../../other-work-data/UIChallengeData/Days51_60Data";
import DAY_61_70_DATA from "../../other-work-data/UIChallengeData/Days61_70Data";
import DAY_71_80_DATA from "../../other-work-data/UIChallengeData/Days71_80Data";
import DAY_81_90_DATA from "../../other-work-data/UIChallengeData/Days81_90Data";
import DAY_91_100_DATA from "../../other-work-data/UIChallengeData/Days91_100Data";

function UIContent() {
  const [item1] = useState(DAY_1_10_DATA);
  const [item2] = useState(DAY_11_20_DATA);
  const [item3] = useState(DAY_21_30_DATA);
  const [item4] = useState(DAY_31_40_DATA);
  const [item5] = useState(DAY_41_50_DATA);
  const [item6] = useState(DAY_51_60_DATA);
  const [item7] = useState(DAY_61_70_DATA);
  const [item8] = useState(DAY_71_80_DATA);
  const [item9] = useState(DAY_81_90_DATA);
  const [item10] = useState(DAY_91_100_DATA);

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
            <DAY_1_10_CARDS item={item1} />
          </details>
          <details name="open">
            <summary>Days 11 - 20</summary>
            <DAY_11_20_CARDS item={item2} />
          </details>
          <details name="open">
            <summary>Days 21 - 30</summary>
            <DAY_21_30_CARDS item={item3} />
          </details>
          <details name="open">
            <summary>Days 31 - 40</summary>
            <DAY_31_40_CARDS item={item4} />
          </details>
          <details name="open">
            <summary>Days 41 - 50</summary>
            <DAY_41_50_CARDS item={item5} />
          </details>
          <details name="open">
            <summary>Days 51 - 60</summary>
            <DAY_51_60_CARDS item={item6} />
          </details>
          <details name="open">
            <summary>Days 61 - 70</summary>
            <DAY_61_70_CARDS item={item7} />
          </details>
          <details name="open">
            <summary>Days 71 - 80</summary>
            <DAY_71_80_CARDS item={item8} />
          </details>
          <details name="open">
            <summary>Days 81 - 90</summary>
            <DAY_81_90_CARDS item={item9} />
          </details>
          <details name="open">
            <summary>Days 91 - 100</summary>
            <DAY_91_100_CARDS item={item10} />
          </details>
        </div>
      </div>
    </>
  );
}

export default UIContent;
