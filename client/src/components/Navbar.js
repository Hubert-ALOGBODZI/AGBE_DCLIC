import logo from "../images/logoNav.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";

import { Navigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useContext } from "react";
import ContextAuth from "../ContextAuth/ContextAuth";
import Doctors from "../components/Doctors";

import Admin from "../components/Admin"

function NavBar() {
  // const { isAuthentificated, setIsAuthentificated } = useContext(ContextAuth);
  return (
    <Navbar
      style={{
        background: "#0F5463",
      }}
      expand="lg"
    >
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            style={{ width: 150, paddingTop: 9 }}
            src={logo}
            alt="Logo du site"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{
              maxHeight: "100px",
              color: "white",
            }}
            navbarScroll
          >
            <Nav.Link
              style={{
                fontSize: "20px",
                color: "white",
              }}
              href="#LandingPage"
            >
              Acceuil
            </Nav.Link>
            <Nav.Link
              href="#Localisation"
              style={{
                color: "white",
                fontSize: "20px",
              }}
            >
              Hopitaux proches
            </Nav.Link>
            <Nav.Link
              href="#Consultation"
              style={{
                color: "white",
                fontSize: "20px",
              }}
            >
              Consultation
            </Nav.Link>

            <Nav.Link
              href="#Contact"
              style={{
                color: "white",
                fontSize: "20px",
              }}
            >
              Contact
            </Nav.Link>
            <Nav.Link
              href="/crudalogbodzihubert"
              style={{
                color: "white",
                fontSize: "20px",
              }}
            >
              Crud
            </Nav.Link>
            </Nav>

            <Nav
            className="ms-auto my-2 my-lg-0"
            style={{
              maxHeight: "100px",
              color: "white",
            }}
            navbarScroll
          >
            <Nav.Link
              href="/"
              style={{
                color: "white",
                fontSize: "20px",
                border:"2px solid red",
                backgroundColor:"red",
                borderRadius:"12px",
                opacity:".6"
              }}
            >
              Déconnection
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
