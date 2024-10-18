import React from "react";
import ProjectData from "../ProjectData";

function MiiverseRevivalContent() {
  return (
    <div>
      <header className="ProjectHeader">
        <div className="ProjectHeaderText">
          <h1 className="PageTitle">{ProjectData[4].title}</h1>
          <div className="ProjectSummary">{ProjectData[4].summary}</div>
          <div className="ProjectDateCategory">
            {ProjectData[4].date} | {ProjectData[4].category}
          </div>
        </div>
        <div className="ProjectImage--ProjectPage">
          <a href={`${ProjectData[4].link}`} className="link">
            <img
              src={ProjectData[4].img}
              alt={`${ProjectData[4].title} screenshot`}
            />
          </a>
          <br></br>
          <a href={`${ProjectData[4].link}`}>
            <div className="ProjectLink">Visit the site!</div>
          </a>
        </div>
      </header>
      <section>
        <div className="ProjectContent">
          <div className="ProjectDiv ProjectDetails">
            <div className="ProjectPageSubtitle">More Information</div>
            <p>
            My goal was to recreate the feel of the original site by replicating 
            Miiverse's aesthetic and general functionality, ensuring that users 
            could immerse themselves in a near-identical experience.
            </p>
            <p>
            Users can sign up/create accounts and post content, which appears in a 
            shared Activity Feed alongside posts from other users.
            </p>
            <h2>Key Features:</h2>
            <p>✷ <strong>Account Creation: </strong>Users can register and personalize 
            their profiles with their name and email address.</p>
            <p>✷ <strong>Post Customization: </strong>Users can add a "feeling" to their 
            posts, like in the original Miiverse experience.</p>
            <p>✷ <strong>Activity Feed: </strong>A real-time feed displaying user-generated
            posts in a familiar Miiverse style.</p>
            <p>✷ <strong>Post Interaction: </strong>Users can interact with posts with the 
            'Yeah!' feature, used instead of Likes.</p>
            <h2>Tech Stack:</h2>
            <p>
              HTML, CSS, JavaScript, React
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MiiverseRevivalContent;
