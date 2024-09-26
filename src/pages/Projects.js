import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";
import ProjectData from "../components/ProjectData";

// CHECK OTHER PORTFOLIOS TO SEE HOW THEY DISPLAY THEIR PROJECTS
// TRY TO MAKE ALL PROJECT DIVS THE SAME HEIGHT
// RESPONSIVE WEB PAGES
// USE SAME FORMAT FOR 'OTHER WORK' PAGE

function Projects() {
  return (
    <>
      <Header />
      <main className="PageWrapper">
        <h1 className="projectHeader">Projects</h1>
        <div className="ProjectsSection">
          <div className="Project">
            <ProjectCard
              key={ProjectData[0]}
              blurb={ProjectData[0].blurb}
              completed={ProjectData[0].completed}
              id={ProjectData[0].id}
              imageAlt={ProjectData[0].image.alt}
              imageSrc={ProjectData[0].image.url}
              title={ProjectData[0].title}
            />
          </div>
          <div className="Project">
            <ProjectCard
              key={ProjectData[1]}
              blurb={ProjectData[1].blurb}
              completed={ProjectData[1].completed}
              date={ProjectData[1].publishedDate}
              id={ProjectData[1].id}
              imageAlt={ProjectData[1].image.alt}
              imageSrc={ProjectData[1].image.url}
              title={ProjectData[1].title}
            />
          </div>
        </div>
        <div className="ProjectsSection">
          <div className="Project">
            <ProjectCard
              key={ProjectData[2]}
              blurb={ProjectData[2].blurb}
              completed={ProjectData[2].completed}
              date={ProjectData[2].completed}
              id={ProjectData[2].id}
              imageAlt={ProjectData[2].image.alt}
              imageSrc={ProjectData[2].image.url}
              title={ProjectData[2].title}
            />
          </div>
          <div className="Project">
            <ProjectCard
              key={ProjectData[3]}
              blurb={ProjectData[3].blurb}
              completed={ProjectData[3].completed}
              date={ProjectData[3].publishedDate}
              id={ProjectData[3].id}
              imageAlt={ProjectData[3].image.alt}
              imageSrc={ProjectData[3].image.url}
              title={ProjectData[3].title}
            />
          </div>
        </div>
        <div className="ProjectsSection">
          <div className="Project">
            <ProjectCard
              key={ProjectData[4]}
              blurb={ProjectData[4].blurb}
              completed={ProjectData[4].completed}
              date={ProjectData[4].completed}
              id={ProjectData[4].id}
              imageAlt={ProjectData[4].image.alt}
              imageSrc={ProjectData[4].image.url}
              title={ProjectData[4].title}
            />
          </div>
          <div className="Project">
            <ProjectCard
              key={ProjectData[5]}
              blurb={ProjectData[5].blurb}
              completed={ProjectData[5].completed}
              date={ProjectData[5].publishedDate}
              id={ProjectData[5].id}
              imageAlt={ProjectData[5].image.alt}
              imageSrc={ProjectData[5].image.url}
              title={ProjectData[5].title}
            />
          </div>
        </div>
        <div className="ProjectsSection">
          <div className="Project">
            <ProjectCard
              key={ProjectData[6]}
              blurb={ProjectData[6].blurb}
              completed={ProjectData[6].completed}
              date={ProjectData[6].completed}
              id={ProjectData[6].id}
              imageAlt={ProjectData[6].image.alt}
              imageSrc={ProjectData[6].image.url}
              title={ProjectData[6].title}
            />
          </div>
          <div className="Project">
            <ProjectCard
              key={ProjectData[5]}
              blurb={ProjectData[5].blurb}
              completed={ProjectData[5].completed}
              date={ProjectData[5].publishedDate}
              id={ProjectData[5].id}
              imageAlt={ProjectData[5].image.alt}
              imageSrc={ProjectData[5].image.url}
              title={ProjectData[5].title}
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default Projects;
