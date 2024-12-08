import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import KnitsContent from "../../components/Knits/KnitsContent";

function KnitsProject() {
  return (
    <>
      <Header />
      <main className="pageWrapper">
        <KnitsContent />
      </main>
      <Footer />
    </>
  );
}

export default KnitsProject;
