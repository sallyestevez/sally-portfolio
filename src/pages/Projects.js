import React, { useState } from "react";
import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";
import ProjectData from "../components/ProjectData";
import Footer from "../components/Footer";

function Projects() {
  const [item] = useState(ProjectData);
  return (
    <>
      <Header />
      <div className="PageWrapper">
        <h1 className="PageTitle PageHeader">Projects</h1>
        <ProjectCard item={item} />
      </div>
      <Footer />
    </>
  );
}

export default Projects;
