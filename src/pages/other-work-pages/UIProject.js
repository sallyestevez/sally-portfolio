import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import UIContent from "../../components/100DaysChallenge/100DaysContent";
import OtherWorkData from "../../components/OtherWorkData";
import PrevNextOtherWork from "../../components/PrevNextOtherWork";

function UIProject() {
  return (
    <>
      <Header />
      <main className="page-wrapper">
        <UIContent />
      </main>
      <PrevNextOtherWork
        id1={OtherWorkData[0].id}
        title1={OtherWorkData[0].title}
        id2={OtherWorkData[2].id}
        title2={OtherWorkData[2].title}
      />
      <Footer />
    </>
  );
}

export default UIProject;
