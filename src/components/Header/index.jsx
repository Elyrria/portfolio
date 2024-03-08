import { NavLink } from "react-router-dom"
import iconLinkedIn from "../../assets/svg/linkedin-orange.svg"
import iconGitHub from "../../assets/svg/github-orange.svg"
import "./Header.scss"

function Header() {
    return (
        <header>
            <div className="header__container">
                <h1 className="header__container-title">
                    <span className="balise__c-style">{"<C/> "}</span>
                    QuentinDumon
                </h1>
                <nav className="header__container-navigation">
                    <div className="navigation-links">
                        <NavLink to="/portfolio">Accueil</NavLink>
                        <NavLink to="/projets">Projet</NavLink>
                    </div>
                    <div className="navigation-socialLinks">
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.linkedin.com/in/quentin-dumon-13628a255/"
                        >
                            <img
                                className="nav-linkedin"
                                src={iconLinkedIn}
                                alt="Icone linkedin"
                            />
                        </a>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/Elyrria"
                        >
                            <img src={iconGitHub} alt="Icone GitHub" />
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header
