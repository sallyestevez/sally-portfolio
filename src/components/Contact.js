import React from "react";

function Contact() {
  return (
    <div className="AboutDiv">
      <div className="AboutText">
        <h1 className="PageTitleAbout">Contact</h1>
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
          href="https://drive.google.com/file/d/1cgb7cozc0l173oZqre2ceQFuXWhO4i43/view"
          target="blank"
        >
          <p>Resume ↗</p>
        </a>
      </div>
    </div>
  );
}

export default Contact;
