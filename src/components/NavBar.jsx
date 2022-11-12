import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Navbar collapseOnSelect className="fixed-top" sticky="top" expand="lg">
            <Container className="nav-container">
                <Navbar.Brand href="#top">Mason T Morris</Navbar.Brand>
                <Navbar.Toggle onClick={() => setIsOpen((isOpen) => !isOpen)} aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#top">About</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
