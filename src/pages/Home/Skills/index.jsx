import "./Skills.scss"
import skillsArray from "../../../datas/stacks.json"
import LogoSkill from "../../../components/LogoSkill"
import baliseClose from "../../../assets/svg/balise-fermante.svg"
import scrollMouse from "../../../assets/svg/scroll-mouse.svg"
function Skills() {
    const skills = skillsArray[3].skills
    console.log(skills)
    return (
        <section className="sectionSkills">
            <div className="sectionSkills__imageContainer">
                <img src={scrollMouse} alt="Scroll mouse" />
                <img
                    className="sectionSkills__imageContainer-tagClose"
                    src={baliseClose}
                    alt="Balise fermante"
                />
            </div>
            <div className="sectionSkills__container">
                <h2 className="sectionSkills__container-title">
                    Mes Compétences
                </h2>
                <p className="sectionSkills__container-para">
                    Je suis passionné par l'acquisition de connaissances et
                    animé par un désir ardent d'apprendre. Le domaine du
                    développement offre un vaste univers où je peux pleinement
                    assouvir cette soif de savoir.
                </p>
                <div className="sectionSkills__container-skills">
                    {skills.map((skill) => (
                        <LogoSkill name={skill} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
