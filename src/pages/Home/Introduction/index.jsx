import dataProject from "../../../datas/projets.json"
import stack from "../../../datas/stacks.json"
import Card from "../../../components/Card"
import letter from "../../../assets/svg/icon_letter.svg"
import "./Introduction.scss"
function Introduction() {
    //Permet de calculer mes années d'expérience arrondie à l'entier supérieur
    const formationStartDate = new Date("2023-09-18")
    const currentdate = new Date()
    const difference = currentdate - formationStartDate
    const yearsExperience = difference / (1000 * 60 * 60 * 24 * 365)
    const roundedYearsExperience = Math.ceil(yearsExperience)
    //Permet de récupérer le troisième objet du tableau stack
    const thirdObject = stack[2]

    return (
        <section className="sectionIntroduction">
            <h2 className="main__title-style">Portfolio</h2>
            <div className="introduction__container">
                <Card />
                <div className="introduction__container-presentation">
                    <div className="presentation__container">
                        <div className="presentation__container-top">
                            <div>
                                <span className="balise__h1-style">
                                    {"<h1>"}{" "}
                                </span>
                                <div className="balise__rightSide">
                                    <h3>
                                        Hey <br /> Je suis <em>Quentin</em>,
                                        <br />
                                        <strong className="tagStrong-normal">
                                            Développeur Web
                                        </strong>
                                    </h3>
                                    <div className="balise__rightSide-h1Close">
                                        <span className="balise__h1-style">
                                            {"</h1>"}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="presentation__container-middle">
                            <span className="balise__p-style">{"<p>"}</span>
                            <p>
                                Actuellement en recherche d’une 
                                <strong> alternance </strong> à la rentrée 2024
                                pour préparer une formation de développeur
                                Full-Stack.
                            </p>
                            <span className="balise__p-style">{"</p>"}</span>
                        </div>
                        <div className="presentation__container-bottom">
                            <a href="#contact">Parlons-en</a>
                            <div className="letter__container">
                                <img src={letter} alt="Icone lettre" />
                            </div>
                        </div>
                    </div>
                    <div className="orangeCard__container">
                        <div className="element__container">
                            <div className="element__container-size">
                                {thirdObject.language.length}
                            </div>
                            <div>Technologies</div>
                        </div>
                        <div className="element__container">
                            <div className="element__container-size">
                                {dataProject.length}
                            </div>
                            <div>Projets</div>
                        </div>
                        <div className="element__container">
                            <div className="element__container-size">
                                {roundedYearsExperience}
                            </div>
                            <div>Année D'expérience</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Introduction
