import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import EclipseSoundscapesContent from "../../components/project-content/EclipseSoundscapesContent";

function EclipseSoundscapesProject() {
  return (
    <>
      <Header />
      <main className="pageWrapper">
        <EclipseSoundscapesContent />
      </main>
      <Footer />
    </>
  );
}

export default EclipseSoundscapesProject;
