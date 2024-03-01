import tagC from "../../assets/svg/balise_c.svg"
import linkedin from "../../assets/svg/linkedin.svg"
import github from "../../assets/svg/github.svg"

function Header() {
    return (
        <header>
            <div>
                <img src={tagC} alt="balise code fermante" />
                <h1>QuentinDumon</h1>
            </div>
            <nav>
                <div>
                    <a href="#">Accueil</a>
                    <a href="#">Projet</a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/quentin-dumon-13628a255/">
                        <img src={linkedin} alt="Icone linkedin" />
                    </a>
                    <a href="https://github.com/Elyrria">
                        <img src={github} alt="Icone GitHub" />
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Header
