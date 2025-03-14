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
      <div className="page-wrapper">
        <h1 className="page-title">Projects</h1>
        <ProjectCard item={item} />
      </div>
      <Footer />
    </>
  );
}

export default Projects;
