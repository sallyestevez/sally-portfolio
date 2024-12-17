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
      <main className="pageWrapper">
        <MiiverseRevivalContent />
      </main>
      <PrevNextProjects
        id1={ProjectData[3].id}
        id2={ProjectData[5].id}
        title1={ProjectData[3].title}
        title2={ProjectData[5].title}
      />
      <Footer />
    </>
  );
}

export default MiiverseRevivalProject;
