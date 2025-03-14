import React from "react";
import ProjectData from "../ProjectData";

function VisitMiraContent() {
  return (
    <div className="project-wrapper">
      <header className="project-header">
        <div className="header-text">
          <h1 className="page-title">{ProjectData[5].title}</h1>
          <div className="project-date-category">
            Inspired by Xenoblade Chronicles X
          </div>
          <div className="project-summary">{ProjectData[5].summary}</div>
          <div className="project-date-category">
            {ProjectData[5].date} | {ProjectData[5].category}
          </div>
        </div>
        <div className="project-page-image">
          <a href={`${ProjectData[5].link}`} className="link">
            <img
              src={ProjectData[5].img}
              alt={`${ProjectData[5].title} screenshot`}
              loading="lazy"
            />
          </a>
          <br></br>
          <div className="project-link">
            <a href={`${ProjectData[5].link}`}>Visit the site!</a>
          </div>
        </div>
      </header>
      <section>
        <div className="project-content">
          <div className="project-div">
            <div className="page-subtitle">
              Have you ever wanted to be stuck on a different planet?
            </div>
            <h2 className="quote">
              If so, today's your lucky day, because we're finally introducing
              Visit Mira!
            </h2>
            <div className="project-subsection">
              <p>
                VisitMira.com is the latest travel website for the fictional
                planet of Mira from Xenoblade Chronicles X! Get ready to explore
                a planet brimming with excitement, stunning landscapes, and
                danger (!!!), perfect for those who want something new!
              </p>
            </div>
            <div className="project-subsection">
              <h2>What You'll Discover</h2>
              <p>
                ✴ <strong>Five Unique Regions: </strong>From the lush jungles of
                Noctilum to the scorching volcanoes of Cauldros, each region has
                its own charm and secrets!
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
            </div>
            <div className="project-subsection">
              <h2>Tech Stack</h2>
              <p>HTML, CSS, JavaScript</p>
            </div>
            <div className="project-subsection">
              <h2>Special Features</h2>
              <p>✴ Fancybox integration for high-quality images</p>
              <p>✴ Immersive pages for each of Mira's unique regions</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default VisitMiraContent;
