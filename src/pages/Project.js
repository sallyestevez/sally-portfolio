import React from "react";
import { useParams } from "react-router";
import ProjectData from "../components/ProjectData";
import Header from "../components/Header";

function Project() {
  const { id } = useParams();

  const projectData = ProjectData.find((project) => project.id === id);

  return (
    <>
      <main className="pageWrapper">
        <Header />
        <div>
          <header className="project--header">
            <div className="project-header-text">
              <h1 className="PageTitle">{projectData.title}</h1>
              <h2 className="projectBlurb">{projectData.summary}</h2>
            </div>
          </header>
        </div>
        <section>
          <div className="project--content"></div>
        </section>
      </main>
    </>
  );
}

export default Project;
