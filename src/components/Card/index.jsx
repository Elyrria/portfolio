import profilPicture from "../../assets/img-cv1.webp"
import stacks from "../../datas/stacks.json"
import iconMail from "../../assets/svg/icon-mail.svg"
import iconMapPin from "../../assets/svg/icon-map-pin.svg"
import iconGitHub from "../../assets/svg/github-orange.svg"
import iconLinkedIn from "../../assets/svg/linkedin-orange.svg"
import iconDownload from "../../assets/svg/icon-download.svg"
import Tag from "../Tag"
import "./Card.scss"

function Card() {
    const stackFrontEnd = stacks[0].frontEnd
    const stackBackEnd = stacks[1].backEnd
    const stackFrontEndUpperCase = stackFrontEnd.map((stack) =>
        stack.toUpperCase(),
    )
    const stackBackEndUpperCase = stackBackEnd.map((stack) =>
        stack.toUpperCase(),
    )
    //! Amélioration possible pour la responsive (désactiver en dessous de 390px les textes liens et laisser les icones cliquable)
    return (
        <div className="card__container">
            <div className="card__container-profilPicture">
                <img src={profilPicture} alt="" />
            </div>
            <h2 className="card__container-h2">Quentin</h2>
            <h3 className="card__container-h3">Développeur Web</h3>
            <div className="card__container-links">
                <div className="link__container">
                    <img src={iconMail} alt="Icone mail" />
                    <a href="mailto:quentindumon352a@gmail.com">
                        quentindumon352a@gmail.com
                    </a>
                </div>
                <div className="link__container">
                    <img src={iconMapPin} alt="Icone localisation" />
                    <a
                        href="https://www.google.com/maps/place/Caen"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Caen - France
                    </a>
                </div>
                <div className="link__container">
                    <img src={iconGitHub} alt="Icone GitHub" />
                    <a
                        href="https://github.com/Elyrria"
                        target="_blank"
                        rel="noreferrer"
                    >
                        https://github.com/Elyrria
                    </a>
                </div>
                <div className="link__container">
                    <img src={iconLinkedIn} alt="Icone LinkedIn" />
                    <a
                        href="https://www.linkedin.com/in/quentin-dumon-13628a255/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Quentin Dumon
                    </a>
                </div>
            </div>
            <div className="card__container-tagsSkills">
                <div className="tagsSkills__container">
                    {stackFrontEndUpperCase.map((stack, index) => (
                        <Tag key={stack + index} name={stack} />
                    ))}
                </div>
                <div className="tagsSkills__container">
                    {stackBackEndUpperCase.map((stack, index) => (
                        <Tag key={stack + index} name={stack} />
                    ))}
                </div>
            </div>
            <a
                className="card__container-download"
                href="./download/Quentin_Dumon_CV.pdf"
                download="Quentin_Dumon_CV.pdf"
            >
                Mon CV <img src={iconDownload} alt="Icone téléchargement" />
            </a>
        </div>
    )
}

export default Card
