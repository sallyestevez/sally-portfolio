import React from "react";
import ProjectData from "../ProjectData";

// images
import OldWebsite from "../images/VisitMira/VisitMira.png";
import HomeWireframeMobile4x from "../images/VisitMira/WireframeHomeMobile4x.png";
import HomeWireframeWeb1x from "../images/VisitMira/WireframeHomeWeb1x.png";
import HomeWireframeWeb4x from "../images/VisitMira/WireframeHomeWeb4x.png";
import DestinationsLoFiMobile1x from "../images/VisitMira/LoFiDestinationsMobile1x.png";
import DestinationsLoFiWeb1x from "../images/VisitMira/LoFiDestinationsWeb1x.png";
import DestinationsLoFiWeb4x from "../images/VisitMira/LoFiDestinationsWeb4x.png";
import ContinentHiFiMobile4x from "../images/VisitMira/HiFiContinentMobile4x.png";
import ContinentHiFiWeb4x from "../images/VisitMira/HiFiContinentWeb4x.png";
import DestinationsScreen from "../images/VisitMira/DestinationsScreen.png";
import Guides from "../images/VisitMira/Guides.png";
import NewFAQs from "../images/VisitMira/NewFAQs.png";
import OldFAQs from "../images/VisitMira/OldFAQs.png";
import NewHome from "../images/VisitMira/NewHome.png";
import OldHome from "../images/VisitMira/OldHome.png";
import NewNavMobile from "../images/VisitMira/NewNavMobile.png";
import NewNavWeb from "../images/VisitMira/NewNavWeb.png";
import NLAScreen from "../images/VisitMira/NLAScreen.png";
import OldNav from "../images/VisitMira/OldNav.png";
import ReactComponent1 from "../images/VisitMira/ReactComponent1.png";
import ReactComponent2 from "../images/VisitMira/ReactComponent2.png";
import VisitorReviews from "../images/VisitMira/VisitorReviews.png";
import ContentPlanning from "../images/VisitMira/ContentPlanning.png";

function VisitMiraContent() {
  return (
    <div className="project-wrapper">
      <header className="project-header">
        <div className="header-text">
          <h1 className="page-title">{ProjectData[5].title}</h1>
          <div className="project-date-category">
            Inspired by Xenoblade Chronicles X
          </div>
          <div className="project-summary">{ProjectData[5].summary}</div>
          <div className="project-date-category">
            {ProjectData[5].date} | {ProjectData[5].category}
          </div>
        </div>
        <div className="project-page-image">
          <a href={`${ProjectData[5].link}`} className="link">
            <img
              src={ProjectData[5].img}
              alt={`${ProjectData[5].title} screenshot`}
              loading="lazy"
            />
          </a>
          <br></br>
          <div className="project-link">
            <a href={`${ProjectData[5].link}`}>Visit the site!</a>
          </div>
        </div>
      </header>
      <section>
        <div className="project-content">
          <div className="project-div">
            <div className="page-subtitle">Project Details</div>
            <p>
              <strong>Role:</strong> UX Designer & Web Developer
            </p>
            <p>
              <strong>Team:</strong> Myself, Sammy Estevez
            </p>
            <p>
              <strong>Duration:</strong> Fall 2021, March - August 2025 (remake)
            </p>
            <p>
              <strong>Tools:</strong> HTML/CSS, React, Figma, Visual Studio Code
            </p>
          </div>
          <div className="project-div">
            <div className="page-subtitle">Project Overview</div>
            <div className="project-subsection">
              <h2>Have you ever wanted to be stuck on a different planet?</h2>
              <p>
                If so, today's your lucky day, because we're finally introducing
                <strong> Visit Mira</strong>!
              </p>
            </div>
            <div className="project-subsection">
              <p>
                VisitMira.com is the latest travel website for the fictional
                planet of Mira from Xenoblade Chronicles X! Get ready to explore
                a planet brimming with excitement, stunning landscapes, and
                danger (!!!), perfect for those who want something new!
              </p>
            </div>
          </div>
          <div className="project-div">
            <div className="project-subsection">
              <h2>What You'll Discover</h2>
              <p>
                ✴ <strong>Five Unique Regions: </strong>From the lush jungles of
                Noctilum to the scorching volcanoes of Cauldros, each region has
                its own charm and secrets!
              </p>
              <p>
                ✴ <strong>Interactive Experience: </strong>Navigate through the
                site to learn about each location.
              </p>
              <p>
                ✴ <strong>✨Stunning Visuals✨: </strong>Breathtaking images of
                Mira's beautiful and diverse landscapes, all presented with the
                help of the Fancybox library.
              </p>
            </div>
            <div className="project-subsection">
              <h2>Tech Stack</h2>
              <p>
                ✴ <strong>Front-End: </strong>HTML, CSS, JavaScript, React
              </p>
              <p>
                ✴ <strong>Design & Prototyping: </strong>Figma
              </p>
              <p>
                ✴ <strong>Development Environment & Deployment: </strong>Visual
                Studio Code, GitHub, GitHub Pages
              </p>
              <p>
                ✴ <strong>Special Integrations: </strong>Fancybox library for
                interactive image galleries
              </p>
            </div>
          </div>
          <div className="project-div">
            <div className="project-subsection">
              <div className="page-subtitle">The Problem</div>
              <p>
                The original website, created in 2021, was functional but
                limited:
              </p>
              <p>
                ✴ Aside from the homepage and continent pages, there were few
                pages for travelers to explore
              </p>
              <p>
                ✴ There was not enough support for mobile browsing or responsive
                menus
              </p>
              <p>
                ✴ Poor content organization (FAQs were cluttered and hard to
                skim)
              </p>
              <p>
                ✴ Outdated color schemes and images didn't reflect the game
                world
              </p>
              <p>✴ Accessibility issues with color and contrast</p>
              <p>
                ✴ Adding new content required manually editing multiple files
              </p>
            </div>
            <div className="project-subsection">
              <div className="visit-mira-image">
                <a
                  href={OldWebsite}
                  data-fancybox
                  data-caption="Old Website (2021)"
                >
                  <img
                    src={OldWebsite}
                    alt={`Old Website (2021)`}
                    loading="lazy"
                  />
                </a>
                <p>
                  <strong>Old Website (2021)</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="project-div">
            <div className="page-subtitle">Redesign Motivation</div>
            <p>
              With the release of the Definitive Edition of the game
              approaching, I saw an opportunity to:
            </p>
            <p>✴ refresh the site's visuals with newly captured screenshots</p>
            <p>✴ expand content with guides and reviews</p>
            <p>✴ improve usability and navigation across devices</p>
            <p>✴ ensure WCAG-compliant accessibility standards</p>
            <p>
              ✴ introduce interactive and reusable React components for easier
              updates
            </p>
          </div>
          <div className="project-div">
            <div className="page-subtitle">Design Process</div>
            <div className="project-subsection">
              <h2>Content Planning</h2>
              <p>
                The process began with an audit of the original site,
                identifying missing features, reorganizing content, and defining
                new features. I selected a new color palette inspired by
                official artwork and planned additional sections for guides and
                reviews.
              </p>
            </div>
            <div className="project-subsection">
              <div className="visit-mira-image visit-mira-section">
                <a
                  href={ContentPlanning}
                  data-fancybox
                  data-caption="Content Planning (Site Structure & Changes/Updates)"
                >
                  <img
                    src={ContentPlanning}
                    alt={`Content Planning (Site Structure & Changes/Updates)`}
                    loading="lazy"
                  />
                </a>
              </div>
              <p className="visit-mira-section">
                <strong>
                  Content Planning (Site Structure & Changes/Updates)
                </strong>
              </p>
            </div>
            <div className="project-subsection">
              <h2>Wireframes</h2>
              <p>
                Using Figma, I mapped out desktop and mobile layouts for the
                homepage, continent pages, guides, and FAQs. These wireframes
                focused on hierarchy, readability, and content flow.
              </p>
            </div>
            <div className="project-subsection">
              <div className="visit-mira-image visit-mira-section">
                <a
                  href={HomeWireframeMobile4x}
                  data-fancybox
                  data-caption="Wireframe - Home Screen (Mobile)"
                >
                  <img
                    src={HomeWireframeMobile4x}
                    alt={`Wireframe - Home Screen (Mobile)`}
                    loading="lazy"
                  />
                </a>
                <a
                  href={HomeWireframeWeb4x}
                  data-fancybox
                  data-caption="Wireframe - Home Screen (Web)"
                >
                  <img
                    src={HomeWireframeWeb1x}
                    alt={`Wireframe - Home Screen (Web)`}
                    loading="lazy"
                  />
                </a>
              </div>
              <p className="visit-mira-section">
                <strong>
                  Wireframes (mobile/web) showing part of the homepage layout.
                </strong>
              </p>
            </div>
            <div className="project-subsection">
              <h2>Low-Fidelity Design</h2>
              <p>
                After the wireframes were complete, I moved on to the lo-fi
                screens, with placeholder text and images. The new color scheme,
                as well as components for for navigation and footers, were
                introduced.
              </p>
            </div>
            <div className="project-subsection">
              <div className="visit-mira-image visit-mira-section">
                <a
                  href={DestinationsLoFiMobile1x}
                  data-fancybox
                  data-caption="Lo-Fi - Destinations Screen (Mobile)"
                >
                  <img
                    src={DestinationsLoFiMobile1x}
                    alt={`Lo-Fi - Destinations Screen (Mobile)`}
                    loading="lazy"
                  />
                </a>
                <a
                  href={DestinationsLoFiWeb4x}
                  data-fancybox
                  data-caption="Lo-Fi - Destinations Screen (Web)"
                >
                  <img
                    src={DestinationsLoFiWeb1x}
                    alt={`Lo-Fi - Destinations Screen (Web)`}
                    loading="lazy"
                  />
                </a>
              </div>
              <p className="visit-mira-section">
                <strong>
                  Lo-fi screens with placeholder content and new navigation
                  flow.
                </strong>
              </p>
            </div>
            <div className="project-subsection">
              <h2>High-Fidelity Design</h2>
              <p>
                Using the lo-fi designs, I moved on to the hi-fi, adding content
                (images, text) and prototyped both the mobile and web versions.
              </p>
            </div>
            <div className="project-subsection">
              <div className="visit-mira-image visit-mira-section">
                <a
                  href={ContinentHiFiMobile4x}
                  data-fancybox
                  data-caption="Hi-Fi - Cauldros Continent Screen (Mobile)"
                >
                  <img
                    src={ContinentHiFiMobile4x}
                    alt={`Hi-Fi - Cauldros Continent Screen (Mobile)`}
                    loading="lazy"
                  />
                </a>
                <a
                  href={ContinentHiFiWeb4x}
                  data-fancybox
                  data-caption="Hi-Fi - Cauldros Continent Screen (Web)"
                >
                  <img
                    src={ContinentHiFiWeb4x}
                    alt={`Hi-Fi - Cauldros Continent Screen (Web)`}
                    loading="lazy"
                  />
                </a>
              </div>
              <p className="visit-mira-section">
                <strong>
                  Hi-fi screens of the Cauldros continent page with an updated
                  gallery.
                </strong>
              </p>
            </div>
            <div className="project-subsection">
              <h2>MVP Development</h2>
              <p>
                The MVP, which is based on the original site, was built in
                React. We developed reusable components for cards, galleries,
                FAQs, and navigation. I also integrated the Fancybox library for
                interactive image viewing. The site was structured so that
                future updates (guides, reviews, etc.) could easily be added.
              </p>
            </div>
            <div className="project-subsection">
              <div className="visit-mira-image visit-mira-section">
                <a
                  href={ReactComponent1}
                  data-fancybox
                  data-caption="Reusable continent destination card"
                >
                  <img
                    src={ReactComponent1}
                    alt={`Reusable continent destination card`}
                    loading="lazy"
                  />
                </a>
                <a
                  href={ReactComponent2}
                  data-fancybox
                  data-caption="Reusable image gallery component"
                >
                  <img
                    src={ReactComponent2}
                    alt={`Reusable gallery component`}
                    loading="lazy"
                  />
                </a>
              </div>
              <p className="visit-mira-section">
                <strong>
                  Reusable card and image gallery components built in React.
                </strong>
              </p>
            </div>
          </div>
          <div className="project-div">
            <div className="page-subtitle">Design Solutions</div>
            <div className="project-subsection">
              <h2>Navigation & Structure</h2>
              <p>
                The redesign introduced a new desktop navigation bar, a
                mobile-friendly hamburger menu, and a new footer with links to
                the website's About page.
              </p>
            </div>
            <div className="project-subsection">
              <div className="visit-mira-image">
                <a href={OldNav} data-fancybox data-caption="Old Nav Bar">
                  <img src={OldNav} alt={`Old Nav Bar`} loading="lazy" />
                </a>
                <a
                  href={NewNavWeb}
                  data-fancybox
                  data-caption="New Nav Bar (Web)"
                >
                  <img
                    src={NewNavWeb}
                    alt={`New Nav Bar (Web)`}
                    loading="lazy"
                  />
                </a>
                <a
                  href={NewNavMobile}
                  data-fancybox
                  data-caption="New Nav Bar (Mobile)"
                >
                  <img
                    src={NewNavMobile}
                    alt={`New Nav Bar (Mobile)`}
                    loading="lazy"
                  />
                </a>
              </div>
              <p className="visit-mira-section">
                <strong>
                  Before (Top) vs. After (Bottom) Navigation Bar and Mobile
                  Hamburger Menu
                </strong>
              </p>
            </div>
            <div className="project-subsection">
              <h2>Homepage</h2>
              <p>
                A splash image and intro blurb set the tone, with featured
                continents highlighted through hover effects. A preview of the
                FAQs improved discoverability.
              </p>
            </div>
            <div className="project-subsection">
              <div className="visit-mira-image visit-mira-section">
                <a href={OldHome} data-fancybox data-caption="Old Homepage">
                  <img src={OldHome} alt={`Old Homepage`} loading="lazy" />
                </a>
                <a href={NewHome} data-fancybox data-caption="New Homepage">
                  <img src={NewHome} alt={`New Homepage`} loading="lazy" />
                </a>
              </div>
              <p className="visit-mira-section">
                <strong>Homepage: Before (Left) vs After (Right)</strong>
              </p>
            </div>
            <div className="project-subsection">
              <h2>New Los Angeles + Destinations</h2>
              <p>
                There is now a New Los Angeles page with district breakdowns.
              </p>
              <p>
                A central landing page now links all five continents. Each page
                includes updated visuals and interactive galleries.
              </p>
            </div>
            <div className="project-subsection">
              <div className="visit-mira-image visit-mira-section">
                <a
                  href={NLAScreen}
                  data-fancybox
                  data-caption="New Los Angeles Page"
                >
                  <img
                    src={NLAScreen}
                    alt={`New Los Angeles Page`}
                    loading="lazy"
                  />
                </a>
                <a
                  href={DestinationsScreen}
                  data-fancybox
                  data-caption="Destinations Page Hub"
                >
                  <img
                    src={DestinationsScreen}
                    alt={`Destinations Page Hub`}
                    loading="lazy"
                  />
                </a>
              </div>
              <p className="visit-mira-section">
                <strong>
                  New Los Angeles Page (Left) & Destinations Page Hub (Right)
                </strong>
              </p>
            </div>
            <div className="project-subsection">
              <h2>FAQs</h2>
              <p>
                Content was reorganized into categories (About Mira, Travel
                Info, Hotels, Transportation, Unique Experiences), allowing
                users to jump directly to the category they're interested in.
              </p>
            </div>
            <div className="project-subsection">
              <div className="visit-mira-image visit-mira-section">
                <a href={OldFAQs} data-fancybox data-caption="Old FAQs Section">
                  <img src={OldFAQs} alt={`Old FAQs Section`} loading="lazy" />
                </a>
                <a href={NewFAQs} data-fancybox data-caption="New FAQs Page">
                  <img src={NewFAQs} alt={`New FAQs Page`} loading="lazy" />
                </a>
              </div>
              <p className="visit-mira-section">
                <strong>
                  Old FAQs Section (Left) vs. New FAQs Page (Right)
                </strong>
              </p>
            </div>
          </div>
          <div className="project-div">
            <div className="page-subtitle">Post-MVP Enhancements</div>
            <p>
              Once the MVP was completed, we decided to expand the site with new
              features:
            </p>
            <p>
              ✴ <strong>Guides:</strong> Plants, fauna, weather, archaeology,
              and Tyrants
            </p>
            <div className="project-subsection">
              <div className="visit-mira-image">
                <a
                  href={Guides}
                  data-fancybox
                  data-caption="Guides page highlighting Mira's unique plants"
                >
                  <img
                    src={Guides}
                    alt={`Guides page highlighting Mira's unique plants`}
                    loading="lazy"
                  />
                </a>
                <p>
                  <strong>
                    Guides page highlighting Mira's unique plants.
                  </strong>
                </p>
              </div>
            </div>
            <p>
              ✴ <strong>Customer Reviews:</strong> In-universe 5-star reviews
              from characters (for the funsies)
            </p>
            <div className="project-subsection">
              <div className="visit-mira-image">
                <a
                  href={VisitorReviews}
                  data-fancybox
                  data-caption="Example visitor reviews"
                >
                  <img
                    src={VisitorReviews}
                    alt={`Example visitor reviews`}
                    loading="lazy"
                  />
                </a>
                <p>
                  <strong>Example Visitor Reviews</strong>
                </p>
              </div>
            </div>
            <p>
              ✴ <strong>Expanded Image Galleries:</strong> More screenshots per
              region
            </p>
          </div>
          <div className="project-div">
            <div className="page-subtitle">Outcome</div>
            <p>
              The redesign successfuly transformed Visit Mira into a more
              interactive travel experience through:
            </p>
            <p>
              ✴ <strong>Navigation Improvements:</strong> Easier access to
              continents, guides, and FAQs
            </p>
            <p>
              ✴ <strong>Mobile-First Design</strong> Responsive layouts work
              across devices
            </p>
            <p>
              ✴ <strong>Accessibility Improvements:</strong> WCAG-compliant
              color palette and typography
            </p>
            <p>
              ✴ <strong>Scalable System:</strong> React components allow for
              simple and quicker updates
            </p>
          </div>
          <div className="project-div">
            <div className="page-subtitle">Key Takeaways</div>
            <p>
              ✴ Through iterative design and MVP-focused development, I learned
              the value of designing for scalability and accessibility from the
              start.
            </p>
            <p>
              ✴ Personally capturing and curating in-game assets added
              authenticity while reinforcing the importance of blending design
              and storytelling.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default VisitMiraContent;
