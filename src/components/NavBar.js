import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import config from '../config';

const NavBar = () => (
  <Navbar collapseOnSelect expand="lg">
    <Navbar.Brand href="/">
      <img
        alt="Home"
        src={`${config.publicCloudfrontURL}/deuterx-logo.jpg`}
        height="60"
        className="d-inline-block align-top"
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto" activeKey={window.location.pathname}>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/news">News</Nav.Link>
        <Nav.Link href="/leadership">Leadership</Nav.Link>
        <Nav.Link href="/partnerships">Partnerships</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBar;
