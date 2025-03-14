import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import EclipseSoundscapesContent from "../../components/project-content/EclipseSoundscapesContent";
import ProjectData from "../../components/ProjectData";
import PrevNextProjects from "../../components/PrevNextProjects";

function EclipseSoundscapesProject() {
  return (
    <>
      <Header />
      <main className="page-wrapper">
        <EclipseSoundscapesContent />
      </main>
      <PrevNextProjects
        id1={ProjectData[1].id}
        title1={ProjectData[1].title}
        id2={ProjectData[3].id}
        title2={ProjectData[3].title}
      />
      <Footer />
    </>
  );
}

export default EclipseSoundscapesProject;
