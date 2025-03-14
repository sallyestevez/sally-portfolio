import React, { useEffect, useState, useRef } from "react";

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

  const sectionRefs = {
    section1: useRef(null),
    section2: useRef(null),
    section3: useRef(null),
    section4: useRef(null),
    section5: useRef(null),
    section6: useRef(null),
    section7: useRef(null),
    section8: useRef(null),
    section9: useRef(null),
    section10: useRef(null),
  };

  useEffect(() => {
    const detailsElements = document.querySelectorAll("details");

    detailsElements.forEach((details, index) => {
      details.addEventListener("toggle", (event) => {
        if (details.open) {
          setTimeout(() => {
            sectionRefs[`section${index + 1}`].current.scrollIntoView({
              behavior: "smooth",
            });
          }, 100);
        }
      });
    });
  });

  return (
    <>
      <div className="page-wrapper">
        <header className="project-header">
          <div className="header-text">
            <h1 className="page-title">{OtherWorkData[1].title}</h1>
            <div className="project-summary">{OtherWorkData[1].summary}</div>
            <div className="project-date-category">
              {OtherWorkData[1].date} | {OtherWorkData[1].category}
            </div>
          </div>
        </header>
        <section>
          <div className="project-content">
            <div className="project-div">
              <div className="page-subtitle">Project Details</div>
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
            <div className="project-div">
              <div className="page-subtitle">Overview</div>
              <p>
                This was a self-driven challenge aimed at improving both my
                creative and technical UI/UX skills. I designed 100 unique user
                interface components based on prompts, including web layouts,
                mobile app interfaces, and graphical elements.
              </p>
            </div>
            <div className="project-div">
              <div className="page-subtitle">Goals</div>
              <p>With this challenge, I aimed to:</p>
              <p>✴ develop a portfolio of diverse UI elements.</p>
              <p>
                ✴ improve skills in wireframing, prototyping, iteration, and
                user-centered design.
              </p>
            </div>
            <div className="project-div">
              <div className="page-subtitle">Process</div>
              <p>
                For each of the 100 designs, I aimed to reach a balance of
                usability and aesthetic appeal. After the initial designs were
                completed, they were then improved through repeated iteration.
                Finally, I created prototypes for many of the designs.
              </p>
            </div>
            <div className="project-div">
              <div className="page-subtitle">Challenges & Solutions</div>
              <p>
                There were times when I went through creative blocks. In order
                to overcome this, I researched design inspirations and also
                experimented with unfamiliar design styles.
              </p>
            </div>
            <div className="project-div">
              <div className="page-subtitle">Outcomes</div>
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
        <div className="ui-dropdown">
          <details name="open" ref={sectionRefs.section1}>
            <summary>Days 1 - 10</summary>
            <div className="details-content">
              <DAY_1_10_CARDS item={item1} />
            </div>
          </details>
          <details name="open" ref={sectionRefs.section2}>
            <summary>Days 11 - 20</summary>
            <div className="details-content">
              <DAY_11_20_CARDS item={item2} />
            </div>
          </details>
          <details name="open" ref={sectionRefs.section3}>
            <summary>Days 21 - 30</summary>
            <div className="details-content">
              <DAY_21_30_CARDS item={item3} />
            </div>
          </details>
          <details name="open" ref={sectionRefs.section4}>
            <summary>Days 31 - 40</summary>
            <div className="details-content">
              <DAY_31_40_CARDS item={item4} />
            </div>
          </details>
          <details name="open" ref={sectionRefs.section5}>
            <summary>Days 41 - 50</summary>
            <div className="details-content">
              <DAY_41_50_CARDS item={item5} />
            </div>
          </details>
          <details name="open" ref={sectionRefs.section6}>
            <summary>Days 51 - 60</summary>
            <div className="details-content">
              <DAY_51_60_CARDS item={item6} />
            </div>
          </details>
          <details name="open" ref={sectionRefs.section7}>
            <summary>Days 61 - 70</summary>
            <div className="details-content">
              <DAY_61_70_CARDS item={item7} />
            </div>
          </details>
          <details name="open" ref={sectionRefs.section8}>
            <summary>Days 71 - 80</summary>
            <div className="details-content">
              <DAY_71_80_CARDS item={item8} />
            </div>
          </details>
          <details name="open" ref={sectionRefs.section9}>
            <summary>Days 81 - 90</summary>
            <div className="details-content">
              <DAY_81_90_CARDS item={item9} />
            </div>
          </details>
          <details name="open" ref={sectionRefs.section10}>
            <summary>Days 91 - 100</summary>
            <div className="details-content">
              <DAY_91_100_CARDS item={item10} />
            </div>
          </details>
        </div>
      </div>
    </>
  );
}

export default UIContent;

// import React, { useState, useRef } from "react";

// // card files:
// import DAY_1_10_CARDS from "./UIChallengeCards/Day1_10Cards";
// import DAY_11_20_CARDS from "./UIChallengeCards/Day11_20Cards";
// import DAY_21_30_CARDS from "./UIChallengeCards/Day21_30Cards";
// import DAY_31_40_CARDS from "./UIChallengeCards/Day31_40Cards";
// import DAY_41_50_CARDS from "./UIChallengeCards/Day41_50Cards";
// import DAY_51_60_CARDS from "./UIChallengeCards/Day51_60Cards";
// import DAY_61_70_CARDS from "./UIChallengeCards/Day61_70Cards";
// import DAY_71_80_CARDS from "./UIChallengeCards/Day71_80Cards";
// import DAY_81_90_CARDS from "./UIChallengeCards/Day81_90Cards";
// import DAY_91_100_CARDS from "./UIChallengeCards/Day91_100Cards";

// // data files
// import OtherWorkData from "../OtherWorkData";
// import DAY_1_10_DATA from "../UIChallengeData/Days1_10Data";
// import DAY_11_20_DATA from "../UIChallengeData/Days11_20Data";
// import DAY_21_30_DATA from "../UIChallengeData/Days21_30Data";
// import DAY_31_40_DATA from "../UIChallengeData/Days31_40Data";
// import DAY_41_50_DATA from "../UIChallengeData/Days41_50Data";
// import DAY_51_60_DATA from "../UIChallengeData/Days51_60Data";
// import DAY_61_70_DATA from "../UIChallengeData/Days61_70Data";
// import DAY_71_80_DATA from "../UIChallengeData/Days71_80Data";
// import DAY_81_90_DATA from "../UIChallengeData/Days81_90Data";
// import DAY_91_100_DATA from "../UIChallengeData/Days91_100Data";

// function UIContent() {
//   const [item1] = useState(DAY_1_10_DATA);
//   const [item2] = useState(DAY_11_20_DATA);
//   const [item3] = useState(DAY_21_30_DATA);
//   const [item4] = useState(DAY_31_40_DATA);
//   const [item5] = useState(DAY_41_50_DATA);
//   const [item6] = useState(DAY_51_60_DATA);
//   const [item7] = useState(DAY_61_70_DATA);
//   const [item8] = useState(DAY_71_80_DATA);
//   const [item9] = useState(DAY_81_90_DATA);
//   const [item10] = useState(DAY_91_100_DATA);

//   const [visibleSection, setVisibleSection] = useState(null);

//   const sectionRefs = {
//     section1: useRef(null),
//     section2: useRef(null),
//     section3: useRef(null),
//     section4: useRef(null),
//     section5: useRef(null),
//     section6: useRef(null),
//     section7: useRef(null),
//     section8: useRef(null),
//     section9: useRef(null),
//     section10: useRef(null),
//   };

//   const toggleSection = (section) => {
//     setVisibleSection(visibleSection === section ? null : section);
//     setTimeout(() => {
//       if (sectionRefs[section].current) {
//         sectionRefs[section].current.scrollIntoView({ behavior: "smooth" });
//       }
//     }, 100); // Delay to ensure content is rendered before scrolling
//   };

//   return (
//     <>
//       <div className="page-wrapper">
//         <header className="project-header">
//           <div className="header-text">
//             <h1 className="page-title">{OtherWorkData[1].title}</h1>
//             <div className="project-summary">{OtherWorkData[1].summary}</div>
//             <div className="project-date-category">
//               {OtherWorkData[1].date} | {OtherWorkData[1].category}
//             </div>
//           </div>
//         </header>
//         <section>
//           <div className="project-content">
//             <div className="project-div">
//               <div className="page-subtitle">Project Details</div>
//               <p>
//                 <strong>Role:</strong> UI/UX & Visual Designer
//               </p>
//               <p>
//                 <strong>Duration:</strong> December 2023 - August 2024
//               </p>
//               <p>
//                 <strong>Tools:</strong> Figma, Adobe XD
//               </p>
//             </div>
//             <div className="project-div">
//               <div className="page-subtitle">Overview</div>
//               <p>
//                 This was a self-driven challenge aimed at improving both my
//                 creative and technical UI/UX skills. I designed 100 unique user
//                 interface components based on prompts, including web layouts,
//                 mobile app interfaces, and graphical elements.
//               </p>
//             </div>
//             <div className="project-div">
//               <div className="page-subtitle">Goals</div>
//               <p>With this challenge, I aimed to:</p>
//               <p>✴ develop a portfolio of diverse UI elements.</p>
//               <p>
//                 ✴ improve skills in wireframing, prototyping, iteration, and
//                 user-centered design.
//               </p>
//             </div>
//             <div className="project-div">
//               <div className="page-subtitle">Process</div>
//               <p>
//                 For each of the 100 designs, I aimed to reach a balance of
//                 usability and aesthetic appeal. After the initial designs were
//                 completed, they were then improved through repeated iteration.
//                 Finally, I created prototypes for many of the designs.
//               </p>
//             </div>
//             <div className="project-div">
//               <div className="page-subtitle">Challenges & Solutions</div>
//               <p>
//                 There were times when I went through creative blocks. In order
//                 to overcome this, I researched design inspirations and also
//                 experimented with unfamiliar design styles.
//               </p>
//             </div>
//             <div className="project-div">
//               <div className="page-subtitle">Outcomes</div>
//               <p>
//                 Thanks to this challenge, I was able to accomplish the
//                 following:
//               </p>
//               <p>
//                 ✴ I gained an advanced understanding of design consistency,
//                 accessibility, and modern UI trends.
//               </p>
//               <p>
//                 ✴ I created designs that demonstrate adaptability for different
//                 design needs.
//               </p>
//               <p>
//                 ✴ I improved my prototyping skills by creating designs with
//                 interactive and user-friendly flows.
//               </p>
//             </div>
//           </div>
//         </section>
//         <div className="ui-dropdown">
//           <div>
//             <button onClick={() => toggleSection("section1")}>
//               Days 1 - 10
//             </button>
//             <div
//               ref={sectionRefs.section1}
//               className={visibleSection === "section1" ? "" : "hidden"}
//             >
//               <DAY_1_10_CARDS item={item1} />
//             </div>
//           </div>
//           <div>
//             <button onClick={() => toggleSection("section2")}>
//               Days 11 - 20
//             </button>
//             <div
//               ref={sectionRefs.section2}
//               className={visibleSection === "section2" ? "" : "hidden"}
//             >
//               <DAY_11_20_CARDS item={item2} />
//             </div>
//           </div>
//           <div>
//             <button onClick={() => toggleSection("section3")}>
//               Days 21 - 30
//             </button>
//             <div
//               ref={sectionRefs.section3}
//               className={visibleSection === "section3" ? "" : "hidden"}
//             >
//               <DAY_21_30_CARDS item={item3} />
//             </div>
//           </div>
//           <div>
//             <button onClick={() => toggleSection("section4")}>
//               Days 31 - 40
//             </button>
//             <div
//               ref={sectionRefs.section4}
//               className={visibleSection === "section4" ? "" : "hidden"}
//             >
//               <DAY_31_40_CARDS item={item4} />
//             </div>
//           </div>
//           <div>
//             <button onClick={() => toggleSection("section5")}>
//               Days 41 - 50
//             </button>
//             <div
//               ref={sectionRefs.section5}
//               className={visibleSection === "section5" ? "" : "hidden"}
//             >
//               <DAY_41_50_CARDS item={item5} />
//             </div>
//           </div>
//           <div>
//             <button onClick={() => toggleSection("section6")}>
//               Days 51 - 60
//             </button>
//             <div
//               ref={sectionRefs.section6}
//               className={visibleSection === "section6" ? "" : "hidden"}
//             >
//               <DAY_51_60_CARDS item={item6} />
//             </div>
//           </div>
//           <div>
//             <button onClick={() => toggleSection("section7")}>
//               Days 61 - 70
//             </button>
//             <div
//               ref={sectionRefs.section7}
//               className={visibleSection === "section7" ? "" : "hidden"}
//             >
//               <DAY_61_70_CARDS item={item7} />
//             </div>
//           </div>
//           <div>
//             <button onClick={() => toggleSection("section8")}>
//               Days 71 - 80
//             </button>
//             <div
//               ref={sectionRefs.section8}
//               className={visibleSection === "section8" ? "" : "hidden"}
//             >
//               <DAY_71_80_CARDS item={item8} />
//             </div>
//           </div>
//           <div>
//             <button onClick={() => toggleSection("section9")}>
//               Days 81 - 90
//             </button>
//             <div
//               ref={sectionRefs.section9}
//               className={visibleSection === "section9" ? "" : "hidden"}
//             >
//               <DAY_81_90_CARDS item={item9} />
//             </div>
//           </div>
//           <div>
//             <button onClick={() => toggleSection("section10")}>
//               Days 91 - 100
//             </button>
//             <div
//               ref={sectionRefs.section10}
//               className={visibleSection === "section10" ? "" : "hidden"}
//             >
//               <DAY_91_100_CARDS item={item10} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default UIContent;
