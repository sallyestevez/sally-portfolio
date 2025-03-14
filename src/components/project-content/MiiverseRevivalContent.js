import React from "react";
import ProjectData from "../ProjectData";

function MiiverseRevivalContent() {
  return (
    <div className="project-wrapper">
      <header className="project-header">
        <div className="header-text">
          <h1 className="page-title">{ProjectData[3].title}</h1>
          <div className="project-summary">{ProjectData[3].summary}</div>
          <div className="project-date-category">
            {ProjectData[3].date} | {ProjectData[3].category}
          </div>
        </div>
        <div className="project-page-image">
          <a href={`${ProjectData[3].link}`} className="link">
            <img
              src={ProjectData[3].img}
              alt={`${ProjectData[3].title} screenshot`}
              loading="lazy"
            />
          </a>
          <br></br>
          <div className="project-link">
            <a href={`${ProjectData[3].link}`}>Visit the site!</a>
          </div>
        </div>
      </header>
      <section>
        <div className="project-content">
          <div className="project-div">
            <div className="page-subtitle">More Information</div>
            <div className="project-subsection">
              <p>
                My goal was to recreate the feel of the original site by
                replicating Miiverse's aesthetic and general functionality.
              </p>
            </div>
            <div className="project-subsection">
              <p>
                Users can sign up/create accounts and post content, which
                appears in a shared Activity Feed alongside posts from other
                users.
              </p>
            </div>
            <div className="project-subsection">
              <h2>Key Features:</h2>
              <p>
                ✴ <strong>Account Creation: </strong>Users can register with
                their email address and personalize their profiles with their
                name.
              </p>
              <p>
                ✴ <strong>Post Customization: </strong>Users can add a "feeling"
                (e.g. happy, sad, tired, etc.) to their posts, like in the
                original Miiverse.
              </p>
              <p>
                ✴ <strong>Activity Feed: </strong>A real-time feed displaying
                user-generated posts.
              </p>
              <p>
                ✴ <strong>Post Interaction: </strong>Users can interact with
                posts with the 'Yeah!' feature, which is used instead of Likes.
              </p>
            </div>
            <div className="project-subsection">
              <h2>Tech Stack:</h2>
              <p>HTML, CSS, JavaScript, React</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MiiverseRevivalContent;
