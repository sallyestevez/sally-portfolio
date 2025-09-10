import React from "react";
import { Link } from "react-router-dom";

function PrevNextOtherWork({ id1, id2, title1, title2 }) {
  return (
    <div className="bottom-links">
      <h3>
        <Link to={`/other-work/${id1}`}>← {title1}</Link>
      </h3>
      <h3>
        <Link to={`/other-work/${id2}`}>{title2} →</Link>
      </h3>
    </div>
  );
}

export default PrevNextOtherWork;
