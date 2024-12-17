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
      <main className="pageWrapper">
        <CosmicHarmoniesContent />
      </main>
      <PrevNextOtherWork
        id1={OtherWorkData[1].id}
        id2={OtherWorkData[3].id}
        title1={OtherWorkData[1].title}
        title2={OtherWorkData[3].title}
      />
      <Footer />
    </>
  );
}

export default CosmicHarmoniesProject;
