import React from "react";

function Contact() {
  return (
    <div className="about-div">
      <div className="about-text">
        <h1 className="page-title-about">Contact</h1>
        <a href="mailto:sallyestevez318@gmail.com">
          <p>sallyestevez318@gmail.com</p>
        </a>
        <a href="https://www.linkedin.com/in/sally-estevez/" target="blank">
          <p>LinkedIn ↗</p>
        </a>
        <a href="https://github.com/sallyestevez/" target="blank">
          <p>GitHub ↗</p>
        </a>
        <a
          href="https://drive.google.com/file/d/1x7_vmBCpw5rev7XI-sP0DW8v5mdyHy6Y/view?usp=sharing"
          target="blank"
        >
          <p>Resume ↗</p>
        </a>
      </div>
    </div>
  );
}

export default Contact;
