import React from "react";
// import { useParams } from "react-router";
import ProjectData from "../components/ProjectData";
import Header from "../components/Header";

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
          <div className="ProjectContent">
            <h3>Full case study coming soon!</h3>
            <div className="ProjectImage--ProjectPage">
              <img
                src={ProjectData[0].img}
                alt={`${ProjectData[0].title} screenshot`}
              />
            </div>
          </div>
        </div>
        <section>
          <div className="project--content"></div>
        </section>
      </main>
    </>
  );
}

export default Ktown4uRedesignProject;
