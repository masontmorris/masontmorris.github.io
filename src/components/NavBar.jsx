import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Navbar collapseOnSelect className="fixed-top" sticky="top" expand="lg">
            <Container className="nav-container">
                <Navbar.Brand href="#top" class="brand">
                    <span class="brand-camelcase">M</span>ASON <span class="brand-camelcase">M</span>ORRIS
                </Navbar.Brand>
                <Navbar.Toggle onClick={() => setIsOpen((isOpen) => !isOpen)} aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="nav-link" href="#top">
                            About
                        </Nav.Link>
                        <Nav.Link className="nav-link" href="#projects">
                            Projects
                        </Nav.Link>
                        <Nav.Link className="nav-link" href="#contact">
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
