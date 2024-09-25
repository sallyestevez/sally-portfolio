import React from "react";

function ProjectCard({
  blurb,
  completed,
  id,
  imageAlt,
  imageSrc,
  title,
  type,
}) {
  return (
    <div className="ProjectDiv">
      <div className="ProjectDiv--image">
        <img src={imageSrc} alt={imageAlt}></img>
      </div>
      <div className="ProjectDiv--text">
        <h2 className="title">{title}</h2>
        <p className="type">{type}</p>
        <p className="completed">{completed}</p>
        <p className="blurb">{blurb}</p>
        <p className="link">
          <a href={`/project/${id}`}>Learn More</a>{" "}
          <a href={`/project/${id}`}>Visit Site</a>
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;
