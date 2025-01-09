import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
// import Ktown4uRedesignContent from "../../components/Ktown4uRedesignContent";
import Ktown4uRedesignContent from "../../components/Ktown4uRedesignContent";
import OtherWorkData from "../../components/OtherWorkData";
import PrevNextOtherWork from "../../components/PrevNextOtherWork";

function Ktown4uRedesignProject() {
  return (
    <>
      <Header />
      <main className="pageWrapper">
        <Ktown4uRedesignContent />
      </main>
      <PrevNextOtherWork 
        id1={OtherWorkData[7].id} 
        id2={OtherWorkData[1].id}
        title1={OtherWorkData[7].title} 
        title2={OtherWorkData[1].title} 
      />
      <Footer />
    </>
  );
}

export default Ktown4uRedesignProject;
