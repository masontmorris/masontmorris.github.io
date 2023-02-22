import React, { useState } from "react";
import Media from "react-media";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header>
            <nav id="navbar">
                <Media queries={{ mobile: "(max-width: 599px)", pc: "(min-width: 600px)" }}>
                    {(matches) => (
                        <div>
                            {matches.mobile && (
                                <button
                                    id="nav-toggle"
                                    onClick={() => {
                                        setIsOpen(!isOpen);
                                    }}
                                >
                                    <FaBars id="toggle-svg" />
                                </button>
                            )}
                        </div>
                    )}
                </Media>
                <div id="brand">
                    <span className="brand-upper">M</span>ason <span className="brand-upper">M</span>orris
                </div>
                <div className={isOpen ? "nav-links show-nav" : "nav-links"}>
                    <a href="#about" className="nav-link" id="about-nav">
                        About
                    </a>
                    <a href="#projects" className="nav-link" id="projects-nav">
                        Projects
                    </a>
                    <a href="#contact" className="nav-link" id="contact-nav">
                        Contact
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;

// TODO: Add a button to the navbar that will toggle the navbar open and closed.
// TODO: Make the navbar responsive.
// TODO: Copy brand casing and font styling from older commit.
