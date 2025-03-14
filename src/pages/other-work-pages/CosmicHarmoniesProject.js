import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CosmicHarmoniesContent from "../../components/CosmicHarmoniesContent";
import OtherWorkData from "../../components/OtherWorkData";
import PrevNextOtherWork from "../../components/PrevNextOtherWork";

function CosmicHarmoniesProject() {
  return (
    <>
      <Header />
      <main className="page-wrapper">
        <CosmicHarmoniesContent />
      </main>
      <PrevNextOtherWork
        id1={OtherWorkData[2].id}
        title1={OtherWorkData[2].title}
        id2={OtherWorkData[4].id}
        title2={OtherWorkData[4].title}
      />
      <Footer />
    </>
  );
}

export default CosmicHarmoniesProject;
