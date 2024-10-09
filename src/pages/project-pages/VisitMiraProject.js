import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import VisitMiraContent from "../../components/project-content/VisitMiraContent";

function VisitMiraProject() {
  return (
    <>
      <Header />
      <main className="pageWrapper">
        <VisitMiraContent />
      </main>
      <Footer />
    </>
  );
}

export default VisitMiraProject;
