import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PupilRedesignContent from "../../components/project-content/PupilRedesignContent";
import ProjectData from "../../components/ProjectData";
import PrevNextProjects from "../../components/PrevNextProjects";

function PupilRedesignProject() {
  return (
    <>
      <Header />
      <main className="page-wrapper">
        <PupilRedesignContent />
      </main>
      <PrevNextProjects
        id1={ProjectData[0].id}
        title1={ProjectData[0].title}
        id2={ProjectData[2].id}
        title2={ProjectData[2].title}
      />
      <Footer />
    </>
  );
}

export default PupilRedesignProject;
