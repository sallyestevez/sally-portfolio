import React from "react";
import { useParams } from "react-router";
import ProjectData from "../components/ProjectData";
import Header from "../components/Header";

function Project() {
    const { id } = useParams();

    const projectData = ProjectData.find((project) => project.id === id);

    return (
        <>
        <main className="pageWrapper">
        <Header />
            <div>
                <header className="project--header">
                    <div className="project-header-text">
                        <h1 className="projectTitle">{projectData.title}</h1>
                        <h2 className="projectBlurb">{projectData.blurb}</h2>
                    </div>
                </header>
            </div>
            <section>
                <div className="project--content">
                    {projectData.projectText.map((text, i) => {
                        const type = text.type;
                        switch (type) {
                            case "p":
                                return <p key={i}>{text.data}</p>;
                            case "h1":
                                return <h1 key={i}>{text.data}</h1>;
                            case "h2":
                                return <h2 key={i}>{text.data}</h2>;
                            case "h3":
                                return <h3 key={i}>{text.data}</h3>;
                            case "h4":
                                return <h4 key={i}>{text.data}</h4>;
                            default:
                                return <p key={i}>{text.data}</p>;
                        }
                    })}
                </div>
            </section>
        </main>
        </>
    )
}

export default Project;