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
        id1={OtherWorkData[5].id}
        title1={OtherWorkData[5].title}
      />
      <Footer />
    </>
  );
}

export default SunAndLOONAProject;
