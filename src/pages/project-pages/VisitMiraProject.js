import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import VisitMiraContent from "../../components/project-content/VisitMiraContent";
import ProjectData from "../../components/ProjectData";
import PrevNextProjects from "../../components/PrevNextProjects";

function VisitMiraProject() {
  return (
    <>
      <Header />
      <main className="page-wrapper">
        <VisitMiraContent />
      </main>
      <PrevNextProjects
        id1={ProjectData[4].id}
        title1={ProjectData[4].title}
        id2={ProjectData[0].id}
        title2={ProjectData[0].title}
      />
      <Footer />
    </>
  );
}

export default VisitMiraProject;
