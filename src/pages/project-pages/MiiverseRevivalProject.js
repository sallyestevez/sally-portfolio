import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MiiverseRevivalContent from "../../components/project-content/MiiverseRevivalContent";

function MiiverseRevivalProject() {
  return (
    <>
      <Header />
      <main className="pageWrapper">
        <MiiverseRevivalContent />
      </main>
      <Footer />
    </>
  );
}

export default MiiverseRevivalProject;
