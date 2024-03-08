import Tag from "../Tag"
import scrollMouse from "../../assets/svg/scroll-mouse.svg"
import ImageTest from "../../assets/carousel/booki.webp"
import backgroundSection from "../../assets/fond-section-projects.webp"
import "./ProjectSection.scss"
function ProjectSection({ projet, index }) {
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
                    {projet.name}
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
                                    {projet.scenario}
                                </p>
                            </div>
                            <div>
                                <h4 className="title__project-style">
                                    Compétences évaluées :
                                </h4>
                                <ul>
                                    {projet.skillsAssessed.map(
                                        (skill, index) => (
                                            <li key={`${index}-${projet.id}`}>
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
                        <img src={ImageTest} alt=" est" />
                        <div className="tags__container">
                            {projet.skills.map((skill, index) => (
                                <Tag key={`${index}-${skill}`} name={skill} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="sectionProject__container-subContainer">
                    <div className="subContainer">
                        <span className="balise__p-style">{"<p>"}</span>
                        <div className="subContainer__text">
                            <div>
                                <h4 className="title__project-style">
                                    Description :
                                </h4>
                                <p className="para__project-style">
                                    {projet.description}
                                </p>
                            </div>
                            <div>
                                <h4 className="title__project-style">
                                    Difficultés rencontrées :
                                </h4>
                                <p className="para__project-style">
                                    {projet.difficultys}
                                </p>
                            </div>
                        </div>
                        <span className="balise__p-style">{"</p>"}</span>
                    </div>
                </div>
                <a
                    className="sectionProject__container-link"
                    href={projet.link}
                    target="_blank"
                    rel="noreferrer"
                >
                    Lien vers le repo GitHub
                </a>
            </div>
        </section>
    )
}

export default ProjectSection
