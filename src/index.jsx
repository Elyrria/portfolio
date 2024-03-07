import React from "react"
import ReactDOM from "react-dom/client"
import Home from "./pages/Home"
import Project from "./pages/Project"
import Error from "./pages/Error"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { DataActiveToastBar } from "./utils/context/ActiveToastBar"
import "./styles/index.scss"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <Router>
            <DataActiveToastBar>
                <Header />
                <Routes>
                    <Route path="/portfolio" element={<Home />} />
                    <Route path="/projet" element={<Project />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </DataActiveToastBar>
            <Footer />
        </Router>
    </React.StrictMode>,
)
