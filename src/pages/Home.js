import React from "react";
import Header from "../components/Header";
import SallyIntro from "../components/SallyIntro";

function Home() {
  return (
    <>
      <Header />
      <div className="PageWrapper">
        <SallyIntro />
      </div>
    </>
  );
}

export default Home;
