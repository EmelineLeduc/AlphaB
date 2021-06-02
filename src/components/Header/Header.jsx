import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import AlphaB from "./assets/logo.png";
import "./Header.css";

function Navigation() {
  return (
    <Navbar
      className="nav"
      collapseOnSelec
      sticky="top"
      expand="sm"
      bg=""
      variant="dark"
    >
      <Navbar.Brand>
        <img id="logo" src={AlphaB} alt="logo AlphaB" />
      </Navbar.Brand>
      <NavbarToggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Link className="links" to="/">
            Accueil
          </Link>
          <Link className="links" to="/outils">
            Outils
          </Link>
          <Link className="links" to="/professionnels">
            Professionnels
          </Link>
          <Link className="links" to="/contact">
            Contact
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
