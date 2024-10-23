import React from "react";
import ProjectData from "../ProjectData";
import CYOAWriting1 from "../images/RetailHorrorStories/CYOAWriting1.PNG";
import CYOAWriting2 from "../images/RetailHorrorStories/CYOAWriting2.PNG";
import CYOAWriting3 from "../images/RetailHorrorStories/CYOAWriting3.PNG";

function RetailHorrorStoriesContent() {
  return (
    <div>
      <header className="ProjectHeader">
        <div className="ProjectHeaderText">
          <h1 className="PageTitle">{ProjectData[1].title}</h1>
          <div className="ProjectSummary">{ProjectData[1].summary}</div>
          <div className="ProjectDateCategory">
            {ProjectData[1].date} | {ProjectData[1].category}
          </div>
        </div>
        <div className="ProjectImage--ProjectPage">
          <a href={`${ProjectData[1].link}`} className="link">
            <img
              src={ProjectData[1].img}
              alt={`${ProjectData[1].title} screenshot`}
            />
          </a>
          <br></br>
          <a href={`${ProjectData[1].link}`}>
            <div className="ProjectLink">Visit the site!</div>
          </a>
        </div>
      </header>
      <section>
        <div className="ProjectContent">
          <div className="ProjectDiv ProjectDetails">
            <div className="ProjectPageSubtitle">Project Details</div>
            <p>
              <strong>Role:</strong> Game Designer & Developer
            </p>
            <p>
              <strong>Duration:</strong> April - May 2023 (3 weeks)
            </p>
            <p>
              <strong>Tools:</strong> HTML, CSS, JavaScript, JQuery, paper and
              pencil
            </p>
          </div>
          <div className="ProjectDiv ProjectOverview">
            <div className="ProjectPageSubtitle">What is it?</div>
            <p>
              This is a choose-your-own-adventure game where players take on the
              role of a new Walmart employee working during the chaos of Black
              Friday. With multiple choices, forking paths, and several endings,
              the game simulates a day in the life of a retail worker on one of
              the busiest shopping days of the year.
            </p>
          </div>
          <div className="ProjectDiv ProjectOverview">
            <div className="ProjectPageSubtitle">Narrative Design</div>
            <p>
            I created a narrative that draws inspiration from real-life Black Friday 
            horror stories, some of which came from Reddit threads. The scenarios 
            and choices within the game highlights the intensity of retail work on 
            Black Friday.
            </p>
          </div>
          <div className="ProjectDiv ProjectInspirations">
            <div className="ProjectPageSubtitle">Inspirations</div>
            <h2>Key sources of inspiration for this project included:</h2>
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
            <p>
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
          <div className="ProjectDiv ProjectProcess">
            <div className="ProjectPageSubtitle">Game Development Process</div>
            <p>
            I began by writing out the story's branching paths and alternative 
            endings on paper. The different scenarios and paths each led to 
            different outcomes and unique endings for players to discover.
            </p>
            <div className="ProjectDiv ProjectImages">
              <a href={CYOAWriting1} target="_blank" rel="noreferrer">
                <img
                  src={CYOAWriting1}
                  alt={`Retail Horror Stories mapping 1`}
                />
              </a>
              <a href={CYOAWriting2} target="_blank" rel="noreferrer">
                <img
                  src={CYOAWriting2}
                  alt={`Retail Horror Stories mapping 2`}
                />
              </a>
              <a href={CYOAWriting3} target="_blank" rel="noreferrer">
                <img
                  src={CYOAWriting3}
                  alt={`Retail Horror Stories mapping 3`}
                />
              </a>
            </div>
            <p>
            After making some adjustments to the plot, I moved on to the coding phase, 
            implementing each story branch, choice, and outcome as planned. The player 
            choices were incorporated as interactive buttons, which allows users to 
            navigate the story by selecting their preferred path.
            </p>
            <p>
            To enhance the gaming experience, I incorporated music from Persona 4, since 
            a superstore like Walmart is a key element in both my game and Persona 4!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RetailHorrorStoriesContent;
