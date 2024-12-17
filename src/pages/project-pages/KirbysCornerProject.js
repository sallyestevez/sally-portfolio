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
        id1={ProjectData[1].id}
        id2={ProjectData[3].id}
        title1={ProjectData[1].title}
        title2={ProjectData[3].title}
      />
      <Footer />
    </>
  );
}

export default KirbysCornerProject;
