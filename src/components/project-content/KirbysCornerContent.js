import React from "react";
import ProjectData from "../ProjectData";

function KirbysCornerContent() {
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
            <div className="project-subsection">
              <p>
                <strong>Role:</strong> Project Manager, UI Designer, Web
                Developer
              </p>
              <p>
                <strong>Duration:</strong> January - May 2023 (14 weeks)
              </p>
              <p>
                <strong>Tools:</strong> Figma, Visual Studio Code, GitHub,
                Notion
              </p>
            </div>
            <div className="project-subsection">
              <p>
                <em>
                  As a dedicated Kirby fan, I created an interactive wiki to
                  share my knowledge of the series with fellow Kirby fans. This
                  was my senior project, and I was in charge of everything, from
                  concept to coding!
                </em>
              </p>
            </div>
          </div>
          <div className="project-div">
            <div className="page-subtitle">Overview</div>
            <div className="project-subsection">
              <p>
                This Kirby lore wiki is designed as a resource for those who
                like Kirby but don't know about the series' lore. The site
                features detailed information (written by me!) about games,
                characters, and lore, all presented through a user-friendly and
                charming design.
              </p>
            </div>
            <div className="project-subsection">
              <p>
                The site is designed to be engaging and interactive, with
                features such as a carousel, clickable tabs, a music player, and
                a quiz. The site is also mobile-friendly, so visitors can access
                it on any device.
              </p>
            </div>
          </div>
          <div className="project-div">
            <div className="page-subtitle">Project Scope</div>
            <div className="project-subsection">
              <p>
                Before I started working on the project, I used the MoSCoW
                method to determine the scope and keep things on track:
              </p>
            </div>
            <div className="project-subsection">
              <h2>
                M - <em>Must-have</em> project features
              </h2>
              <p>✴ Pages for different Kirby games</p>
              <p>
                ✴ General game information + info typically hidden from people
              </p>
            </div>
            <div className="project-subsection">
              <h2>
                S - <em>Should have</em> project features
              </h2>
              <p>✴ Kirby-like website design</p>
              <p>✴ Images (characters, locations, etc.)</p>
              <p>✴ Information on important characters</p>
            </div>
            <div className="project-subsection">
              <h2>
                C - <em>Could have</em> project features
              </h2>
              <p>✴ Separate pages for important characters</p>
              <p>✴ Audio - Kirby music, Kirby sound effects</p>
            </div>
            <div className="project-subsection">
              <h2>
                W - <em>Won't have</em> project features
              </h2>
              <p>✴ A page for every single thing</p>
              <p>✴ Blocks of text</p>
            </div>
          </div>
          <div className="project-div">
            <div className="page-subtitle">Research</div>
            <div className="project-subsection">
              <p>
                After determining the scope, I picked the Kirby games and
                characters I wanted to focus on. I started with three games and
                three key characters from each, with the thought that I could
                add to this list later on.
              </p>
            </div>
            <div className="project-subsection">
              <p>
                I focused on one game and its characters at a time. After
                conducting research, I wrote up the content that would appear on
                the site.
              </p>
            </div>
          </div>
          <div className="project-div">
            <div className="page-subtitle">Prototypes</div>
            <h2>Prototype 1:</h2>
            <div className="project-subsection">
              <p>
                The first prototype, designed in Figma, consists of a home page,
                a Kirby character page, and pages for one of my favorite games,
                Planet Robobot, and its most important characters (Haltmann,
                Star Dream, and Susie).
              </p>
            </div>
            <div className="project-subsection">
              <p>
                I shared it with my peers and gathered their feedback. I made
                changes to the layout, font sizes, and color scheme to make sure
                it felt more "Kirby."
              </p>
            </div>
            <div className="project-subsection">
              <div className="figma-prototype-div">
                <iframe
                  className="figma-prototype"
                  title="Kirby's Corner"
                  src="https://embed.figma.com/proto/xdC7pckDtYpw9fQzAEpWpo/Prototype?page-id=0%3A1&node-id=14-39&node-type=canvas&viewport=341%2C245%2C0.16&scaling=scale-down&content-scaling=fixed&starting-point-node-id=14%3A39&embed-host=share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div className="project-subsection">
              <h2>Prototype 2:</h2>
              <p>
                I began coding the website using the Figma prototype as my guide
                while also making a few design edits. I built the home page,
                character pages (Kirby, Haltmann, and Star Dream), a 'Games'
                page, a 'Characters' page, and pages for three games.
              </p>
            </div>
            <div className="project-subsection">
              <p>
                After another round of peer feedback, the main suggestion was to
                make the site mobile-friendly. I implemented responsiveness so
                that the website could be accessed on any device.
              </p>
            </div>
          </div>
          <div className="project-div">
            <div className="page-subtitle">More Research</div>
            <div className="project-subsection">
              <p>
                I researched and wrote up the content for another game, Squeak
                Squad, and its characters (Daroach, The Squeaks, and Dark
                Nebula). Focusing on one game at a time ensured that the
                information on the site was not incomplete or all over the
                place.
              </p>
            </div>
            <div className="project-subsection">
              <p>
                I then realized that my Kirby site wouldn't be complete without
                two very important characters: King Dedede and Meta Knight! Even
                though they were not part of my original research plan, I
                couldn't leave out two of Kirby's closest allies.
              </p>
            </div>
            <div className="project-subsection">
              <p>All of the information was then added to the website.</p>
            </div>
            <div className="project-subsection">
              <p>
                Unfortunately, I ran out of time to fully cover my third game,
                Star Allies, but no worries! Since the game has dozens of
                playable characters, I came up with the next best thing: a
                carousel to showcase all of them! It was the perfect way to
                feature something for Kirby Star Allies.
              </p>
            </div>
          </div>
          <div className="project-div">
            <div className="page-subtitle">Interactivity</div>
            <p>
              To make the website more engaging, I added some interactive
              components, including:
            </p>
            <p>✴ A carousel on the home page for Featured Games</p>
            <p>✴ Clickable tabs for special sections of character pages</p>
            <p>
              ✴ A carousel showcasing the playable characters in Kirby Star
              Allies
            </p>
            <p>
              ✴ A Fun Fact button on Kirby's character page to share fun trivia
            </p>
            <p>✴ A music player with a toggle playlist for Kirby tunes</p>
            <p>✴ A quiz to test visitors' Kirby knowledge</p>
            <p>✴ A Kirby cursor that flies across the screen</p>
          </div>
          <div className="project-div">
            <div className="page-subtitle">Final Design</div>
            <div className="project-subsection">
              <p>
                After 14 long weeks, my Kirby wiki was ready to be presented!
                Visit the site using the link below!
              </p>
            </div>
            <div className="project-subsection">
              <div className="project-link">
                <a href={`${ProjectData[2].link}`}>Visit site!</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default KirbysCornerContent;
