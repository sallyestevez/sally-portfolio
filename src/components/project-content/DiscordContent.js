import React from "react";
import ProjectData from "../ProjectData";

function DiscordContent() {
  return (
    <div>
      <header className="ProjectHeader">
        <div className="ProjectHeaderText">
          <h1 className="PageTitle">{ProjectData[5].title}</h1>
          <div className="ProjectSummary">{ProjectData[5].summary}</div>
          <div className="ProjectDateCategory">
            {ProjectData[5].date} | {ProjectData[5].category}
          </div>
        </div>
        <div className="ProjectImage--ProjectPage">
          <img
            src={ProjectData[5].img}
            alt={`${ProjectData[5].title} screenshot`}
          />
        </div>
      </header>
      <section>
        <div className="ProjectContent">
          <div className="ProjectDiv ProjectDetails">
            <div className="ProjectPageSubtitle">Project Details</div>
            <p>
              <strong>Role:</strong> Lead UX Designer
            </p>
            <p>
              <strong>Duration:</strong> September - November 2022 (6 weeks)
            </p>
            <p><strong>Tools:</strong> Figma, Figjam</p>
          </div>
          <div className="ProjectDiv ProjectOverview">
            <div className="ProjectPageSubtitle">Overview</div>
            <h2>What is Discord?</h2>
            <p>Discord is a social platform for text, voice, and video chat with friends and communities. While the 
              platform offers a range of features and customization options, many of its more advanced features are 
              restricted to Nitro, Discord's subscription service. Nitro subscribers are granted enhanced profile 
              customization features and the ability to upload larger files.</p>
            <h2>What is the problem?</h2>
            <p>For non-subscribers, file uploads are limited to 8 MB, which makes it hard for users to share larger files, 
              such as images, videos, or documents. This limitation can disrupt the user experience, often forcing users to 
              seek workarounds, such as using external file-sharing platforms.</p>
            
          </div>
          {/* <div className="ProjectDiv ProjectProcess">
            <div className="ProjectPageSubtitle">Process</div> */}
            {/* <h2>Design is not a linear process! Constant iteration is needed!</h2> */}

            {/* Identify the Problem */}
            {/* Research and Analysis */}
            {/* Wireframing & Ideation */}
            {/* Visualization & Iteration */}
            {/* Prototyping & User Testing */}
          {/* </div> */}
          <div className="ProjectDiv ProjectProblem">
            <div className="ProjectPageSubtitle">Problem Statement</div>
            <h2>How can we make file sharing easier for those who want to use Discord without an added cost?</h2>
          </div>
          <div className="ProjectDiv ProjectResearchPlan">
            <div className="ProjectPageSubtitle">Research Plan & Synthesis</div>
            <h2>User Interviews</h2>
            <p>I interviewed 5 Discord users. I asked them a total of 16 questions, including: 
              <p>Why do you use Discord?</p>
              <p>Are you subscribed to Nitro?</p>
              <p>What do you like and dislike about Discord file sharing and why?</p>
              <p>What do you do when a file you're trying to send is too large?</p>
              <p>Do you know of any other messaging apps with similar file-sharing functionalities?</p>
            </p>
            <h2>User Classification</h2>
            <p>5 out of 5 users use Discord to communicate with friends</p>
            <p>5 out of 5 users are not subscribed to Nitro</p>
            <p>4 out of 5 users dislike the 8 MB file limit</p>
            <p>5 out of 5 users use alternative methods to share 
              files when the upload size is too large</p>
            <br></br>
            <h2 className="quote">"The hardest part about trying to send large files is <strong>wasting my own time compressing
              them myself and always being met with the 8mb limit message</strong> and Discord attempting to use
              that limit as a motivator to buy Nitro."
            </h2>
            <h2 className="quote">"Cameras are starting to increase in size and <strong>Discord's limit doesn't cover it anymore</strong>."</h2>
            <h2 className="quote">"When a file is too large to send, <strong>I use websites to compress videos, an image editor to 
              compress images, and upload larger files to Google Drive</strong>."
            </h2>
            <h2 className="quote">"The hardest part about having to send large files is <strong>the rejection that comes with it</strong>."</h2>
            <br></br>
            <h2>User Journey</h2>
            <p>The user opens the Discord app and select the file they'd like to send. Discord tells them their file 
              is too large and cannot be sent through Discord. The user decides to leave Discord and compress the file 
              or upload the file to an external app. They go back to Discord and select the file they want to send or
              paste the link to the external app.
            </p>
            <h2>Competitive Analysis</h2>
            <p>Discord's main competitors are Slack, Facebook Messenger, and Skype.</p>
            <p>One of Slack's strengths is group collaboration. Facebook Messenger allows for cross-app communication, and 
              Skype has a smart messaging feature.
            </p>
            <p>However, most of Slack's features are behind a paywall, Slack and Skype's chat history gets deleted after a certain
              point, and Facebook Messenger faces a lack of privacy as user messages are scanned.
            </p>
            <h2>Takeaways</h2>
            <p>Unlike its competitors, Discord does not require a subscription to access most features. Message history is always
              available, and users can easily find old messages with search options.
            </p>
          </div>
          <div className="ProjectDiv ProjectResearchSynthesis">
            <div className="ProjectPageSubtitle">Solutions</div>
            <h2>Based on my research and observations, I identified three potential solutions to address the problem:</h2>
            <p>Google Drive integration would allow users to send files located on their Drive without having to leave the Discord app</p>
            <p>Getting rid of the Nitro service can lead to an increased file size, but Discord loses out on a revenue source</p>
            <p>Implement an in-app compression feature that allows users to compress large files without having to leave the app</p>
            <h2 className="quote">I decided to continue with the last solution. Offering a flexible file-sharing option would give non-subscribers an alternative
              while preserving the existing benefits for Nitro subscribers.
            </h2>
          </div>
          
          <div className="ProjectDiv ProjectLoFi">
            <div className="ProjectPageSubtitle">Low-Fidelity Concepts</div>
            <h2>Wireframing</h2>
            <p>The sketches were created with a returning Android user in mind. If a file is too large, users receive a warning 
              and can choose whether or not they'd like to compress the file.
            </p>
            <h2>Lo-Fi Prototype</h2>
            <p>I decided to work with the Discord desktop app, but the general idea remained the same.</p>
            <p>If a file a user decides to upload is too large, they receive a warning and are given the option to compress or go back
              and select a different file.
            </p>
            <p>If a user wants to compress, they get to choose what percentage they'd like to compress the file by.</p>
            <p>On the compression confirmation screen, users can send their file or go back and make changes.</p>
            <p>If the user chooses to send, they will see a progress bar that lets them know their file compression status.</p>
          </div>
          <div className="ProjectDiv ProjectUserTesting">
            <div className="ProjectPageSubtitle">User Testing</div>
            <h2>User Testing</h2>
            <p>During rounds of usability testing, I received the following feedback:</p>
            <p>Specify the final size of the file after compression. With only the percentage given, the file size is unknown.</p>
            <p>Make the text bigger. Some of the text is too small.</p>
            <p>Include onboarding screens where users can learn about the new process.</p>
          </div>
          <div className="ProjectDiv ProjectHiFi">
            <div className="ProjectPageSubtitle">Refinement & Final Designs</div>
            <h2>Final Prototype</h2>
            <p>Incorporating feedback from the usability testing session, I modified the prototype. The working prototype can be seen below.</p>
          </div>
          </div>

          <div className="FigmaPrototypeDiv">
            <iframe
              className="FigmaPrototype"
              title="Discord File Compressor"
              src="https://embed.figma.com/proto/e1vYj4lHiAYzK7kQfaMlcc/Discord-Prototype?page-id=1%3A75&node-id=1-4174&node-type=canvas&viewport=2560%2C1086%2C0.35&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A4174&embed-host=share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="ProjectContent">
            <div className="ProjectDiv ProjectTakeaways">
              <div className="ProjectPageSubtitle">Takeaways</div>
              <h2 className="quote">Design is not a linear process! Constant iteration is needed!</h2>
              <h2 className="quote">Companies should not forget about their non-subscribers. They represent a significant portion of their user base.</h2>
              <h2 className="quote">A flexible file-sharing options is one of the many ways Discord could improve the overall user experience.</h2>
            </div>
          </div>
      </section>
    </div>
  );
}

export default DiscordContent;
