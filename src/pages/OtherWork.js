import React, { useState } from "react";
import Header from "../components/Header";
import OtherWorkCard from "../components/OtherWorkCard";
import OtherWorkData from "../components/OtherWorkData";
import Footer from "../components/Footer";

function OtherWork() {
  const [item] = useState(OtherWorkData);
  return (
    <>
      <Header />
      <div className="PageWrapper">
        <h1 className="PageTitle PageHeader">Other Work</h1>
        <OtherWorkCard item={item} />
      </div>
      <Footer />
    </>
  );
}

export default OtherWork;
