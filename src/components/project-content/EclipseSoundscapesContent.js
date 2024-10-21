import React from "react";
import ProjectData from "../ProjectData";

function EclipseSoundscapesContent() {
  return (
    <div>
      <header className="ProjectHeader">
        <div className="ProjectHeaderText">
          <h1 className="PageTitle">{ProjectData[3].title}</h1>
          <h2 className="ProjectBlurb">{ProjectData[3].summary}</h2>
          <div className="ProjectDateCategory">
            {ProjectData[3].date} | {ProjectData[3].category}
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
          <div className="ProjectDiv ProjectInformation">
            <div className="ProjectPageSubtitle">More Information</div>
            <p>
              For this project, my team and I focused on enhancing the
              accessibility of a field researcher training page for older
              audiences.
            </p>
            <p>
              We gathered insights by conducting user interviews with
              individuals aged 55 and older.
            </p>
            <p>
              We optimized navigation, typography, and contrast ratios to create
              a user-friendly interface that complies with WCAG guidelines.
            </p>
            <p>
              We created wireframes and then used them to build a prototype in
              Figma.
            </p>
          </div>
          <h2 className="CaseStudyText">Full case study coming soon!</h2>

          <div className="ProjectDiv ProjectOverview">
            <div className="ProjectPageSubtitle">Eclipse Soundscapes</div>
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
              ✴ <strong>Background: </strong>Night mode (moon icon) doesn't
              really do anything
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
              total of 12 in-depth interviews with users agged 55+. The
              interviews were broken down into two parts:
            </p>
            <p>
              <strong>Part 1:</strong> A series 20 questions designed to gather
              insights into their overall experiences and website preferences,
              such as
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
              <strong>Part 2:</strong> Usability testing of the current design
              to observe how participants navigated the website
            </p>
            <h2>User Responses</h2>
            <p className="quote">
              ✴ "There are too many words and information"
            </p>
            <p className="quote">✴ "The website looks too dark"</p>
            <p className="quote">
              ✴ "I like the big print/text on the website"
            </p>
            <p className="quote">✴ "Add more color"</p>
            <p className="quote">✴ "It's hard to get to top of page"</p>
            <p className="quote">
              ✴ "Navigation is too jumpy. I can't tell what comes before or
              after"
            </p>
            <p className="quote">
              ✴ "The text is too wide. It's like reading a newspaper"
            </p>
            <h2>User Classification</h2>
            <p>
              From the interviews, we categorized user preferences as follows:
            </p>
            <p>
              ✴ <strong>10 out of 12</strong> users prefer visual learning over
              text based
            </p>
            <p>
              ✴ <strong>12 out of 12</strong> users would benefit from
              text-to-speech
            </p>
            <p>
              ✴ <strong>7 out of 12</strong> users prefer a lighter color scheme
              of blue or white
            </p>
            <p>
              ✴ <strong>7 out of 12</strong> users believe navigating the
              website takes too much time
            </p>
            <p>
              ✴ <strong>6 out of 12</strong> want to see more audio/visual
              content (images, videos, audio)
            </p>
            <p>
              ✴ <strong>6 out of 12</strong> believe the website can be
              organized better
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
            <h2>Design Solutions</h2>
            <p>Our redesign solutions included:</p>
            <p>
              Color Palette - implementing a lighter, more inviting color scheme
            </p>
            <p>Sidebar Navigation - Enhancing accessibility and usability</p>
            <p>Back to Top Button - Facilitating easier navigation</p>
          </div>
          <div className="ProjectDiv ProjectHiFi">
            <div className="ProjectPageSubtitle">Final Prototype</div>
            <p>
              Utilizing our research findings, we developed a high-fidelity
              prototype that incorporates user feedback and design improvements,
              enhancing overall usability for the target audience.
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
            <p>
              To ensure the redesign effectively meets user needs, we have
              outlined the following steps for moving forward:
            </p>
            <h2>1. User Testing</h2>
            <p>Gain user feedback on prototypes.</p>
            <h2>2. Revision</h2>
            <p>Revise prototype based on feedback.</p>
            <h2>3. Mobile Redesign</h2>
            <p>Optimize prototype for mobile.</p>
            <h2>4. Implementing</h2>
            <p>Update official site with the revisions.</p>
            <div className="ProjectPageSubtitle">
              Suggested Client Plan of Action
            </div>
            <p>
              To effectively enhance the user experience and accessibility of
              the website, we recommend implemented the following phased
              approach:
            </p>
            <h2>Now</h2>
            <p>
              ✴ <strong>Enhance Navigation:</strong> Ensure navigation is
              accessible on all parts of the page
            </p>
            <p>
              ✴ <strong>Text Buffer Zone:</strong> Add a buffer zone around text
              to improve readability
            </p>
            <h2>Next</h2>
            <p>
              ✴ <strong>Light Mode:</strong> Implement a light mode option for
              better visual comfort
            </p>
            <p>
              ✴ <strong>Consistent Image Sizes:</strong> Standardize image sizes
              throughout the size
            </p>
            <p>
              ✴ <strong>Text Structure:</strong> Break up large sections of text
              for improved readability
            </p>
            <h2>Later</h2>
            <p>
              ✴ <strong>Video Guides:</strong> Record and integrate video
              guides/walkthroughs for user support
            </p>
            <p>
              ✴ <strong>Additional Visuals:</strong> Include more visuals to
              enrich the user experience
            </p>
            <p>
              ✴ <strong>Text-to-Speech:</strong> Add text to speech
              functionality for accessibility
            </p>
            <p>
              ✴ <strong>Language Options:</strong> Incorporate options for
              different languages to reach a broader audience
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EclipseSoundscapesContent;
