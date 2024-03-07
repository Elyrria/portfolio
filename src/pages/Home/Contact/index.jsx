import scrollMouse from "../../../assets/svg/scroll-mouse.svg"
import ContactForm from "../../../components/ContactForm"
import "./Contact.scss"
function Contact() {
    return (
        <section id="contact" className="sectionContact">
            <div className="sectionContact__container">
                <div className="sectionContact__container-scrollSvg">
                    <img src={scrollMouse} alt="Scroll mouse" />
                </div>
                <h2 className="sectionContact__container-title">Contact</h2>
                <p className="sectionContact__container-para">
                    N’hésitez pas à me contacter via ce formulaire ou par mail !
                    😃
                </p>
                <ContactForm />
            </div>
        </section>
    )
}

export default Contact
