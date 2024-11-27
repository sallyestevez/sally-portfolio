import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WeatherSoundsContent from "../../components/WeatherSoundsContent";

function WeatherSoundsProject() {
  return (
    <>
      <Header />
      <main className="pageWrapper">
        <WeatherSoundsContent />
      </main>
      <Footer />
    </>
  );
}

export default WeatherSoundsProject;
