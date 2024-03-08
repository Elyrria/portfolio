import "./Project.scss"
import { useEffect } from "react"
import projects from "../../datas/projets.json"
import ProjectSection from "../../components/ProjectSection"
function Project() {
    useEffect(() => {
        document.title = "Projets - Quentin Dumon"
    }, [])
    return (
        <main className="main__container">
            <div className="main__container-projects">
                <h2 className="main__title-style">Mes Projets</h2>
                {projects.map((project, index) => (
                    <ProjectSection
                        key={project.id}
                        project={project}
                        index={index}
                    />
                ))}
            </div>
        </main>
    )
}

export default Project
