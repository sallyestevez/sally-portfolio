import React from "react";
import { Link } from "react-router-dom";

function ProjectCard({ item }) {
  return (
    <>
      <div className="ProjectsSection" id="projects">
        {item.map((Val) => {
          return (
            <div className="Project">
              <div className="ProjectImage">
              <Link to={`/project/${Val.id}`} onClick={() => window.scrollTo(0,0)}>
                  <img src={Val.img} alt={`${Val.title} screenshot`} />
              </Link>
              </div>
              <div className="ProjectText">
              <Link to={`/project/${Val.id}`} onClick={() => window.scrollTo(0,0)}>
                  <div className="ProjectTitle">{Val.title}</div>
                </Link>
                <div className="ProjectSummary">{Val.summary}</div>
                <div className="ProjectDateCategory">
                  <p>
                    {Val.date} | {Val.category}
                  </p>
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
