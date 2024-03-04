import { NavLink } from "react-router-dom"
import tagC from "../../assets/svg/balise_c.svg"
import iconLinkedIn from "../../assets/svg/linkedin-orange.svg"
import iconGitHub from "../../assets/svg/github-orange.svg"
import "./Header.scss"

function Header() {
    return (
        <header>
            <div className="header__container">
                <div className="header__container-title">
                    <img
                        className="title-element"
                        src={tagC}
                        alt="balise code fermante"
                    />
                    <h1 className="title-element">QuentinDumon</h1>
                </div>
                <nav className="header__container-navigation">
                    <div className="navigation-links">
                        <NavLink to="/">Accueil</NavLink>
                        <NavLink to="/projet">Projet</NavLink>
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
