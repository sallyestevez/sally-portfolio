import React from "react";

function AboutSection() {
  return (
    <main className="PageWrapper">
      <div className="AboutDiv">
        <div className="AboutText">
          <h1 className="PageTitle">About</h1>
          <p>Hey, I'm Sally!</p>
          <p>I'm a product designer and front-end developer based in NYC.</p>
          <p>
            I love blending my passion for problem-solving with creativity, and
            I hope to use my expertise in design and development to craft
            experiences that make people's lives easier.
          </p>
          <p>
            I graduated from NYU Tandon's Integrated Design & Media program in
            May 2023, but my learning journey hasn't ended. I'm always eager to
            learn new things!
          </p>
          <p>
            Feel free to chat with me about anything ranging from my hobbies
            (<a href="https://rateyourmusic.com/~memelectraheart" target="blank">music!</a> video games! reading! knitting!) to professional opportunities. :)
          </p>
          <br></br>
          <h1 className="PageTitle">Contact</h1>
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
    </main>
  );
}

export default AboutSection;
