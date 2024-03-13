import Introduction from "./Introduction"
import About from "./About"
import Skills from "./Skills"
import Contact from "./Contact"
import Projets from "./Projets"
import { SharedActiveToastBar } from "../../utils/context/ActiveToastBar"
import { Bounce, ToastContainer, toast } from "react-toastify"
import { useLocation } from "react-router-dom"
import { useContext, useEffect } from "react"
import "react-toastify/dist/ReactToastify.css"
import "./Home.scss"

function Home() {
    const { hash } = useLocation()
    const {
        isActiveToastBar,
        messageToastBar,
        setIsActiveToastBar,
        setMessageToastBar,
    } = useContext(SharedActiveToastBar)

    useEffect(() => {
        document.title = "Portfolio - Quentin Dumon"
        if (isActiveToastBar) {
            const notify = () => toast(messageToastBar)
            notify()
            setTimeout(() => {
                setIsActiveToastBar(false)
                setMessageToastBar("")
            }, 3500)
        }
        if (hash === "") {
            window.scrollTo(0, 0)
        }
    }, [
        isActiveToastBar,
        messageToastBar,
        setIsActiveToastBar,
        setMessageToastBar,
        hash,
    ])
    return (
        <main className="main__container">
            <Introduction />
            <About />
            <Skills />
            <Projets />
            <Contact />
            <ToastContainer
                toastClassName="custom-toast"
                progressClassName="custom-progress"
                position="bottom-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
        </main>
    )
}

export default Home
