import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WeatherSoundsContent from "../../components/WeatherSoundsContent";
import OtherWorkData from "../../components/OtherWorkData";
import PrevNextOtherWork from "../../components/PrevNextOtherWork";

function WeatherSoundsProject() {
  return (
    <>
      <Header />
      <main className="page-wrapper">
        <WeatherSoundsContent />
      </main>
      <PrevNextOtherWork
        id1={OtherWorkData[3].id}
        title1={OtherWorkData[3].title}
        id2={OtherWorkData[5].id}
        title2={OtherWorkData[5].title}
      />
      <Footer />
    </>
  );
}

export default WeatherSoundsProject;
