import iconLinkedIn from "../../assets/svg/linkedin.svg"
import iconGitHub from "../../assets/svg/github.svg"
import "./Footer.scss"

function Footer() {
    return (
        <footer>
            <div className="footer">
                <div className="footer__containerTop">
                    <p className="footer__containerTop-copyright">
                        © 2024 QuentinDumon. All rights reserved
                    </p>
                    <div className="footer__containerTop-socialLinks">
                        <div className="socialLinks__container">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.linkedin.com/in/quentin-dumon-13628a255/"
                            >
                                <img src={iconLinkedIn} alt="Icone LinkedIn" />
                            </a>
                        </div>
                        <div className="socialLinks__container">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://github.com/Elyrria"
                            >
                                <img src={iconGitHub} alt="Icone GitHub" />
                            </a>
                        </div>
                    </div>
                    <p className="footer__containerTop-credit">
                        Design by
                        <a
                            className="footer__containerTop-authorCredit"
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.instagram.com/johannleon2025/"
                        >
                            <span> JohannLeon</span>
                        </a>
                    </p>
                </div>
                <p className="footer__containerBottom">
                    This template was used as a base, with modifications made by
                    <a
                        className="footer__containerBottom-authorModifications"
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/quentin-dumon-13628a255/"
                    >
                        <span> QuentinDumon</span>
                    </a>
                </p>
            </div>
        </footer>
    )
}

export default Footer
