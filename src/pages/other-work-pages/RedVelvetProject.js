import React, { useState } from "react";
import RedVelvetCards from "../../components/RedVelvetCard";
import RedVelvetData from "../../components/RedVelvetData";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

// USE SAME FORMAT FOR 'OTHER WORK' PAGE

function RedVelvetProject() {
  const [item] = useState(RedVelvetData);
  return (
    <>
      <Header />
      <div className="PageWrapper">
        <h1 className="PageTitle PageHeader">Red Velvet Typography Challenge</h1>
        <RedVelvetCards item={item} />
      </div>
      <Footer />
    </>
  );
}

export default RedVelvetProject;

