import React from "react";
import ProjectData from "../ProjectData";
import DiscordCompetitiveAnalysis from "../images/Discord/DiscordCompetitiveAnalysis.png";
import DiscordLoFi1 from "../images/Discord/DiscordLoFi1.png";
import DiscordLoFi2 from "../images/Discord/DiscordLoFi2.png";
import DiscordLoFi3 from "../images/Discord/DiscordLoFi3.png";
import DiscordLoFi4 from "../images/Discord/DiscordLoFi4.png";
import DiscordUserJourney from "../images/Discord/DiscordUserJourney.png";
import DiscordWireframes from "../images/Discord/DiscordWireframes.jpg";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

function DiscordContent() {
  return (
    <div className="project-wrapper">
      <header className="project-header">
        <div className="header-text">
          <h1 className="page-title">{ProjectData[4].title}</h1>
          <div className="project-summary">{ProjectData[4].summary}</div>
          <div className="project-date-category">
            {ProjectData[4].date} | {ProjectData[4].category}
          </div>
        </div>
        <div className="project-page-image">
          <img
            src={ProjectData[4].img}
            alt={`${ProjectData[4].title} screenshot`}
            loading="lazy"
          />
        </div>
      </header>
      <section>
        <div className="project-content">
          <div className="project-div">
            <div className="page-subtitle">Project Details</div>
            <p>
              <strong>Role:</strong> Lead UX Designer
            </p>
            <p>
              <strong>Duration:</strong> September - November 2022 (6 weeks)
            </p>
            <p>
              <strong>Tools:</strong> Figma, Figjam
            </p>
          </div>
          <div className="project-div">
            <div className="page-subtitle">Scenario</div>
            <p>
              Picture this: you're a high school student who finds a funny video
              online and wants to share it with your friends on Discord.
              Excited, you download the video and try to send it, only to get a
              message saying the file is too large. Discord's maximum upload
              size is 8MB, but Discord tells you that you can bypass this limit
              by subscribing to Nitro. Unfortunately, $10 a month for a
              subscription is too much for you because you don't have a job.
              Still determined to send the video, you use an external app to
              compress it, adding extra steps and time. Something that was only
              supposed to take a few seconds now takes longer than that.
            </p>
          </div>
          <div className="project-div">
            <div className="page-subtitle">Overview</div>
            <p>
              Discord is a social platform where friends and communities can
              connect through text, voice, and video chats. However, many users
              face frustrating limitations when it comes to sharing files,
              especially non-Nitro subscribers who are restricted to an 8 MB
              upload limit. This project aimed to explore how we can simplify
              and enhance the file-sharing experience without a Nitro
              subscription.
            </p>
          </div>
          <div className="project-div">
            <div className="page-subtitle">Problem Statement</div>
            <strong>
              <p>
                How can we make file sharing easier for Discord users who don't
                want to pay for a subscription?
              </p>
            </strong>
          </div>
          <div className="project-div">
            <div className="page-subtitle">Research Insights</div>
            <div className="project-subsection">
              <h2>User Interviews</h2>
              <p>
                To gain a deeper understanding of user needs, I conducted
                interviews with five Discord users. I asked a total of 16
                questions, including:
              </p>
              <em>
                <p>✴ Why do you use Discord?</p>
                <p>✴ Are you subscribed to Nitro?</p>
                <p>
                  ✴ What do you like and dislike about Discord file sharing and
                  why?
                </p>
                <p>
                  ✴ What do you do when a file you're trying to send is too
                  large?
                </p>
                <p>
                  ✴ Do you know of any other messaging apps with similar
                  file-sharing functionalities?
                </p>
              </em>
            </div>
            <div className="project-subsection">
              <h2>User Responses</h2>
              <p>Here are some of their responses:</p>
              <p>
                ✴ "The hardest part about trying to send large files is{" "}
                <strong>
                  wasting my own time compressing them myself and always being
                  met with the 8mb limit message
                </strong>{" "}
                and Discord attempting to use that limit as a motivator to buy
                Nitro."
              </p>
              <p>
                ✴ "Cameras are starting to increase in size and{" "}
                <strong>Discord's limit doesn't cover it anymore</strong>."
              </p>
              <p>
                ✴ "When a file is too large to send,{" "}
                <strong>
                  I use websites to compress videos, an image editor to compress
                  images, and upload larger files to Google Drive
                </strong>
                ."
              </p>
              <p>
                ✴ "The hardest part about having to send large files is{" "}
                <strong>the rejection that comes with it</strong>."
              </p>
            </div>
            <div className="project-subsection">
              <h2>User Classification</h2>
              <p>
                ✴ <strong>5 out of 5</strong> users use Discord to communicate
                with friends.
              </p>
              <p>
                ✴ <strong>5 out of 5</strong> users are not subscribed to Nitro.
              </p>
              <p>
                ✴ <strong>4 out of 5</strong> users dislike the 8 MB file limit.
              </p>
              <p>
                ✴ <strong>5 out of 5</strong> users use alternative methods to
                share files when the upload size is too large.
              </p>
            </div>
            <div className="project-subsection">
              <h2>User Journey Mapping</h2>
              <p>
                The typical user journey highlighted a common pain point: after
                selecting a file to send, users receive an error message due to
                the size restriction. This often leads them to leave Discord to
                find alternative solutions, such as using an external app to
                upload or compress the file, creating a frustrating experience.
              </p>
              <div className="project-page-image">
                <a
                  href={DiscordUserJourney}
                  data-fancybox
                  data-caption="User Journey Map"
                >
                  <img
                    src={DiscordUserJourney}
                    alt="Discord User Journey screenshot"
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
            <div className="project-subsection">
              <h2>Competitive Analysis</h2>
              <p>
                Discord's main competitors are Slack, Facebook Messenger, and
                Skype. One of Slack's strengths is group collaboration. Facebook
                Messenger allows for cross-app communication, and Skype has a
                smart messaging feature. However, most of Slack's features are
                behind a paywall, Slack and Skype's chat history gets deleted
                after a certain point, and Facebook Messenger faces a lack of
                privacy as user messages are scanned. Unlike its competitors,
                Discord does not require a subscription to access most features.
                Message history is always available, and users can easily find
                old messages with search options. However, the limitations on
                file uploads can lead to user dissatisfaction.
              </p>
              <div className="project-page-image">
                <a
                  href={DiscordCompetitiveAnalysis}
                  data-fancybox
                  data-caption="Competitive Analysis"
                >
                  <img
                    src={DiscordCompetitiveAnalysis}
                    alt="Discord Competitive Analysis screenshot"
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="project-div">
            <div className="page-subtitle">Solutions</div>
            <div className="project-subsection">
              <h2>
                From my research and observations, I identified three potential
                solutions:
              </h2>
              <p>
                ✴ <strong>Google Drive Integration:</strong> Allows users to
                send files from Drive directly within Discord. However, not
                everyone uses Google Drive.
              </p>
              <p>
                ✴ <strong>Remove Nitro:</strong> Increase file size limits for
                all users but lose a source of revenue.
              </p>
              <p>
                ✴ <strong>In-App Compression Tool:</strong> Implement a feature
                that enables users to compress large files before sending them.
              </p>
            </div>
            <div className="project-subsection">
              <p>
                After considering these options, I decided to continue with the
                last solution. Offering a flexible file-sharing option would
                give non-subscribers an alternative while preserving the
                existing benefits for Nitro subscribers.
              </p>
            </div>
          </div>
          <div className="project-div">
            <div className="page-subtitle">Design Process</div>
            <div className="project-subsection">
              <h2>Wireframing</h2>
              <p>
                I sketched low-fidelity wireframes, focusing on the user flow
                when encountering a file size error on the Android app. Users
                would receive a prompt to compress the file and choose the
                desired compression percentage.
              </p>
              <div className="project-page-image">
                <a
                  href={DiscordWireframes}
                  data-fancybox
                  data-caption="Wireframes"
                >
                  <img
                    src={DiscordWireframes}
                    alt="Discord Wireframes (sketches on paper)"
                    loading="lazy"
                  />
                </a>
              </div>
            </div>

            <div className="project-subsection">
              <h2>Lo-Fi Prototype</h2>
              <p>
                The initial prototype was designed for the Discord desktop app.
              </p>
            </div>
            <div className="project-subsection">
              <p>
                <strong>File Size Warning: </strong>When users attempt to upload
                a file that exceeds the size limit, they receive a warning
                notification. They are given two options: compress the file or
                go back to select a different one.
              </p>
              <div className="project-page-image">
                <a
                  href={DiscordLoFi1}
                  data-fancybox
                  data-caption="LoFi - File Size Warning"
                >
                  <img
                    src={DiscordLoFi1}
                    alt="Discord LoFi Screenshot 1"
                    loading="lazy"
                  />
                </a>
              </div>
              <p>
                <strong>Compression Options: </strong>If a user chooses to
                compress, they can select the desired compression percentage.
              </p>
              <div className="project-page-image">
                <a
                  href={DiscordLoFi2}
                  data-fancybox
                  data-caption="Compression Options"
                >
                  <img
                    src={DiscordLoFi2}
                    alt="Discord LoFi Screenshot 2"
                    loading="lazy"
                  />
                </a>
              </div>
              <p>
                <strong>Compression Confirmation Screen: </strong>The
                compression confirmation screen gives users the choice to either
                send the file or return to make adjustments.
              </p>
              <div className="project-page-image">
                <a
                  href={DiscordLoFi3}
                  data-fancybox
                  data-caption="Compression Confirmation Screen"
                >
                  <img
                    src={DiscordLoFi3}
                    alt="Discord LoFi Screenshot 3"
                    loading="lazy"
                  />
                </a>
              </div>
              <p>
                <strong>Progress Indicator: </strong>Once a user chooses to send
                their file, they are shown a progress bar that visually
                indicates the status of their file compression and upload. This
                feature keeps users informed throughout the process.
              </p>
              <div className="project-page-image">
                <a
                  href={DiscordLoFi4}
                  data-fancybox
                  data-caption="Progress Indicator"
                >
                  <img
                    src={DiscordLoFi4}
                    alt="Discord LoFi Screenshot 4"
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="project-div">
            <div className="page-subtitle">User Testing and Feedback</div>
            <p>
              I conducted usability testing and gathered valuable feedback,
              including:
            </p>
            <p>
              ✴ <strong>Final Size Specification: </strong>Users wanted clarity
              on the file size after compression.
            </p>
            <p>
              ✴ <strong>Text Visibility: </strong>Some text was too small for
              comfortable reading.
            </p>
            <p>
              ✴ <strong>Onboarding Screens: </strong>Including tutorial screens
              would help users learn about the new compression process.
            </p>
          </div>
          <div className="project-div">
            <div className="page-subtitle">Final Design and Outcomes</div>
            <h2>Final Prototype</h2>
            <p>
              After incorporating the user feedback, I refined the prototype,
              enhancing usability and visual clarity. The final design makes
              file sharing smoother for Discord users, reducing frustration and
              encouraging engagement within the platform. The working prototype
              can be seen below.
            </p>
          </div>
        </div>
        <div className="figma-prototype-div">
          <iframe
            className="figma-prototype"
            title="Discord File Compressor"
            src="https://embed.figma.com/proto/e1vYj4lHiAYzK7kQfaMlcc/Discord-Prototype?page-id=1%3A75&node-id=1-4174&node-type=canvas&viewport=2560%2C1086%2C0.35&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A4174&embed-host=share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="project-content">
          <div className="project-div">
            <div className="page-subtitle">Takeaways</div>
            <p>
              ✴ Design is not a linear process! Constant iteration is needed!
            </p>
            <p>
              ✴ Companies should not forget about their non-subscribers. They
              represent a significant portion of their user base.
            </p>
            <p>
              ✴ Flexible file-sharing options can greatly enhance user
              experience and satisfaction.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

export default DiscordContent;
