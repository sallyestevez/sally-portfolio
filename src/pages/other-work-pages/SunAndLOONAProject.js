import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SunAndLOONAContent from "../../components/SunAndLOONAContent";

function SunAndLOONAProject() {
  return (
    <>
      <Header />
      <main className="pageWrapper">
        <SunAndLOONAContent />
      </main>
      <Footer />
    </>
  );
}

export default SunAndLOONAProject;
