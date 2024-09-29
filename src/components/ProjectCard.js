import React from "react";
import { NavLink } from "react-router-dom";

function ProjectCard({ item }) {
  return (
    <>
      <div className="ProjectsSection" id="projects">
        {item.map((Val) => {
          return (
            <div className="Project">
              <div className="ProjectImage">
                <a href={`/project/${Val.id}`}>
                  <img src={Val.img} alt={`${Val.title} screenshot`} />
                </a>
              </div>
              <div className="ProjectText">
                <a href={`/project/${Val.id}`}>
                  <div className="ProjectTitle">{Val.title}</div>
                </a>
                <div className="ProjectSummary">{Val.summary}</div>
                <div className="ProjectDateCategory">
                  <p>${Val.category}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ProjectCard;
