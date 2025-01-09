import React, { useState } from "react";
import OtherWorkData from "../../components/OtherWorkData";
import RedVelvetCards from "../../components/RedVelvetCard";
import RedVelvetData from "../../components/RedVelvetData";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PrevNextOtherWork from "../../components/PrevNextOtherWork";

function RedVelvetProject() {
  const [item] = useState(RedVelvetData);
  return (
    <>
      <Header />
      <div className="PageWrapper">
        <div className="ProjectHeaderText">
          <h1 className="PageTitle UIPage">{OtherWorkData[2].title}</h1>
          <div className="ProjectSummary UIPage">
            {OtherWorkData[2].summary}
          </div>
          <div className="ProjectDateCategory UIPage">
            {OtherWorkData[2].date} | {OtherWorkData[2].category}
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
                Velvet. I aimed to capture the mood and theme of the songs with
                each design.
              </p>
              <p>
                I was inspired by the unique typographic styles for songs by the
                K-Pop group Billlie.
              </p>
              <div className="ProjectPageSubtitle">Process</div>
              <p>
                ✴ <strong>Research & Inspiration: </strong>I started by looking
                into each song's lyrical and musical content. This helped me
                with the font selection for each track.
              </p>
              <p>
                ✴ <strong>Design Execution: </strong>For each track, I was very
                careful when selecting fonts and text alignment, making sure
                that these elements matched the overall mood. I went with bold
                and playful fonts for Red Velvet's more upbeat and quirky tracks
                and with softer and lighter fonts for their quieter songs. I
                experimented with layout and spacing variations until the result
                was something that represented the song.
              </p>
              <p>
                ✴ <strong>Cohesion & Presentation: </strong>The designs were
                compiled in a Figma file. All of the songs that appear on one
                album are grouped. The color schemes were chosen to align with
                the album artwork and other promotional materials.
              </p>
              <div className="ProjectPageSubtitle">Challenges & Solutions</div>
              <p>
                One significant challenge was maintaining readability without
                sacrificing aesthetic appeal. I used iteration to solve this
                issue, making adjustments to font size and spacing to ensure
                clarity.
              </p>
              <div className="ProjectPageSubtitle">Takeaways</div>
              <p>
                This project helped strengthen my typography and design skills,
                as well as my ability to translate musical and emotional themes
                into engaging visual designs.
              </p>
            </div>
          </div>
        </section>
        <RedVelvetCards item={item} />
      </div>
      <PrevNextOtherWork
        id1={OtherWorkData[1].id}
        title1={OtherWorkData[1].title}
        id2={OtherWorkData[3].id}
        title2={OtherWorkData[3].title}
      />
      <Footer />
    </>
  );
}

export default RedVelvetProject;
