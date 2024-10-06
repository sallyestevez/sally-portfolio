import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DiscordContent from "../../components/project-content/DiscordContent";

function DiscordProject() {
  return (
    <>
      <Header />
      <main className="pageWrapper">
        <DiscordContent />
      </main>
      <Footer />
    </>
  );
}

export default DiscordProject;
