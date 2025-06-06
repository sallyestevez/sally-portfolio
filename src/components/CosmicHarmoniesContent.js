import React from "react";

import OtherWorkData from "./OtherWorkData";

function CosmicHarmoniesContent() {
  return (
    <div className="project-wrapper">
      <header className="project-header">
        <div className="header-text">
          <h1 className="page-title">{OtherWorkData[3].title}</h1>
          <div className="project-summary">{OtherWorkData[3].summary}</div>
          <div className="project-date-category">
            {OtherWorkData[3].date} | {OtherWorkData[3].category}
          </div>
        </div>
        <div className="max-msp-video-div">
          <iframe
            src="https://drive.google.com/file/d/1zgqjgy0fRGKiqEf3OmanJfBA5-4KFzVd/preview"
            allow="autoplay"
            title="WeatherSounds Video"
          ></iframe>
        </div>
      </header>
      <section>
        <div className="project-content">
          <div className="project-div">
            <div className="page-subtitle">Project Details</div>
            <p>
              <strong>Role:</strong> Creative Technologist & Sound Designer
            </p>
            <p>
              <strong>Duration:</strong> April - May 2023 (3 weeks)
            </p>
            <p>
              <strong>Tools:</strong> Max MSP, Astronomy Data API, NASA
              Astronomy Picture of the Day API
            </p>
          </div>
          <div className="project-div">
            <div className="page-subtitle">Overview</div>
            <p>
              Cosmic Harmonies is a space-themed audiovisual experience that
              combines astronomical data and music, inspired by the futuristic,
              space-like “G” mix tracks from the Sonic CD soundtrack. The
              project uses APIs to transform audio and visuals based on user
              inputs, creating a cosmic ambiance.
            </p>
          </div>
          <div className="project-div">
            <div className="page-subtitle">Key Features</div>
            <div className="project-subsection">
              <h2>Interactive Audio</h2>
              <p>
                ✴ Users input a city and date to modify soundscapes and visuals.
              </p>
              <p>
                ✴ Astronomy data, such as sun/moon positions and
                sunrise/moonrise times, impact sound parameters.
              </p>
              <p>
                ✴ Users choose from a selection of tracks to customize their
                experience.
              </p>
            </div>
            <div className="project-subsection">
              <h2>Immersive Sound Design</h2>
              <p>
                ✴ Audio plugins were carefully selected and chained to create a
                space-like and ethereal atmosphere. I intentionally avoided loud
                sounds.
              </p>
            </div>
            <div className="project-subsection">
              <h2>Dynamic Visual Effects</h2>
              <p>
                ✴ NASA's Astronomy Pic of the Day is combined with jit.streak,
                jit.sprinkle, and jit.avg4 to create images that mimic twinkling
                stars.
              </p>
            </div>
          </div>
          <div className="project-div">
            <div className="page-subtitle">Challenges & Solutions</div>
            <div className="project-subsection">
              <h2>Data Formatting for API Calls</h2>
              <p>
                ✴ I initially struggled to combine city and date inputs. After
                using different objects, I solved this issue by using the 'join'
                object to format strings properly. Now with this in mind, I was
                also able to use 'join' to combine the year and month & day
                inputs.
              </p>
            </div>
            <div className="project-subsection">
              <h2>Image Update Timing</h2>
              <p>
                ✴ The NASA Pic of the Day didn't update when jitter objects'
                values updated, so I implemented a 'bang' object to refresh the
                image every second.
              </p>
            </div>
          </div>
          <div className="project-div">
            <div className="page-subtitle">Outcomes</div>
            <p>
              ✴ I created an audiovisual system that blends real-time astronomy
              data with dynamic sound and visuals.
            </p>
            <p>
              ✴ I gained proficiency in API integration, real-time media
              manipulation, and user-centered audiovisual design.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CosmicHarmoniesContent;
