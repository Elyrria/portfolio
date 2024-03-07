import { useContext } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { SharedActiveToastBar } from "../../utils/context/ActiveToastBar"
import * as yup from "yup"
import iconSend from "../../assets/svg/icon-send.svg"
import emailjs from "@emailjs/browser"
import "./ContactForm.scss"
function ContactForm() {
    const { setIsActiveToastBar, setMessageToastBar } = useContext(SharedActiveToastBar)
    const schema = yup
        .object({
            name: yup
                .string()
                .max(50, "Le nom ne doit pas dépasser 50 caractères")
                .required("Merci de rentrer votre nom et votre prénom"),
            email: yup
                .string()
                .email("Merci de rentrer un adresse mail valide")
                .max(75, "Le nom ne doit pas dépasser 75 caractères")
                .required("Merci de rentrer votre email"),
            message: yup
                .string()
                .max(500, "Le nom ne doit pas dépasser 500 caractères")
                .required("Merci de rentrer un message valide"),
        })
        .required("Tous les champs sont obligatoire")

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) })

    const onSubmit = (data, r) => {
        const templateId = "template_7qh5wef"
        const serviceId = "service_tzne5mb"
        sendFeedBack(serviceId, templateId, {
            name: data.name,
            email: data.email,
            message: data.message,
            replay_to: r.target.reset(), // Permet de remettre à 0 le formulaire
        })
    }

    const sendFeedBack = (serviceId, templateId, variable) => {
        emailjs
            .send(serviceId, templateId, variable, "79GlREMKKtwWUD5JL")
            .then((res) => {
                console.log("SUCCESS!")
                setIsActiveToastBar(true)
                setMessageToastBar("Votre mail a bien été envoyé")
            })
            .catch((error) => {
                console.error("ERROR" + error)
                setIsActiveToastBar(true)
                setMessageToastBar("Une erreur s'est produite")
            })
    }

    return (
        <form
            className="sectionContact__container-form"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="form__inputs">
                <div className="form__inputs-style">
                    <label htmlFor="name">Nom :</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Nom"
                        autoComplete="on"
                        {...register("name")}
                    />
                    {errors.name && (
                        <span className="error-yup">{errors.name.message}</span>
                    )}
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
                        {...register("email")}
                    />
                    {errors.email && (
                        <span className="error-yup">
                            {errors.email.message}
                        </span>
                    )}
                </div>
            </div>
            <div className="form__inputs-style">
                <label htmlFor="message">Votre message :</label>
                <textarea
                    className="form__inputs-style"
                    name="message"
                    id="message"
                    placeholder="Votre message"
                    {...register("message")}
                ></textarea>
                {errors.message && (
                    <span className="error-yup">{errors.message.message}</span>
                )}
            </div>
            <button className="form__inputs-cta">
                Envoyer
                <img src={iconSend} alt="Icone d'envoie de message" />
            </button>
        </form>
    )
}

export default ContactForm
