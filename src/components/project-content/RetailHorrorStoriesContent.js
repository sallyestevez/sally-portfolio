import React from "react";
import ProjectData from "../ProjectData";
import CYOAWriting1 from "../images/RetailHorrorStories/CYOAWriting1.PNG";
import CYOAWriting2 from "../images/RetailHorrorStories/CYOAWriting2.PNG";
import CYOAWriting3 from "../images/RetailHorrorStories/CYOAWriting3.PNG";
import Before from "../images/RetailHorrorStories/RetailHorrorStories_Before.png";
import After from "../images/RetailHorrorStories/RetailHorrorStories_After.png";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

function RetailHorrorStoriesContent() {
  return (
    <div className="project-wrapper">
      <header className="project-header">
        <div className="header-text">
          <h1 className="page-title">{ProjectData[2].title}</h1>
          <div className="project-summary">{ProjectData[2].summary}</div>
          <div className="project-date-category">
            {ProjectData[2].date} | {ProjectData[2].category}
          </div>
        </div>
        <div className="project-page-image">
          <a href={`${ProjectData[2].link}`} className="link">
            <img
              src={ProjectData[2].img}
              alt={`${ProjectData[2].title} screenshot`}
              loading="lazy"
            />
          </a>
          <br></br>
          <div className="project-link">
            <a href={`${ProjectData[2].link}`}>Visit the site!</a>
          </div>
        </div>
      </header>
      <section>
        <div className="project-content">
          <div className="project-div">
            <div className="page-subtitle">Project Details</div>
            <p>
              <strong>Role:</strong> Game Designer & Developer
            </p>
            <p>
              <strong>Duration:</strong> April - May 2023, April 2025 (4 weeks
              total)
            </p>
            <p>
              <strong>Tools:</strong> HTML, CSS, JavaScript, jQuery, paper and
              pencil
            </p>
          </div>
          <div className="project-div">
            <div className="page-subtitle">What is it?</div>
            <p>
              This is a choose-your-own-adventure game where players take on the
              role of a new Walmart employee working during the chaos of Black
              Friday. With multiple choices, forking paths, and several endings,
              the game simulates a day in the life of a retail worker on one of
              the busiest shopping days of the year.
            </p>
          </div>
          <div className="project-div">
            <div className="page-subtitle">Narrative Design</div>
            <p>
              I created a narrative that draws inspiration from real-life Black
              Friday horror stories, some of which came from Reddit threads. The
              scenarios and choices within the game highlight the intensity of
              retail work on Black Friday.
            </p>
          </div>
          <div className="project-div">
            <div className="page-subtitle">Inspirations</div>
            <p>Key sources of inspiration for this project included:</p>
            <p>
              ✴{" "}
              <strong>
                A joke a friend made about a Walmart Black Friday sale in rural
                America:{" "}
              </strong>
              "Some of you won't make it back, but that's a risk I'm willing to
              take for a SAMSUNG 65” Class 4K Crystal UHD (2160P) LED Smart TV
              with HDR."
            </p>
            <p>
              ✴ <strong>A creative writing prompt: </strong>"Your main character
              has never had a real job before. They are starting a job at the
              biggest, busiest store in town on the busiest day of the year."
            </p>
            <p className="project-link">
              ✴{" "}
              <strong>
                <a href="https://www.reddit.com/r/AskReddit/comments/1re0rl/retail_employees_of_reddit_what_are_your_black/">
                  Black Friday
                </a>{" "}
                <a href="https://www.reddit.com/r/retailhell/comments/r30ni1/black_friday_stories/">
                  horror
                </a>{" "}
                <a href="https://www.reddit.com/r/AskReddit/comments/2nmshf/deleted_by_user/">
                  stories
                </a>{" "}
                <a href="https://www.reddit.com/r/AskReddit/comments/13nsj3/i_once_had_a_woman_complain_about_lines_on_black/">
                  from
                </a>{" "}
                <a href="https://www.reddit.com/r/AskReddit/comments/e37iyp/black_friday_is_upon_us_so_retail_workers_of/">
                  Reddit
                </a>{" "}
                <a href="https://www.reddit.com/r/AskReddit/comments/2nmhhj/black_friday_workers_of_reddit_what_is_the_most/">
                  threads
                </a>
                :{" "}
              </strong>
              Several scenarios in the game directly reference real experiences
              shared by retail workers.
            </p>
          </div>
          <div className="project-div ProjectProcess">
            <div className="page-subtitle">Game Development Process</div>
            <p>
              I began by writing the story's branching paths and alternative
              endings on paper. The different scenarios and paths led to
              different outcomes and unique endings for players to discover.
            </p>
            <div className="project-div project-page-image">
              <a
                href={CYOAWriting1}
                data-fancybox
                data-caption="Story mapping 1"
              >
                <img
                  src={CYOAWriting1}
                  alt={`Retail Horror Stories mapping 1`}
                />
              </a>
              <a
                href={CYOAWriting2}
                data-fancybox
                data-caption="Story mapping 2"
              >
                <img
                  src={CYOAWriting2}
                  alt={`Retail Horror Stories mapping 2`}
                />
              </a>
              <a
                href={CYOAWriting3}
                data-fancybox
                data-caption="Story mapping 3"
              >
                <img
                  src={CYOAWriting3}
                  alt={`Retail Horror Stories mapping 3`}
                />
              </a>
            </div>
            <div className="project-subsection">
              <p>
                After making some changes to the plot, I moved on to the coding
                phase, implementing each story branch, choice, and outcome as
                planned. The player choices were incorporated as interactive
                buttons, which allow users to navigate the story by selecting
                their preferred path.
              </p>
            </div>
            <div className="project-subsection">
              <p>
                To enhance the gaming experience, I incorporated music from
                Persona 4, since a superstore like Walmart is a key element in
                both my game and Persona 4!
              </p>
            </div>
            <div className="project-div ProjectProcess">
              <div className="page-subtitle">Redesign</div>
              <div className="project-subsection">
                <p>
                  I decided to update the game's appearance because it was time
                  for a change. I changed the font, added more backgrounds (from
                  three to nine), and changed the design of the selection
                  buttons. The game is now also fully responsive and can be
                  played on all screen sizes.
                </p>
              </div>
              <div className="project-subsection">
                <p>
                  This is what the game looked like before the redesign (in
                  2023).
                </p>
              </div>
              <div className="project-div project-page-image">
                <a href={Before} data-fancybox data-caption="Before (2023)">
                  <img
                    src={Before}
                    alt={`Retail Horror Stories - Before (2023)`}
                  />
                </a>
              </div>
              <div className="project-subsection">
                <p>
                  This is what the game looks like after the redesign (in 2025).
                </p>
              </div>
              <div className="project-div project-page-image">
                <a href={After} data-fancybox data-caption="After (2025)">
                  <img
                    src={After}
                    alt={`Retail Horror Stories - After (2025)`}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

Fancybox.bind("[data-fancybox]", {});

export default RetailHorrorStoriesContent;
