import iconSend from "../../../assets/svg/icon-send.svg"
import scrollMouse from "../../../assets/svg/scroll-mouse.svg"
import "./Contact.scss"
function Contact() {
    return (
        <section className="sectionContact">
            <div className="sectionContact__container">
                <div className="sectionContact__container-scrollSvg">
                    <img src={scrollMouse} alt="Scroll mouse" />
                </div>
                <h2 className="sectionContact__container-title">Contact</h2>
                <p className="sectionContact__container-para">
                    N’hésitez pas à me contacter via ce formulaire ou par mail !
                    😃
                </p>
                {/* <h3 className="sectionContact__container-subTitle">
                    Contactez-Moi
                </h3> */}
                <form className="sectionContact__container-form">
                    <div className="form__inputs">
                        <div className="form__inputs-style">
                            <label htmlFor="name">Nom :</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Nom"
                                autoComplete="on"
                            />
                        </div>
                        <div className="form__inputs-style">
                            <label htmlFor="email">Email :</label>
                            <input
                                className="form__inputs-style"
                                type="text"
                                id="email"
                                name="email"
                                placeholder="Email"
                                autoComplete="on"
                            />
                        </div>
                    </div>
                    <div className="form__inputs-style">
                        <label htmlFor="message">Votre message :</label>
                        <textarea
                            className="form__inputs-style"
                            name="message"
                            id="message"
                            placeholder="Votre message"
                        ></textarea>
                    </div>
                    <button className="form__inputs-cta">
                        Envoyer
                        <img src={iconSend} alt="Icone d'envoie de message" />
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact
