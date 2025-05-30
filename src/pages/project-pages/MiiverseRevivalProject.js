import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MiiverseRevivalContent from "../../components/project-content/MiiverseRevivalContent";
import ProjectData from "../../components/ProjectData";
import PrevNextProjects from "../../components/PrevNextProjects";

function MiiverseRevivalProject() {
  return (
    <>
      <Header />
      <main className="page-wrapper">
        <MiiverseRevivalContent />
      </main>
      <PrevNextProjects
        id1={ProjectData[2].id}
        title1={ProjectData[2].title}
        id2={ProjectData[4].id}
        title2={ProjectData[4].title}
      />
      <Footer />
    </>
  );
}

export default MiiverseRevivalProject;
