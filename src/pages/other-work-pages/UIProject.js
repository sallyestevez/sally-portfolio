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
      <main className="PageWrapper">
        <UIContent />
      </main>
      <PrevNextOtherWork
        id1={OtherWorkData[6].id}
        title1={OtherWorkData[6].title}
        id2={OtherWorkData[1].id}
        title2={OtherWorkData[1].title}
      />
      <Footer />
    </>
  );
}

export default UIProject;
