import React from "react";
// import { useParams } from "react-router";
import ProjectData from "../components/ProjectData";
import Header from "../components/Header";
// import Footer

function Ktown4uRedesignProject() {
  //   const { id } = useParams();

  //   const projectData = ProjectData.find((project) => project.id === id);

  return (
    <>
      <main className="pageWrapper">
        <Header />
        <div>
          <header className="ProjectHeader">
            <div className="ProjectHeaderText">
              <h1 className="PageTitle">{ProjectData[0].title}</h1>
              <h2 className="ProjectBlurb">{ProjectData[0].summary}</h2>
            </div>
          </header>
          <section>
          <div className="ProjectContent">
            <h3>Full case study coming soon!</h3>
            {/* <div className="ProjectImage--ProjectPage">
              <img
                src={ProjectData[0].img}
                alt={`${ProjectData[0].title} screenshot`}
              />
            </div> */}
            <div className="FigmaPrototypeDiv">
              <iframe 
                className="FigmaPrototype"
                src="https://embed.figma.com/proto/ObFPCNRp8v4ZXWIhluzx73/Ktown4u-Prototype?page-id=30%3A2432&node-id=185-4804&node-type=canvas&viewport=781%2C271%2C0.1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=185%3A4804&embed-host=share" allowfullscreen> 
              </iframe>
            </div>
          </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default Ktown4uRedesignProject;
