import React from "react";

class NavBar extends React.Component {
    render() {
        return (
            <nav>
                <a href="/" className="nav-link" id="home-button">
                    Mason Morris
                </a>
                <ul>
                    <li>
                        <a href="/about" className="nav-link">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="/projects" className="nav-link">
                            Projects
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default NavBar;
