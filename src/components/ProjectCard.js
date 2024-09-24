import React from "react";

function ProjectCard({ blurb, id, imageAlt, imageSrc, title, type }) {
  return (
    <div className="ProjectDiv">
      <div className="ProjectDiv--image">
        <img src={imageSrc} alt={imageAlt}></img>
      </div>
      <div className="ProjectDiv--text">
        <h2 className="title">{title}</h2>
        <p className="title">{type}</p>
        <p className="blurb">{blurb}</p>
        <p className="link">
          <a href={`/project/${id}`}>Read More</a>
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;
