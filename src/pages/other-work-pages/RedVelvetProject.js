import React, { useState } from "react";
import RedVelvetCards from "../../components/RedVelvetCard";
import RedVelvetData from "../../components/RedVelvetData";
import OtherWorkData from "../../components/OtherWorkData";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

// USE SAME FORMAT FOR 'OTHER WORK' PAGE

function RedVelvetProject() {
  const [item] = useState(RedVelvetData);
  return (
    <>
      <Header />
      <div className="PageWrapper">
        <div className="ProjectHeaderText">
          <h1 className="PageTitle UIPage">{OtherWorkData[1].title}</h1>
          <div className="ProjectSummary UIPage">
            {OtherWorkData[1].summary}
          </div>
          <div className="ProjectDateCategory UIPage">
            {OtherWorkData[1].date} | {OtherWorkData[1].category}
          </div>
          <div className="ProjectImage--ProjectPage">
            <a href="https://www.figma.com/design/XOj8O6ZYMrsVKv4eGwnC73/Red-Velvet?m=auto&t=RIleRXTjjHsQrWaD-1">
              <div className="ProjectLink">Access the Figma file!</div>
            </a>
          </div>
        </div>
        <section>
          <div className="ProjectContent">
            <div className="ProjectDiv ProjectDetails">
              <div className="ProjectPageSubtitle">Project Details</div>
              <p>
                <strong>Role:</strong> Visual Designer
              </p>
              <p>
                <strong>Duration:</strong> Winter 2023 - Spring 2024
              </p>
              <p>
                <strong>Tools:</strong> Figma, various font websites
              </p>
            </div>
            <div className="ProjectDiv ProjectDetails">
              <div className="ProjectPageSubtitle">Overview</div>
              <p>
                With this typography challenge, I focused on creating unique
                typographic styles tailored to songs by the K-Pop group Red
                Velvet. Each design captured the mood and theme of the track,
                and I aimed to align typography with emotional tone.
              </p>
              <p>
                I was inspired by the unique typographic styles for songs by the
                K-Pop group Billlie.
              </p>
              <div className="ProjectPageSubtitle">Process</div>
              <p>
                ✴ <strong>Research & Inspiration: </strong>
              </p>
              <p>
                ✴ <strong>Design Execution: </strong>
              </p>
              <p>
                ✴ <strong>Cohesion: </strong>
              </p>
              <p>
                ✴{" "}
                <strong>
                  Presentation: All of the designs were compiled in a Figma
                  file.
                </strong>
              </p>
              <div className="ProjectPageSubtitle">Challenges & Solutions</div>
              <p></p>
              <div className="ProjectPageSubtitle">Takeaways</div>
              <p></p>
            </div>
          </div>
        </section>
        {/* INCLUDE BACKGROUND INFORMATION ABOUT PROJECT - CAN USE 
        INFO FROM RESUME DESCRIPTION */}
        <RedVelvetCards item={item} />
      </div>
      <Footer />
    </>
  );
}

export default RedVelvetProject;
