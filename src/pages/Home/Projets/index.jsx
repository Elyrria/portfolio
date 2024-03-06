import backgroundSection from "../../../assets/fond_section.png"
import scrollMouse from "../../../assets/svg/scroll-mouse.svg"
import CarouselBootstrap from "../../../components/Carousel/"
import "./Projets.scss"
function Projets() {
    return (
        <section className="sectionProjets">
            <img
                className="sectionProjets__backgroundSection-rotate "
                src={backgroundSection}
                alt="Fond de section about"
            />
            <div className="sectionProjets__container">
                <div className="sectionProjets__container-imageContainer">
                    <img src={scrollMouse} alt="Scroll mouse" />
                </div>
                <h2 className="sectionProjets__container-title">Mes Projets</h2>
                <p className="sectionProjets__container-para">
                    Au cours de ma précédente formation, j’ai eu le plaisir de travailler sur les projets présentés ci-dessous :
                </p>
                <div className="sectionProjets__container-carousel">
                    <div className="carouselBootstrap">
                        <CarouselBootstrap />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projets
