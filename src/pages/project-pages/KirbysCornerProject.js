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
      <main className="pageWrapper">
        <KirbysCornerContent />
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

export default KirbysCornerProject;
