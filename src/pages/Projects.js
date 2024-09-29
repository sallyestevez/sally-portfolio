import React, { useState } from "react";
import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";
import ProjectData from "../components/ProjectData";

// CHECK OTHER PORTFOLIOS TO SEE HOW THEY DISPLAY THEIR PROJECTS
// TRY TO MAKE ALL PROJECT DIVS THE SAME HEIGHT
// RESPONSIVE WEB PAGES
// USE SAME FORMAT FOR 'OTHER WORK' PAGE

function Projects() {
  const [item, setItem] = useState(ProjectData);
  return (
    <>
      <Header />
      <div className="PageWrapper">
        <div className="row">
          <h1 className="PageTitle">Projects</h1>
          <ProjectCard item={item} />
        </div>
      </div>
    </>
  );
}

export default Projects;
