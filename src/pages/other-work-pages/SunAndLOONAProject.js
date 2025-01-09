import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SunAndLOONAContent from "../../components/SunAndLOONAContent";
import OtherWorkData from "../../components/OtherWorkData";
import PrevNextOtherWork from "../../components/PrevNextOtherWork";

function SunAndLOONAProject() {
  return (
    <>
      <Header />
      <main className="pageWrapper">
        <SunAndLOONAContent />
      </main>
      <PrevNextOtherWork
        id1={OtherWorkData[6].id}
        title1={OtherWorkData[6].title}
        id2={OtherWorkData[0].id}
        title2={OtherWorkData[0].title}
      />
      <Footer />
    </>
  );
}

export default SunAndLOONAProject;
