import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import KirbysCornerContent from "../../components/project-content/KirbysCornerContent";

function KirbysCornerProject() {
  return (
    <>
      <Header />
      <main className="pageWrapper">
        <KirbysCornerContent />
      </main>
      <Footer />
    </>
  );
}

export default KirbysCornerProject;
