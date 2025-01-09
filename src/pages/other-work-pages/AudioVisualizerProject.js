import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AudioVisualizerContent from "../../components/AudioVisualizerContent";
import OtherWorkData from "../../components/OtherWorkData";
import PrevNextOtherWork from "../../components/PrevNextOtherWork";

function AudioVisualizerProject() {
  return (
    <>
      <Header />
      <main className="pageWrapper">
        <AudioVisualizerContent />
      </main>
      <PrevNextOtherWork
        id1={OtherWorkData[5].id}
        title1={OtherWorkData[5].title}
        id2={OtherWorkData[7].id}
        title2={OtherWorkData[7].title}
      />
      <Footer />
    </>
  );
}

export default AudioVisualizerProject;
