import React from "react";
import Header from "../components/Header";
import SallyIntro from "../components/SallyIntro";

function Home() {
  return (
    <>
      <Header />
      <main className="PageWrapper">
        <SallyIntro />
      </main>
    </>
  );
}

export default Home;
