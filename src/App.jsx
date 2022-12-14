import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import ProjectsQuery from "./components/Projects-Query";
import ContactForm from "./components/ContactForm";
import "./style/css/output.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <NavBar />
        <Hero />
        <About />
        <ProjectsQuery />
        <ContactForm />
    </React.StrictMode>
);
