import Introduction from "./Introduction"
import About from "./About"
import Skills from "./Skills"
import Contact from "./Contact"
import Projets from "./Projets"
import "./Home.scss"

function Home() {
    return (
        <main className="main__conatainer">
            <Introduction />
            <About />
            <Skills />
            <Projets />
            <Contact />
        </main>
    )
}

export default Home
