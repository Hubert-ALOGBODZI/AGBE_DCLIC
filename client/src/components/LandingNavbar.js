import logo from "../images/logoNav.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useContext, useState } from "react";
import ContextAuth from "../ContextAuth/ContextAuth";
import Doctors from "../components/Doctors";
import Login from "../Authentification/Login";
import Signup from "../Authentification/Signup";
function NavBar() {
    const {isAuthentificated} = useContext(ContextAuth);
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
                paddingRight:"50%"
              }}
              href="#LandingPage"
            >
              Acceuil
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
            id="btnSignup"
              href="/signup"
              style={{
                color: "white",
                fontSize: "20px",
                // border:" 2px solid white",
                borderRadius:"12px",
                // padding:"2%"
              }}

            >
          Signup 
            </Nav.Link> 
            <Nav.Link
              href="/login"
              style={{
                color: "white",
                fontSize: "20px",
                paddingLeft:"5%",

              }}
              id="btnLogin"
            >
            Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
