import React, { useState } from "react";
import RedVelvetCards from "../../components/RedVelvetCard";
import RedVelvetData from "../../components/RedVelvetData";
import OtherWorkData from "../../components/OtherWorkData";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

// USE SAME FORMAT FOR 'OTHER WORK' PAGE

function RedVelvetProject() {
  const [item] = useState(RedVelvetData);
  return (
    <>
      <Header />
      <div className="PageWrapper">
      <div className="ProjectHeaderText">
          <h1 className="PageTitle UIPage">{OtherWorkData[1].title}</h1>
          <div className="ProjectSummary UIPage">
            {OtherWorkData[1].summary}
          </div>
          <div className="ProjectDateCategory UIPage">
            {OtherWorkData[1].date} | {OtherWorkData[1].category}
          </div>
        </div>
        <div className="ProjectImage--ProjectPage">
          <img
            src={OtherWorkData[1].img}
            alt={`${OtherWorkData[1].title} collage`}
          />
        </div>
        {/* INCLUDE BACKGROUND INFORMATION ABOUT PROJECT - CAN USE 
        INFO FROM RESUME DESCRIPTION */}
        {/* SAVE FILES ON LAPTOP TO FIX FORMATTING */}
        <RedVelvetCards item={item} />
      </div>
      <Footer />
    </>
  );
}

export default RedVelvetProject;

