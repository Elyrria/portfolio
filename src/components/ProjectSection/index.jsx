import Tag from "../Tag"
import scrollMouse from "../../assets/svg/scroll-mouse.svg"
import mousePointer from "../../assets/svg/icon-mouse-pointer.svg"
import backgroundSection from "../../assets/fond-section-projects.webp"
import booki from "../../assets/booki/booki-multi-screen.webp"
import sophieBluel from "../../assets/sophie_bluel/sophie-bluel-multi-screen.webp"
import qwenta from "../../assets/qwenta/qwenta-multi-screen.webp"
import ninaCarducci from "../../assets/nina_carducci/nina-carducci-multi-screen.webp"
import kasa from "../../assets/kasa_app/kasa-multi-screen.webp"
import monVieuxGrimoire from "../../assets/mon_vieux_grimoire/mon-vieux-grimoire-multi-screen.webp"
import "./ProjectSection.scss"

function ProjectSection({ project, index }) {
    const projects = [
        { Booki: booki },
        { "Sophie Bluel": sophieBluel },
        { Qwenta: qwenta },
        { "Nina Carducci": ninaCarducci },
        { Kasa: kasa },
        { "Mon Vieux Grimoire": monVieuxGrimoire },
    ]
    return (
        <section className="sectionProject">
            {(index === 1 || index === 3 || index === 5) && (
                <img
                    className="sectionProject__backGroundSection"
                    src={backgroundSection}
                    alt="Fond de section"
                />
            )}
            <div className="sectionProject__container">
                <div className="sectionProject__container-scrollSvg">
                    <img src={scrollMouse} alt="Scroll mouse" />
                </div>
                <h3 className="sectionProject__container-title">
                    {project.name}
                </h3>
                <div className="sectionProject__container-subContainer">
                    <div className="subContainer">
                        <span className="balise__p-style">{"<p>"}</span>
                        <div className="subContainer__text">
                            <div>
                                <h4 className="title__project-style">
                                    Scénario :
                                </h4>
                                <p className="para__project-style">
                                    {project.scenario}
                                </p>
                            </div>
                            <div>
                                <h4 className="title__project-style">
                                    Compétences évaluées :
                                </h4>
                                <ul>
                                    {project.skillsAssessed.map(
                                        (skill, index) => (
                                            <li key={`${index}-${project.id}`}>
                                                {skill}
                                            </li>
                                        ),
                                    )}
                                </ul>
                            </div>
                        </div>
                        <span className="balise__p-style">{"</p>"}</span>
                    </div>
                    <div className="sectionProject__container-imageTags">
                        {projects.some(
                            (obj) => Object.keys(obj)[0] === project.name,
                        ) && (
                            <img
                                src={
                                    projects.find(
                                        (obj) =>
                                            Object.keys(obj)[0] ===
                                            project.name,
                                    )[project.name]
                                }
                                alt={`Projet ${project.name}`}
                            />
                        )}
                        <div className="tags__container">
                            {project.skills.map((skill, index) => (
                                <Tag key={`${index}-${skill}`} name={skill} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className={"sectionProject__container-subContainer"}>
                    <div
                        className={`subContaine ${!project.link ? "noLink" : ""}`}
                    >
                        <span className="balise__p-style">{"<p>"}</span>
                        <div className="subContainer__text">
                            <div>
                                <h4 className="title__project-style">
                                    Description :
                                </h4>
                                <p className="para__project-style">
                                    {project.description}
                                </p>
                            </div>
                            <div>
                                <h4 className="title__project-style">
                                    Difficultés rencontrées :
                                </h4>
                                <p className="para__project-style">
                                    {project.difficultys}
                                </p>
                            </div>
                        </div>
                        <span className="balise__p-style">{"</p>"}</span>
                    </div>
                </div>
                {project.link && (
                    <div className="sectionProject__container-link">
                        <a href={project.link} target="_blank" rel="noreferrer">
                            Lien vers le repo GitHub
                            <img src={mousePointer} alt="Pointer souris" />
                        </a>
                    </div>
                )}
            </div>
        </section>
    )
}

export default ProjectSection
