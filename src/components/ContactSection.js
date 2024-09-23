import React from "react";

function ContactSection() {
  return (
    <div className="PageWrapper">
      <div className="ContactDiv">
        <h1>Contact</h1>
        <a href="mailto:sme418@nyu.edu">
          <p>sme418@nyu.edu</p>
        </a>
        <a href="https://www.linkedin.com/in/sally-estevez/" target="blank">
          <p>LinkedIn ↗</p>
        </a>
        <a href="https://github.com/sallyestevez/" target="blank">
          <p>GitHub ↗</p>
        </a>
        <a
          href="https://drive.google.com/file/d/12sU3d_c3X0xYfOubHxaWudaQb4nPh4NW/view"
          target="blank"
        >
          <p>Resume ↗</p>
        </a>
      </div>
    </div>
  );
}

export default ContactSection;
