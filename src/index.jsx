import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <NavBar />
        <About />
        <Projects />
        <Contact />
    </React.StrictMode>
);
