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
      <main className="pageWrapper">
        <EclipseSoundscapesContent />
      </main>
      <PrevNextProjects
        id1={ProjectData[2].id}
        id2={ProjectData[4].id}
        title1={ProjectData[2].title}
        title2={ProjectData[4].title}
      />
      <Footer />
    </>
  );
}

export default EclipseSoundscapesProject;
