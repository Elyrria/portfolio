import "./LogoSkill.scss"
import iconHTML from "../../assets/svg/icon-html5.svg"
import iconCSS from "../../assets/svg/icon-css3.svg"
import iconSASS from "../../assets/svg/icon-sass.svg"
import iconJS from "../../assets/svg/icon-js.svg"
import iconREACT from "../../assets/svg/icon-react.svg"
import iconNODEJS from "../../assets/svg/icon-nodejs.svg"
import iconEXPRESS from "../../assets/svg/icon-express.svg"
import iconMONGODB from "../../assets/svg/icon-mongodb.svg"

function LogoSkill({ name }) {
    console.log(name)
    const skills = [
        { html: { color: "#e54f26", icon: iconHTML } },
        { css: { color: "#0c73b8", icon: iconCSS } },
        { sass: { color: "#cd6799", icon: iconSASS } },
        { js: { color: "#e7a020", icon: iconJS } },
        { react: { color: "#28a9e0", icon: iconREACT } },
        { nodejs: { color: "#68a063", icon: iconNODEJS } },
        { mongodb: { color: "#4db33d", icon: iconMONGODB } },
        { express: { color: "#e7762b", icon: iconEXPRESS } },
    ]
    //Permet de trouver le skill passé en props dans le tableau skills
    const findSkill = skills.find(
        (skill) => name.toLowerCase() === Object.keys(skill)[0],
    )
    //Permet de récupérer la src de l'icon et de la stocker dans la constante
    const iconSrc = findSkill ? findSkill[name.toLowerCase()].icon : null

    return (
        <div className="logoSkill__container">
            <div className={`logoSkill__container-round ${"icon-" + name}`}>
                <img src={iconSrc} alt={`Ìcone ${name}`} />
            </div>
            <p className="logoSkill__container-para">{name.toUpperCase()}</p>
        </div>
    )
}

export default LogoSkill
