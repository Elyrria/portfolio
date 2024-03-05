import dataProject from "../../../datas/projets.json"
import stack from "../../../datas/stacks.json"
import Card from "../../../components/Card"
import h1Open from "../../../assets/svg/balise_h1_open.svg"
import h1Close from "../../../assets/svg/balise_hi_close.svg"
import pOpen from "../../../assets/svg/balise_p_open.svg"
import pClose from "../../../assets/svg/balise_p_close.svg"
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
        <section>
            <h2 className="h1 introduction__title">Portfolio</h2>
            <div className="introduction__container">
                <Card />
                <div className="introduction__container-presentation">
                    <div className="presentation__container">
                        <div className="presentation__container-top">
                            <div>
                                <img src={h1Open} alt="Balise h1 ouvrante" />
                                <div className="balise__rightSide">
                                    <h3>
                                        Hey <br /> Je suis{" "}
                                        <em>Quentin</em>,
                                        <br />
                                        <strong className="tagStrong-normal">Développeur Web</strong>
                                    </h3>
                                    <div className="balise__rightSide-h1Close">
                                        <img
                                            src={h1Close}
                                            alt="Balise h1 fermante"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="presentation__container-middle">
                            <div>
                                <img src={pOpen} alt="Balise p ouvrante" />
                            </div>
                            <p>
                                Actuellement en recherche d’
                                <strong>alternance </strong>
                                pour préparer une formation de développeur
                                Full-Stack avec le centre de formation Créative
                                à Hérouville-Saint-Clair (14)
                            </p>
                            <div>
                                <img src={pClose} alt="Balise p fermante" />
                            </div>
                        </div>
                        <div className="presentation__container-bottom">
                            {/* /!!Penser à ajouter le lien d'ancre qui regirige vers le formulaire de contacte */}
                            <a href="#">Parlons-en</a>
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
