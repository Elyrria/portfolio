import Introduction from "./Introduction"
import About from "./About"
import "./Home.scss"

function Home() {
    return (
        <main className="main__conatainer">
            <Introduction />
            <About />
        </main>
    ) // style CSS de test. À supprimer ensuite
}

export default Home
