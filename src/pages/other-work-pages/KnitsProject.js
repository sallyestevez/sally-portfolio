import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import KnitsContent from "../../components/Knits/KnitsContent";
import OtherWorkData from "../../components/OtherWorkData";
import PrevNextOtherWork from "../../components/PrevNextOtherWork";

function KnitsProject() {
  return (
    <>
      <Header />
      <main className="page-wrapper">
        <KnitsContent />
      </main>
      <PrevNextOtherWork
        id1={OtherWorkData[4].id}
        title1={OtherWorkData[4].title}
        id2={OtherWorkData[6].id}
        title2={OtherWorkData[6].title}
      />
      <Footer />
    </>
  );
}

export default KnitsProject;
