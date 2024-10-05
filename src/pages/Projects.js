import React, { useState } from "react";
import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";
import ProjectData from "../components/ProjectData";
import Footer from "../components/Footer";

// CHECK OTHER PORTFOLIOS TO SEE HOW THEY DISPLAY THEIR PROJECTS
// TRY TO MAKE ALL PROJECT DIVS THE SAME HEIGHT
// RESPONSIVE WEB PAGES
// USE SAME FORMAT FOR 'OTHER WORK' PAGE

function Projects() {
  const [item] = useState(ProjectData);
  return (
    <>
      <Header />
      <div className="PageWrapper">
        <h1 className="PageTitle">Projects</h1>
        <ProjectCard item={item} />
      </div>
      <Footer />
    </>
  );
}

export default Projects;
