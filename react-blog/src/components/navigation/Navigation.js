import React from "react";
import './Navigation.css';
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import { Navbar, Nav, NavbarBrand, NavDropdown, Container, NavLink} from 'react-bootstrap';
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
const Navigation = () => {
    return (
    <>
     <Navbar id="navbar navbar-expand-lg" className="navbar" >
        <Container fluid>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav ">
                <Nav className="navbar-nav" style={{ width: "100%" }}>
                    <ul className="nav nav-pills nav-link justify-content-center mx-auto">
                        <li className="nav-item"><a className="nav-link" href="#home">home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#home">about</a></li>
                        <li className="nav-item"><a className="nav-link" href="#home">technology</a></li>
                        <li className="nav-item"><a className="nav-link" href="#home">lifestyle</a></li>
                    </ul>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    </>
    )
}

export default Navigation;