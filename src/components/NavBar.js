import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import config from '../config';

const NavBar = () => (
  <Navbar collapseOnSelect expand="lg">
    <Navbar.Brand as={NavLink} to="/">
      <img
        alt="Home"
        src={`${config.publicCloudfrontURL}/deuterx-logo${window.devicePixelRatio > 1 ? '-2x' : ''}.png`}
        height="60"
        className="d-inline-block align-top"
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto" activeKey={window.location.pathname}>
        <Nav.Link eventKey="1" as={NavLink} to="/strategy">R&D Strategy</Nav.Link>
        <Nav.Link eventKey="2" as={NavLink} to="/news">News</Nav.Link>
        <Nav.Link eventKey="3" as={NavLink} to="/leadership">Leadership</Nav.Link>
        <Nav.Link eventKey="4" as={NavLink} to="/partnerships">Pipeline / Partnerships</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBar;
