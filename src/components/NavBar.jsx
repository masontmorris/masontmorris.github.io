import React, { useState } from "react";
import Media from "react-media";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header>
            <nav id="navbar">
                <div id="brand">
                    <span class="brand-upper">M</span>ason <span className="brand-upper">M</span>orris
                </div>
                <div className={isOpen ? "nav-links show-nav" : "nav-links"}>
                    <a href="" className="nav-link" id="about-nav">
                        About
                    </a>
                    <a href="" className="nav-link" id="projects-nav">
                        Projects
                    </a>
                    <a href="" className="nav-link" id="contact-nav">
                        Contact
                    </a>
                </div>
            </nav>
            <Media queries={{ mobile: "(max-width: 599px)", pc: "(min-width: 600px)" }}>
                {(matches) => (
                    <div>
                        {matches.mobile && (
                            <button
                                id="nav-toggle"
                                onclick={() => {
                                    setIsOpen(!isOpen);
                                }}
                            >
                                <FaBars />
                            </button>
                        )}
                    </div>
                )}
            </Media>
        </header>
    );
};

export default NavBar;

// TODO: Add a button to the navbar that will toggle the navbar open and closed.
// TODO: Make the navbar responsive.
// TODO: Copy brand casing and font styling from older commit.
