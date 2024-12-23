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
      <main className="pageWrapper">
        <WeatherSoundsContent />
      </main>
      <PrevNextOtherWork
        id1={OtherWorkData[2].id}
        id2={OtherWorkData[4].id}
        title1={OtherWorkData[2].title}
        title2={OtherWorkData[4].title}
      />
      <Footer />
    </>
  );
}

export default WeatherSoundsProject;
