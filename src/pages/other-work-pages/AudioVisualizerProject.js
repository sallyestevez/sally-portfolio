import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AudioVisualizerContent from "../../components/AudioVisualizerContent"

function AudioVisualizerProject() {
  return (
    <>
      <Header />
      <main className="pageWrapper">
        <AudioVisualizerContent />
      </main>
      <Footer />
    </>
  );
}

export default AudioVisualizerProject;
