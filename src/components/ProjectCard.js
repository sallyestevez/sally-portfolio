import React from "react";
import { Link } from "react-router-dom";

function ProjectCard({ item }) {
  return (
    <>
      <div className="projects-section" id="projects">
        {item.map((Val) => {
          return (
            <div className="project">
              <div className="project-image">
                <Link
                  to={`/project/${Val.id}`}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <img src={Val.img} alt={`${Val.title} screenshot`} />
                </Link>
              </div>
              <div className="project-text">
                <Link
                  to={`/project/${Val.id}`}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <div className="project-title">{Val.title}</div>
                </Link>
                <div className="project-summary">{Val.summary}</div>
                <div className="project-date-category">
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
