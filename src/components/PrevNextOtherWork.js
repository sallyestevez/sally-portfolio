import React from "react";

function PrevNextOtherWork({ id1, id2, title1, title2 }) {
  return (
    <div className="bottom-links">
      <h3>
        <a href={`/other-work/${id1}`}>← {title1}</a>
      </h3>
      <h3>
        <a href={`/other-work/${id2}`}>{title2} →</a>
      </h3>
    </div>
  );
}

export default PrevNextOtherWork;
