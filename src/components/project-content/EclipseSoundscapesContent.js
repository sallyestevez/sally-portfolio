import React from "react";
import ProjectData from "../ProjectData";
import OriginalPalette from "../images/EclipseSoundscapes/OriginalPalette.png";
import LightModePalette from "../images/EclipseSoundscapes/LightModePalette.png";
import DarkModePalette from "../images/EclipseSoundscapes/DarkModePalette.png";
import BackToTopOriginal from "../images/EclipseSoundscapes/BackToTopOriginal.png";
import BackToTopFinal from "../images/EclipseSoundscapes/BackToTopFinal.png";
import EclipseSoundscapesWireframes from "../images/EclipseSoundscapes/EclipseSoundscapesWireframes.png";
import SideBarFinal from "../images/EclipseSoundscapes/SideBarFinal.png";
import SideBarNew from "../images/EclipseSoundscapes/SideBarNew.png";
import SideBarOriginal from "../images/EclipseSoundscapes/SideBarOriginal.png";

function EclipseSoundscapesContent() {
  return (
    <div>
      <header className="ProjectHeader">
        <div className="ProjectHeaderText">
          <h1 className="PageTitle">{ProjectData[2].title}</h1>
          <h2 className="ProjectBlurb">{ProjectData[2].summary}</h2>
          <div className="ProjectDateCategory">
            {ProjectData[2].date} | {ProjectData[2].category}
          </div>
        </div>
      </header>
      <section>
        <div className="ProjectContent">
          <div className="ProjectDiv ProjectDetails">
            <div className="ProjectPageSubtitle">Project Details</div>
            <p>
              <strong>Role:</strong> UX Researcher & Designer
            </p>
            <p>
              <strong>Team:</strong> Myself, Rhiannon Super, Yufei Lin, Stephen
              Shadrach
            </p>
            <p>
              <strong>Duration:</strong> November - December 2022 (6 weeks)
            </p>
            <p>
              <strong>Client:</strong> NASA ARISA Lab
            </p>
            <p>
              <strong>Tools:</strong> Figma, Figjam
            </p>
          </div>
          <div className="ProjectDiv ProjectOverview">
            <div className="ProjectPageSubtitle">
              Eclipse Soundscapes Overview
            </div>
            <h2>
              Supported by NASA's Space Science Education Consortium (NSSEC)
            </h2>
            <p>
              The Eclipse Soundscapes Project aims to provide an accessible
              multi-sensory experience, enabling individuals, especially those
              who are visually impaired or unable to witness the eclipse
              firsthand, to experience the event.
            </p>
          </div>
          <div className="ProjectDiv ProjectProblem">
            <div className="ProjectPageSubtitle">Problem Statement</div>
            <h2>
              The current field researcher training page is not accessible to
              older audiences (55+).
            </h2>
          </div>
          <div className="ProjectDiv ProjectObservations">
            <div className="ProjectPageSubtitle">Initial Observations</div>
            <p>
              We conducted a thorough assessment of the website to identify
              usability issues and areas for enhancement, focusing on how users
              interact with the interface and their overall experience. We
              observed the following:
            </p>
            <p>
              ✴ <strong>Loading: </strong>Long load time
            </p>
            <p>
              ✴ <strong>Navigation: </strong>The directory is only at the top;
              "Back to top" is at the bottom of the section and still cuts off;
              there is too much scrolling; no link is attached to the "here" in
              the opening paragraph
            </p>
            <p>
              ✴ <strong>Images: </strong>Very small images; no consistent sizes
            </p>
            <p>
              ✴ <strong>Text: </strong>Everything uses the same font; the text
              is the entire width of the page
            </p>
            <p>
              ✴ <strong>Sections: </strong>Not enough space in between; too much
              text; no breaks
            </p>
            <p>
              ✴ <strong>Background: </strong>Night mode (moon icon) doesn't do
              anything
            </p>
            <p>
              ✴ <strong>Content: </strong>Zooming in makes everything much
              larger (edited); Download on Apple App Store and Google Play are
              on separate lines; looks better on mobile; can't view Field
              Researcher page in Spanish
            </p>
            <div className="ProjectVideo">
              <iframe
                src="https://drive.google.com/file/d/1K0Gpy3EaLvQe0nAWvPz-xbtgcJZkhoV3/preview"
                allow="autoplay"
                title="Eclipse Soundscapes Video"
              ></iframe>
            </div>
            <p className="ProjectVideoSubtitle">
              A video walkthrough of the current field researcher training page.
            </p>
          </div>
          <div className="ProjectDiv ProjectResearchPlan">
            <div className="ProjectPageSubtitle">User Research & Synthesis</div>
            <p>
              To understand the needs of our target demographic, we conducted a
              total of 12 in-depth interviews with users aged 55+. The
              interviews were broken down into two parts:
            </p>
            <p>
              <strong>Part 1: </strong>20 questions designed to gather insights
              into their overall experiences and website preferences, such as
            </p>
            <em>
              <p>✴ What is your preferred method of browsing the internet?</p>
              <p>
                ✴ Is having an option to have text read aloud beneficial to you?
              </p>
              <p>✴ What is your first impression of the website?</p>
              <p>✴ How do you feel about the navigation on the website?</p>
              <p>
                ✴ Do any other websites come to mind where you really liked the
                layout of them? Why did you like it?
              </p>
            </em>
            <p>
              <strong>Part 2: </strong>Usability testing of the current design
              to observe how participants navigate the website
            </p>
            <h2>User Responses</h2>
            <p className="quote">
              ✴ "There are too many words and information."
            </p>
            <p className="quote">✴ "The website looks too dark."</p>
            <p className="quote">
              ✴ "I like the big print/text on the website."
            </p>
            <p className="quote">✴ "Add more color."</p>
            <p className="quote">✴ "It's hard to get to the top of the page."</p>
            <p className="quote">
              ✴ "Navigation is too jumpy. I can't tell what comes before or
              after."
            </p>
            <p className="quote">
              ✴ "The text is too wide. It's like reading a newspaper."
            </p>
            <h2>User Classification</h2>
            <p>
              From the interviews, we categorized user preferences as follows:
            </p>
            <p>
              ✴ <strong>10 out of 12</strong> users prefer visual learning over
              text-based learning.
            </p>
            <p>
              ✴ <strong>12 out of 12</strong> users would benefit from
              text-to-speech functionality.
            </p>
            <p>
              ✴ <strong>7 out of 12</strong> users prefer a lighter color scheme
              of blue or white.
            </p>
            <p>
              ✴ <strong>7 out of 12</strong> users believe navigating the
              website takes too much time.
            </p>
            <p>
              ✴ <strong>6 out of 12</strong> want to see more audio/visual
              content (images, videos, audio).
            </p>
            <p>
              ✴ <strong>6 out of 12</strong> believe the website can be
              organized better.
            </p>
            <h2>User Persona</h2>
            <p>
              We developed a user persona that represents our target demographic
              and its needs.
            </p>
            <p>
              <strong>Name: </strong>George Patterson
            </p>
            <p>
              <strong>Age: </strong>70
            </p>
            <p>
              He's interested in space but is not good with technology. He needs
              glasses. He'd like to do a science project with his grandkids.
            </p>
          </div>
          <div className="ProjectDiv ProjectLoFi">
            <div className="ProjectPageSubtitle">Low-Fidelity Concepts</div>
            <h2>Wireframes</h2>
            <p>
              Based on what we learned from the user interviews and user
              testing, we created low-fidelity wireframes, dividing sections of
              the page for collaborative design and feedback.
            </p>
            <div className="ProjectDiv ProjectImages">
              <a
                href={EclipseSoundscapesWireframes}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={EclipseSoundscapesWireframes}
                  alt={`Eclipse Soundscapes Wireframes`}
                />
              </a>
            </div>
            <h2>Design Solutions</h2>
            <p>Our redesign solutions included:</p>
            <p>
              ✴ <strong>New Color Palettes -</strong> Implementing a lighter and
              more inviting color scheme, as well as a dark mode
            </p>
            <div className="ProjectImages">
              <a href={OriginalPalette} target="_blank" rel="noreferrer">
                <img src={OriginalPalette} alt={`Original Color Palette`} />
              </a>
              <a href={DarkModePalette} target="_blank" rel="noreferrer">
                <img src={DarkModePalette} alt={`Dark Mode Color Palette`} />
              </a>
              <a href={LightModePalette} target="_blank" rel="noreferrer">
                <img src={LightModePalette} alt={`Light Mode Color Palette`} />
              </a>
            </div>
            <p>
              ✴ <strong>Sidebar Navigation -</strong> Enhancing accessibility
              and usability
            </p>
            <div className="ProjectImages">
              <a href={SideBarOriginal} target="_blank" rel="noreferrer">
                <img src={SideBarOriginal} alt={`Original Side Bar`} />
              </a>
              <a href={SideBarNew} target="_blank" rel="noreferrer">
                <img src={SideBarNew} alt={`New Side Bar Design`} />
              </a>
              <a href={SideBarFinal} target="_blank" rel="noreferrer">
                <img src={SideBarFinal} alt={`Final Side Bar Design`} />
              </a>
            </div>
            <p>
              ✴ <strong>Back to Top & Dark Mode Buttons -</strong> Making
              navigation easier
            </p>
            <div className="ProjectImages">
              <a href={BackToTopOriginal} target="_blank" rel="noreferrer">
                <img
                  src={BackToTopOriginal}
                  alt={`Original Back to Top Button`}
                />
              </a>
              <a href={BackToTopFinal} target="_blank" rel="noreferrer">
                <img src={BackToTopFinal} alt={`Final Back to Top Button`} />
              </a>
            </div>
          </div>
          <div className="ProjectDiv ProjectHiFi">
            <div className="ProjectPageSubtitle">Final Prototype</div>
            <p>
              Using our research findings, we developed a high-fidelity
              prototype that incorporates user feedback and design improvements.
              The final prototype features a user-friendly interface that
              enhances overall usability for the target audience by optimizing
              navigation, typography, and contrast ratios in compliance with
              WCAG guidelines.
            </p>
          </div>
          <div className="FigmaPrototypeDiv">
            <iframe
              className="FigmaPrototype"
              title="Eclipse Soundscapes"
              src="https://embed.figma.com/proto/CbqocIqoua2b9Xoc1GEVxK/Eclipse-Soundscapes?page-id=0%3A1&node-id=144-1643&node-type=canvas&viewport=597%2C108%2C0.05&scaling=scale-down&content-scaling=fixed&starting-point-node-id=144%3A1643&embed-host=share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="ProjectDiv ProjectTakeaways">
            <div className="ProjectPageSubtitle">Future Plans / Next Steps</div>
            <h2>
              To ensure the redesign effectively meets user needs, we have
              outlined the steps needed to move forward:
            </h2>
            <p>
              <strong>1. User Testing: </strong>Gain user feedback on the
              prototype.
            </p>
            <p>
              <strong>2. Revision: </strong>Revise the prototype based on
              feedback.
            </p>
            <p>
              <strong>3. Mobile Redesign: </strong>Optimize the prototype for
              mobile
            </p>
            <p>
              <strong>4. Implementing: </strong>Update the official site with
              the revisions.
            </p>
            <div className="ProjectPageSubtitle ActionPlan">
              Suggested Client Plan of Action
            </div>
            <p>
              To effectively enhance the user experience and accessibility of
              the website, we recommend implementing the following phased
              approach:
            </p>
            <h2>Now</h2>
            <p>
              ✴ <strong>Enhance Navigation:</strong> Ensure navigation is
              accessible on all parts of the page.
            </p>
            <p>
              ✴ <strong>Text Buffer Zone:</strong> Add a buffer zone around text
              to improve readability.
            </p>
            <h2>Next</h2>
            <p>
              ✴ <strong>Light Mode:</strong> Implement a light mode option for
              better visual comfort.
            </p>
            <p>
              ✴ <strong>Consistent Image Sizes:</strong> Standardize image sizes
              throughout the site.
            </p>
            <p>
              ✴ <strong>Text Structure:</strong> Break up large sections of text
              for improved readability.
            </p>
            <h2>Later</h2>
            <p>
              ✴ <strong>Video Guides:</strong> Record and integrate video
              guides/walkthroughs for user support.
            </p>
            <p>
              ✴ <strong>Additional Visuals:</strong> Include more visuals to
              enrich the user experience.
            </p>
            <p>
              ✴ <strong>Text-to-Speech:</strong> Add text-to-speech
              functionality for accessibility.
            </p>
            <p>
              ✴ <strong>Language Options:</strong> Incorporate options for
              different languages to reach a broader audience.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EclipseSoundscapesContent;
