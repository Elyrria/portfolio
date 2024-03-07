import Introduction from "./Introduction"
import About from "./About"
import Skills from "./Skills"
import Contact from "./Contact"
import Projets from "./Projets"
import { SharedActiveToastBar } from "../../utils/context/ActiveToastBar"
import { Bounce, ToastContainer, toast } from "react-toastify"
import { useContext, useEffect } from "react"
import "react-toastify/dist/ReactToastify.css"
import "./Home.scss"

function Home() {
    const {
        isActiveToastBar,
        messageToastBar,
        setIsActiveToastBar,
        setMessageToastBar,
    } = useContext(SharedActiveToastBar)

    useEffect(() => {
        if (isActiveToastBar) {
            const notify = () => toast(messageToastBar)
            notify()
            setTimeout(() => {
                setIsActiveToastBar(false)
                setMessageToastBar("")
            }, 3500)
        }
    }, [
        isActiveToastBar,
        messageToastBar,
        setIsActiveToastBar,
        setMessageToastBar,
    ])
    return (
        <main className="main__conatainer">
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
