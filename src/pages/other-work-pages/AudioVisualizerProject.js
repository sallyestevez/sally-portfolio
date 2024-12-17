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
        id1={OtherWorkData[4].id}
        id2={OtherWorkData[6].id}
        title1={OtherWorkData[4].title}
        title2={OtherWorkData[6].title}
      />
      <Footer />
    </>
  );
}

export default AudioVisualizerProject;
