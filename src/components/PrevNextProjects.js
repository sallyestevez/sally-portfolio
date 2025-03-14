import React from "react";

function PrevNextProjects({ id1, id2, title1, title2 }) {
  return (
    <div className="bottom-links">
      <h3>
        <a href={`/project/${id1}`}>← {title1}</a>
      </h3>
      <h3>
        <a href={`/project/${id2}`}>{title2} →</a>
      </h3>
    </div>
  );
}

export default PrevNextProjects;
