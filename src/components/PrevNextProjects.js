import React from "react";
import { Link } from "react-router-dom";

function PrevNextProjects({ id1, id2, title1, title2 }) {
  return (
    <div className="bottom-links">
      <h3>
        <Link to={`/projects/${id1}`}>← {title1}</Link>
      </h3>
      <h3>
        <Link to={`/projects/${id2}`}>{title2} →</Link>
      </h3>
    </div>
  );
}

export default PrevNextProjects;
