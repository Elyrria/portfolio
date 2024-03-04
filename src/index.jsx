import React from "react"
import ReactDOM from "react-dom/client"
import Home from "./pages/Home"
import Project from "./pages/Project"
import Error from "./pages/Error"
import Header from "./components/Hearder"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./styles/index.scss"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projet/:id" element={<Project />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>,
)
