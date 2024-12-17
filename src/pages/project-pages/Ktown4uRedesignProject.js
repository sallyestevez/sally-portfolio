import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Ktown4uRedesignContent from "../../components/project-content/Ktown4uRedesignContent";
import ProjectData from "../../components/ProjectData";
import PrevNextProjects from "../../components/PrevNextProjects";

function Ktown4uRedesignProject() {
  return (
    <>
      <Header />
      <main className="pageWrapper">
        <Ktown4uRedesignContent />
      </main>
      <PrevNextProjects id2={ProjectData[1].id} title2={ProjectData[1].title} />
      <Footer />
    </>
  );
}

export default Ktown4uRedesignProject;
