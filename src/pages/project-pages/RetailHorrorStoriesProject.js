import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import RetailHorrorStoriesContent from "../../components/project-content/RetailHorrorStoriesContent";

function RetailHorrorStoriesProject() {
  return (
    <>
      <Header />
      <main className="pageWrapper">
        <RetailHorrorStoriesContent />
      </main>
      <Footer />
    </>
  );
}

export default RetailHorrorStoriesProject;
