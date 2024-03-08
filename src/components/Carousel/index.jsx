import Carousel from "react-bootstrap/Carousel"
import project1 from "../../assets/carousel/booki.webp"
import project2 from "../../assets/carousel/sophie-bluel.webp"
import project3 from "../../assets/carousel/qwenta.webp"
import project4 from "../../assets/carousel/nina-carducci.webp"
import project5 from "../../assets/carousel/kasa.webp"
import project6 from "../../assets/carousel/mon-vieux-grimoire.webp"
import { Link } from "react-router-dom"
import mousePointer from "../../assets/svg/icon-mouse-pointer.svg"
import "./CarouselBootstrap.scss"
function CarouselBootstrap() {
    const projects = [
        project1,
        project2,
        project3,
        project4,
        project5,
        project6,
    ]
    return (
        <div>
            <Carousel slide={false} indicators={false} interval={null}>
                {projects.map((project, index) => (
                    <Carousel.Item key={`project-${index}`}>
                        <img
                            className="sizeCarousel__image"
                            src={project}
                            alt={`Slide ${index}`}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
            <Carousel.Caption>
                <div className="carouselCaptation_subContainer">
                    <Link to="/projets">Plus d'informations</Link>
                    <img src={mousePointer} alt="Pointer souris" />
                </div>
            </Carousel.Caption>
        </div>
    )
}

export default CarouselBootstrap
