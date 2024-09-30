import React from "react";
import Header from "../components/Header";
import SallyIntro from "../components/SallyIntro";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header />
      <main className="PageWrapper">
        <SallyIntro />
      </main>
      <Footer />
    </>
  );
}

export default Home;
