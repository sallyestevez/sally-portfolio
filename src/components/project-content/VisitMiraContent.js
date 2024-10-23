import React from "react";
import ProjectData from "../ProjectData";

function VisitMiraContent() {
  return (
    <div>
      <header className="ProjectHeader">
        <div className="ProjectHeaderText">
          <h1 className="PageTitle">{ProjectData[6].title}</h1>
          <div className="ProjectDateCategory">
            Inspired by Xenoblade Chronicles X
          </div>
          <div className="ProjectSummary">{ProjectData[6].summary}</div>
          <div className="ProjectDateCategory">
            {ProjectData[6].date} | {ProjectData[6].category}
          </div>
        </div>
        <div className="ProjectImage--ProjectPage">
          <a href={`${ProjectData[6].link}`} className="link">
            <img
              src={ProjectData[6].img}
              alt={`${ProjectData[6].title} screenshot`}
            />
          </a>
          <br></br>
          <a href={`${ProjectData[6].link}`}>
            <div className="ProjectLink">Visit the site!</div>
          </a>
        </div>
      </header>
      <section>
        <div className="ProjectContent">
          <div className="ProjectDiv ProjectDetails">
            <div className="ProjectPageSubtitle">
              Have you ever wanted to be stuck on a different planet?
            </div>
            <h2 className="quote">
              If so, today's your lucky day, because we're finally introducing
              Visit Mira!
            </h2>
            <p>
              VisitMira.com is the latest travel website for the fictional
              planet of Mira from Xenoblade Chronicles X! Get ready to explore a
              planet brimming with excitement, stunning landscapes, and danger
              (!!!), perfect for those who want something new!
            </p>
            <h2>What You'll Discover</h2>
            <p>
              ✴ <strong>Five Unique Regions: </strong>From the lush jungles of
              Noctilum to the scorching volcanoes of Cauldros, each region has its 
              own charm and secrets!
            </p>
            <p>
              ✴ <strong>Interactive Experience: </strong>Navigate through the
              site to learn about each location.
            </p>
            <p>
              ✴ <strong>✨Stunning Visuals✨: </strong>Breathtaking images of
              Mira's beautiful and diverse landscapes, all presented with the
              help of the Fancybox library.
            </p>

            <h2>Tech Stack</h2>
            <p>HTML, CSS, JavaScript</p>

            <h2>Special Features</h2>
            <p>
              Fancybox integration for high-quality images, immersive pages for
              each of Mira's unique regions
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default VisitMiraContent;
