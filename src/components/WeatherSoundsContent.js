import React from "react";

import OtherWorkData from "./OtherWorkData";

function WeatherSoundsContent() {
  return (
    <div>
      <header className="ProjectHeader">
        <div className="ProjectHeaderText">
          <h1 className="PageTitle">{OtherWorkData[4].title}</h1>
          <div className="ProjectSummary">{OtherWorkData[4].summary}</div>
          <div className="ProjectDateCategory">
            {OtherWorkData[4].date} | {OtherWorkData[4].category}
          </div>
        </div>
        <div className="ProjectVideo">
          <iframe
            src="https://drive.google.com/file/d/1vv2PRuHlyvewBpKiY-a1dJB0AJvf8tVJ/preview"
            allow="autoplay"
            title="WeatherSounds Video"
          ></iframe>
        </div>
      </header>
      <section>
        <div className="ProjectContent">
          <div className="ProjectDiv ProjectDetails">
            <div className="ProjectPageSubtitle">Project Details</div>
            <p>
              <strong>Role:</strong> Creative Technologist & Sound Designer
            </p>
            <p>
              <strong>Duration:</strong> April 2023 (2 weeks)
            </p>
            <p>
              <strong>Tools:</strong> Max MSP
            </p>
          </div>
          <div className="ProjectDiv KeyFeatures">
            <div className="ProjectPageSubtitle">Key Features</div>
            <p>
              <strong>✴ OpenWeatherMap API Integration: </strong>Fetches
              real-time weather data to influence soundscapes, which will affect
              the result of the system.
            </p>
            <p>
              <strong>✴ User Inputs: </strong>A text box allows users to input a
              city name, personalizing the experience.
            </p>
            <p>
              <strong>✴ Music Selection: </strong>The music played depends on
              the current temperature range in a city.
            </p>
            <p>
              <strong>✴ Weather-Driven Effects: </strong>Max and min
              temperatures, humidity, barometric pressure, and wind speed modify
              audio plugins to adjust filters, pitch, and echo.
            </p>
          </div>
          <div className="ProjectDiv ChallengesSolutions">
            <div className="ProjectPageSubtitle">Challenges & Solutions</div>
            <p>
              I had an input parsing issue where user inputs were returned as
              "text (city)," breaking API calls. After trial and error, I
              debugged the text input using string manipulation, and I was able
              to replace the 'text' and spaces with nothing (%0)
            </p>
          </div>
          <div className="ProjectDiv Outcomes">
            <div className="ProjectPageSubtitle">Outcomes</div>
            <p>
              ✴ I designed an engaging user experience that merged weather data
              and sound design.
            </p>
            <p>✴ I strengthened my API integration and debugging skills.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WeatherSoundsContent;
