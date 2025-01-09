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
      <main className="pageWrapper">
        <KnitsContent />
      </main>
      <PrevNextOtherWork
        id1={OtherWorkData[4].id}
        id2={OtherWorkData[6].id}
        title1={OtherWorkData[4].title}
        title2={OtherWorkData[6].title}
      />
      <Footer />
    </>
  );
}

export default KnitsProject;
