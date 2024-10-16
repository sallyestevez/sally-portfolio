import React from "react";
import ProjectData from "../ProjectData";

function EclipseSoundscapesContent() {
  return (
    <div>
      <header className="ProjectHeader">
        <div className="ProjectHeaderText">
          <h1 className="PageTitle">{ProjectData[3].title}</h1>
          <h2 className="ProjectBlurb">{ProjectData[3].summary}</h2>
        </div>
      </header>
      <section>
        <div className="ProjectContent">
          <div className="ProjectDiv ProjectDetails">
            <div className="ProjectPageSubtitle">Project Details</div>
            <p><strong>Role:</strong> UX Researcher & Designer</p>
            <p><strong>Team:</strong> Myself, Rhiannon Super, Yufei Lin, Stephen Shadrach</p>
            <p><strong>Duration:</strong> November - December 2022 (6 weeks)</p>
            <p><strong>Client:</strong> NASA ARISA Lab</p>
            <p><strong>Tools:</strong> Figma, Figjam</p>
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
            <h2>Supported by NASA's Space Science Education Consortium (NSSEC)</h2>
            <p>
              The Eclipse Soundscapes Project delivers an accessible multi-sensory 
              experience that allows everyone, including people who are visually 
              impared and others who were unable to see the eclipse with their own eyes, 
              to experience the event.
            </p>
          </div>
          <div className="ProjectDiv ProjectProblem">
            <div className="ProjectPageSubtitle">Problem Statement</div>
            <h2>
              The current field researcher training page is not accessible to older audiences (55+).
            </h2>
          </div>
          <div className="ProjectDiv ProjectObservations">
            <div className="ProjectPageSubtitle">Initial Observations</div>
            <h2></h2>
          </div>
          <div className="ProjectDiv ProjectResearchPlan">
            <div className="ProjectPageSubtitle">User Research & Synthesis</div>
            <h2>User Interviews</h2>
            <p>
              We conducted a total of 12 interviews with users aged 55+. Those interviews were broken down into two parts:
            </p>
            <p><strong>Part 1:</strong> 20 questions to learn about their overall experiences and website preferences, including</p>
            <em><p>What is your preferred method of browsing the internet?</p>
            <p>Is having an option to have text read aloud beneficial to you?</p>
            <p>
              What is your first impression of the website?
            </p>
            <p>
              How do you feel about the navigation on the website?
            </p>
            <p>
              Do any other websites come to mind where you really liked the layout of them? Why did you like it?
            </p></em>
            <p><strong>Part 2:</strong> Usability testing of the current design to observe how they navigate the website</p>
            <h2>User Responses</h2>
            <p className="quote">
              "Too many words / information"
            </p>
            <p className="quote">
              "Looks too dark"
            </p>
            <p className="quote">
              "I like the big print/text on the website"
            </p>
            <p className="quote">
              "Add more color"
            </p>
            <p className="quote">
              "Hard to get to top of page"
            </p>
            <p className="quote">
              "Navigation is too jumpy. Can't tell what comes before or after"
            </p>
            <p className="quote">
              "Text is too wide. It's like reading a newspaper."
            </p>
            <h2>User Classification</h2>
            <p>
              <strong>10 out of 12</strong> users prefer visual learning over text based
            </p>
            <p>
              <strong>12 out of 12</strong> users would benefit from text-to-speech
            </p>
            <p>
              <strong>7 out of 12</strong> users prefer a lighter color scheme of blue or white
            </p>
            <p>
              <strong>7 out of 12</strong> users believe navigating the website takes too much time
            </p>
            <p>
              <strong>6 out of 12</strong> want to see more audio/visual content (images, videos, audio)
            </p>
            <p>
              <strong>6 out of 12</strong> believe the website can be organized better
            </p>
            <h2>User Persona</h2>
            <p><strong>Name: </strong>George Patterson</p>
            <p><strong>Age: </strong>70</p>
            <p>
              He's interested in space but is not good with technology. He needs glasses. He'd like to do a 
              science project with his grandkids.
            </p>
          </div>
          <div className="ProjectDiv ProjectLoFi">
            <div className="ProjectPageSubtitle">Low-Fidelity Concepts</div>
            <h2>Wireframes</h2>
            <p>
              Based on what we learned from the user interviews and user testing, we were now ready to start 
              creating our wireframes. We split up sections of the page and each worked on a section.
            </p>
            <h2>Solutions</h2>
            <p>We were able to establish our top solutions for our redesign, which are:</p>
            <p>Color Palette</p>
            <h2>Side Bar</h2>
            <p>Side bar</p>
            <h2>Back to Top</h2>
          </div>
          <div className="ProjectDiv ProjectHiFi">
            <div className="ProjectPageSubtitle">
              Final Prototype
            </div>
            <p>Based on our research and drawn conclusions, we were able to come up with our high fidelity prototype.
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
            <h2>1. User Testing</h2>
            <p>Gain user feedback on prototypes.</p>
            <h2>2. Revision</h2>
            <p>Revise prototype based on feedback.</p>
            <h2>3. Mobile Redesign</h2>
            <p>Optimize prototype for mobile.</p>
            <h2>4. Implementing</h2>
            <p>Update official site with the revisions.</p>
            <div className="ProjectPageSubtitle">Suggested Client Plan of Action</div>
            <h2>Now</h2>
            <p>Make navigation accessible on all parts of the page</p>
            <p>Add a buffer zone for text</p>
            <h2>Next</h2>
            <p>Add a light mode</p>
            <p>Make image sizes consistent</p>
            <p>Break up large sections of text</p>
            <h2>Later</h2>
            <p>Record and add video guides/walkthroughs</p>
            <p>Include more visuals</p>
            <p>Add text to speech</p>
            <p>Add different language options</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EclipseSoundscapesContent;
