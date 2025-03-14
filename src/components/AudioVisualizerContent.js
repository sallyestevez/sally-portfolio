import React from "react";

import OtherWorkData from "./OtherWorkData";

function AudioVisualizerContent() {
  return (
    <div className="project-wrapper">
      <header className="project-header">
        <div className="header-text">
          <h1 className="page-title">{OtherWorkData[6].title}</h1>
          <div className="project-summary">{OtherWorkData[6].summary}</div>
          <div className="project-date-category">
            {OtherWorkData[6].date} | {OtherWorkData[6].category}
          </div>
        </div>
        <div className="max-msp-video-div">
          <iframe
            src="https://drive.google.com/file/d/19qRIuAqRUmKpRla6YHKvQ0pav3JBBrrp/preview"
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
              <strong>Role:</strong> Creative Technologist & Visual Designer
            </p>
            <p>
              <strong>Duration:</strong> February 2023 - March 2023 (3 weeks)
            </p>
            <p>
              <strong>Tools:</strong> Max MSP
            </p>
          </div>
          <div className="project-div">
            <div className="page-subtitle">Overview</div>
            <p>
              This project explores the relationship between dance, music, and
              visuals through an interactive audiovisualizer. I was inspired by
              high-energy songs and videos of Yoshi and Luigi dancing, and the
              system uses Max MSP to synchronize music-driven visual effects
              with user interaction.
            </p>
          </div>
          <div className="project-div">
            <div className="page-subtitle">Key Features</div>
            <div className="project-subsection">
              <h2>Dynamic Visual Effects</h2>
              <p>
                ✴ Jitter and vizzie objects react to audio properties like
                amplitude and pitch, affecting the video's appearance.
              </p>
              <p>
                ✴ A slider allows users to switch between or blend two
                visualizer sets.
              </p>
            </div>
            <div className="project-subsection">
              <h2>Randomized Video Loading</h2>
              <p>✴ A different video plays every time the system is started.</p>
            </div>
            <div className="project-subsection">
              <h2>User Interaction</h2>
              <p>✴ Users can adjust visual effects to their tastes.</p>
            </div>
          </div>
          <div className="project-div">
            <div className="page-subtitle">Process</div>
            <div className="project-subsection">
              <h2>Research & Experimentation</h2>
              <p>
                ✴ I tested out different jitter and vizzie objects to identify
                which ones were more visibly impacted by sound amplitude and
                pitch.
              </p>
            </div>
            <div className="project-subsection">
              <h2>Algorithm Design</h2>
              <p>
                ✴ I used Max MSP's signal processing tools to analyze audio and
                link it to a system of visual effects.
              </p>
            </div>
            <div className="project-subsection">
              <h2>Iteration</h2>
              <p>
                ✴ I tested different objects for visual appeal and
                responsiveness, and ended up choosing those that work best with
                the music.
              </p>
            </div>
          </div>
          <div className="project-div">
            <div className="page-subtitle">Challenges & Solutions</div>
            <div className="project-subsection">
              <h2>Technical Learning</h2>
              <p>
                ✴ I used class notes when faced with some challenges, like
                implementing glow effects (jit.fluoride) and properly managing
                audio-visual controls (ezdac).
              </p>
            </div>
            <div className="project-subsection">
              <h2>Video Initialization</h2>
              <p>
                ✴ I didn't want the same video to load every time the patch was
                started, so I looked into 'cycle,' 'random,' and other related
                objects. I decided to go with 'cycle' because it was the one
                that worked best.
              </p>
            </div>
          </div>
          <div className="project-div">
            <div className="page-subtitle">Outcomes</div>
            <p>
              ✴ I created an audiovisual experience that merged music, dance,
              and user interaction.
            </p>
            <p>
              ✴ I improved my technical skills in Max MSP, including real-time
              audio and video synchronization.
            </p>
            <p>
              ✴ I received positive feedback for my creativity and execution in
              my advanced creative coding class!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AudioVisualizerContent;
