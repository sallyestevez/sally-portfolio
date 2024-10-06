import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Ktown4uRedesignContent from "../../components/project-content/Ktown4uRedesignContent";

function Ktown4uRedesignProject() {
  return (
    <>
      <Header />
      <main className="pageWrapper">
        <Ktown4uRedesignContent />
      </main>
      <Footer />
    </>
  );
}

export default Ktown4uRedesignProject;
