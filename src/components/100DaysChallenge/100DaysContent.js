import React, { useState } from "react";

// card files:
import DAY_1_10_CARDS from "./UIChallengeCards/Day1_10Cards";
import DAY_11_20_CARDS from "./UIChallengeCards/Day11_20Cards";
import DAY_21_30_CARDS from "./UIChallengeCards/Day21_30Cards";
import DAY_31_40_CARDS from "./UIChallengeCards/Day31_40Cards";
import DAY_41_50_CARDS from "./UIChallengeCards/Day41_50Cards";
import DAY_51_60_CARDS from "./UIChallengeCards/Day51_60Cards";
import DAY_61_70_CARDS from "./UIChallengeCards/Day61_70Cards";
import DAY_71_80_CARDS from "./UIChallengeCards/Day71_80Cards";
import DAY_81_90_CARDS from "./UIChallengeCards/Day81_90Cards";
import DAY_91_100_CARDS from "./UIChallengeCards/Day91_100Cards";

// data files
import OtherWorkData from "../OtherWorkData";
import DAY_1_10_DATA from "../UIChallengeData/Days1_10Data";
import DAY_11_20_DATA from "../UIChallengeData/Days11_20Data";
import DAY_21_30_DATA from "../UIChallengeData/Days21_30Data";
import DAY_31_40_DATA from "../UIChallengeData/Days31_40Data";
import DAY_41_50_DATA from "../UIChallengeData/Days41_50Data";
import DAY_51_60_DATA from "../UIChallengeData/Days51_60Data";
import DAY_61_70_DATA from "../UIChallengeData/Days61_70Data";
import DAY_71_80_DATA from "../UIChallengeData/Days71_80Data";
import DAY_81_90_DATA from "../UIChallengeData/Days81_90Data";
import DAY_91_100_DATA from "../UIChallengeData/Days91_100Data";

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
        <header className="ProjectHeader">
          <div className="ProjectHeaderText">
            <h1 className="PageTitle UIPage">{OtherWorkData[1].title}</h1>
            <div className="ProjectSummary UIPage">
              {OtherWorkData[1].summary}
            </div>
            <div className="ProjectDateCategory UIPage">
              {OtherWorkData[1].date} | {OtherWorkData[1].category}
            </div>
          </div>
        </header>
        <section>
          <div className="ProjectContent">
            <div className="ProjectDiv ProjectDetails">
              <div className="ProjectPageSubtitle">Project Details</div>
              <p>
                <strong>Role:</strong> UI/UX & Visual Designer
              </p>
              <p>
                <strong>Duration:</strong> December 2023 - August 2024
              </p>
              <p>
                <strong>Tools:</strong> Figma, Adobe XD
              </p>
            </div>
            <div className="ProjectDiv ProjectOverview">
              <div className="ProjectPageSubtitle">Overview</div>
              <p>
                This was a self-driven challenge aimed at improving both my
                creative and technical UI/UX skills. I designed 100 unique user
                interface components based on prompts, including web layouts,
                mobile app interfaces, and graphical elements.
              </p>
            </div>
            <div className="ProjectDiv Goals">
              <div className="ProjectPageSubtitle">Goals</div>
              <p>With this challenge, I aimed to:</p>
              <p>✴ develop a portfolio of diverse UI elements.</p>
              <p>
                ✴ improve skills in wireframing, prototyping, iteration, and
                user-centered design.
              </p>
            </div>
            <div className="ProjectDiv Process">
              <div className="ProjectPageSubtitle">Process</div>
              <p>
                For each of the 100 designs, I aimed to reach a balance of
                usability and aesthetic appeal. After the initial designs were
                completed, they were then improved through repeated iteration.
                Finally, I created prototypes for many of the designs.
              </p>
            </div>
            <div className="ProjectDiv ChallengesSolutions">
              <div className="ProjectPageSubtitle">Challenges & Solutions</div>
              <p>
                There were times when I went through creative blocks. In order
                to overcome this, I researched design inspirations and also
                experimented with unfamiliar design styles.
              </p>
            </div>
            <div className="ProjectDiv Outcomes">
              <div className="ProjectPageSubtitle">Outcomes</div>
              <p>
                Thanks to this challenge, I was able to accomplish the
                following:
              </p>
              <p>
                ✴ I gained an advanced understanding of design consistency,
                accessibility, and modern UI trends.
              </p>
              <p>
                ✴ I created designs that demonstrate adaptability for different
                design needs.
              </p>
              <p>
                ✴ I improved my prototyping skills by creating designs with
                interactive and user-friendly flows.
              </p>
            </div>
          </div>
        </section>
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
