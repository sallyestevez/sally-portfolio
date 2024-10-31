import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import UIContent from "../../components/other-work-content/100DaysContent";

function UIProject() {
  return (
    <>
      <Header />
      <main className="pageWrapper">
        <UIContent />
      </main>
      <Footer />
    </>
  );
}

export default UIProject;
