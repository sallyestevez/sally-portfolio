import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import RetailHorrorStoriesContent from "../../components/project-content/RetailHorrorStoriesContent";
import ProjectData from "../../components/ProjectData";
import PrevNextProjects from "../../components/PrevNextProjects";

function RetailHorrorStoriesProject() {
  return (
    <>
      <Header />
      <main className="pageWrapper">
        <RetailHorrorStoriesContent />
      </main>
      <PrevNextProjects
        id1={ProjectData[5].id}
        id2={ProjectData[1].id}
        title1={ProjectData[5].title}
        title2={ProjectData[1].title}
      />
      <Footer />
    </>
  );
}

export default RetailHorrorStoriesProject;
