// source: https://www.geeksforgeeks.org/how-to-create-a-scroll-to-top-button-in-react-js/

import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div>
      <FaArrowCircleUp
        className="toTop__text"
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      />
    </div>
  );
};

export default ScrollButton;
