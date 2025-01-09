import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DiscordContent from "../../components/project-content/DiscordContent";
import ProjectData from "../../components/ProjectData";
import PrevNextProjects from "../../components/PrevNextProjects";

function DiscordProject() {
  return (
    <>
      <Header />
      <main className="pageWrapper">
        <DiscordContent />
      </main>
      <PrevNextProjects
        id1={ProjectData[3].id}
        title1={ProjectData[3].title}
        id2={ProjectData[5].id}
        title2={ProjectData[5].title}
      />
      <Footer />
    </>
  );
}

export default DiscordProject;
