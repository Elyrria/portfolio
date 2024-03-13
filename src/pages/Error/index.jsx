import image404 from "../../assets/404.webp"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import "./Error.scss"
function Error() {
    useEffect(() => {
        document.title = "404 - Error 🙈"
    }, [])
    return (
        <main>
            <div className="error__container">
                <img src={image404} alt="Erreur 404" />
                <p>Oups la page que vous cherchez n'existe pas !</p>
                <Link to="/portfolio">Revenir à la page d'accueil</Link>
            </div>
        </main>
    )
}

export default Error
