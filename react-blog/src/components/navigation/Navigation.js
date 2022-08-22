import React from "react";
import './Navigation.css';
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import { Navbar, Nav, NavbarBrand, NavDropdown, Container, NavLink} from 'react-bootstrap';
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { Route, Router, Routes, Link, Switch } from 'react-router-dom';

const Navigation = () => {
    return (
    <>
     <Navbar id="navbar navbar-expand-lg" className="navbar" >
        <Container fluid>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav ">
                <Nav className="navbar-nav" style={{ width: "100%" }}>
                    <ul className="nav nav-pills nav-link justify-content-center mx-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">about</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/tech" className="nav-link">technology</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/lifestyle" className="nav-link">lifestyle</Link>
                        </li>
                    </ul>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    </>
    )
}

export default Navigation;