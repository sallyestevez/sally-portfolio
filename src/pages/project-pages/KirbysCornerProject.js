import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import KirbysCornerContent from "../../components/project-content/KirbysCornerContent";
import ProjectData from "../../components/ProjectData";
import PrevNextProjects from "../../components/PrevNextProjects";

function KirbysCornerProject() {
  return (
    <>
      <Header />
      <main className="page-wrapper">
        <KirbysCornerContent />
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

export default KirbysCornerProject;
