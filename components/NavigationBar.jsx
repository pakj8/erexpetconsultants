import React from "react";
import { Container, Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

function NavigationBar() {
  return (
    <Navbar
      className="navBar"
      style={{
        background: "#1A3C40",
      }}
      collapseOnSelect
      variant="dark"
      expand="lg"
      fixed="top"
    >
      <Container>
        <Link style={{ fontSize: "1.5rem" }} href="/">
          <a className="navbar-brand">
            <Image
              src="/ERlogo.svg"
              width={35}
              height={35}
              alt="Er Brand Logo"
            />
            <strong className="brand">ER Expert Consultants LLP</strong>
          </a>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav style={{ fontSize: "1rem" }} className="d-flex ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Study Abroad" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/maintainence">
                Study USA
              </NavDropdown.Item>

              <NavDropdown.Item href="/Maintainence">Study UK</NavDropdown.Item>
              <NavDropdown.Item href="/Maintainence">
                Study Canada
              </NavDropdown.Item>
              <NavDropdown.Item href="/Maintainence">
                Study Australia
              </NavDropdown.Item>
              <NavDropdown.Item href="/Maintainence">
                Study New Zealand
              </NavDropdown.Item>
              <NavDropdown.Item href="/Maintainence">
                Study Singapore
              </NavDropdown.Item>
              <NavDropdown.Item href="/Maintainence">
                Study Europe
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Work Permits" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Poland Work Permits
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Canada Work Permits
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Malta Work Permit
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                UAE Work Permit
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Immigration" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">PR Visa</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Business Visa
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                PNP Program
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Visit Visa</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">E-Visa</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#features">Contact Us</Nav.Link>
            <Nav.Link href="#">Free Consultation</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
