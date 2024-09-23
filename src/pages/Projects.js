import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";
import ProjectData from "../components/ProjectData";

function Projects() {
  return (
    <>
      <Header />
      <main className="PageWrapper">
        <h1 className="projectHeader">Projects</h1>
        {ProjectData.map((project, i) => (
          <ProjectCard 
            key={i}
            blurb={project.blurb} 
            date={project.publishedDate} 
            id={project.id}
            imageAlt={project.image.alt} 
            imageSrc={project.image.url} 
            title={project.title}
        />
      ))}
      </main>
    </>
  );
}

export default Projects;
