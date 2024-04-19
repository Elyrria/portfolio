import scrollMouse from "../../../assets/svg/scroll-mouse.svg"
import videoSectionAbout from "../../../assets/Dumon_Quentin_CV_video.mp4"
import backgroundSection from "../../../assets/fond-section.webp"
import posterVideo from "../../../assets/poster-video.webp"
import "./About.scss"

function About() {
    return (
        <section className="sectionAbout">
            <img
                className="sectionAbout__backgroundSection"
                src={backgroundSection}
                alt="Fond de section about"
            />
            <div className="sectionAbout__container">
                <div className="sectionAbout__container-scrollSvg">
                    <img src={scrollMouse} alt="Scroll mouse" />
                </div>
                <h2 className="sectionAbout__container-title">À Propos</h2>
                <div className="sectionAbout__mainContainer">
                    <div className="sectionAbout__mainContainer-para">
                        <span className="balise__p-style">{"<p>"}</span>
                        <p>
                            <span className="modificationOrange">Bonjour!</span>
                            <br /> Je me présente, je suis <em>Quentin</em>.
                            Après plusieurs années dans l’animation
                            socioculturelle, j’ai décidé de changer d’horizon.
                            J’ai toujours été intéressé par la tech, j’ai donc
                            décidé de me former au métier de développeur. Fort
                            de mon expérience professionnelle antérieure, j’ai
                            aquis une rigueur et un sérieux que je suis soucieux
                            de mettre à profit dans mon apprentissage et mes
                            futures réalisations dans ce domaine. Récemment
                            diplômé d'une formation de développeur Web avec
                            OpenClassrooms, je suis désormais désireux de
                            continuer à approfondir mes compétences en intégrant
                            une{" "}
                            <strong>
                                formation de Développeur Full-Stack{" "}
                            </strong>
                            en
                            <strong> alternance</strong>.
                        </p>
                        <span className="balise__p-style">{"</p>"}</span>
                    </div>
                    <div className="sectionAbout__mainContainer-video">
                        <video
                            src={videoSectionAbout}
                            controls
                            poster={posterVideo}
                        ></video>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About
