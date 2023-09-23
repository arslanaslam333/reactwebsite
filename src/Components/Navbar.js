import React from 'react'
import logo from "./images/Travel Tours.png"
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import '../App.css';

export default function Navigation() {
  return (
    <div>
      <Navbar expand="lg" className="header">
      <Container>
        <Navbar.Brand to="/">
        <div className="Logo">
        <img className='small' src={logo} alt="Travel" />
        <Link to="/" className='name'><h3>Travel & Tours</h3></Link>
        </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link><b style={{fontSize:'20px'}}><Link className="link" to="/">Home</Link></b></Nav.Link>
            <Nav.Link><b style={{fontSize:'20px'}}><Link className="link" to="/about">About</Link></b></Nav.Link>
            <Nav.Link><b style={{fontSize:'20px'}}><Link className="link" to="/contact">Contact</Link></b></Nav.Link>
            <Nav.Link><b style={{fontSize:'20px'}}><Link className="link" to="/services">Services</Link></b></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}
