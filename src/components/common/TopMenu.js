import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import PropTypes from "prop-types";

const TopMenu = ({ logOut, collapse }) => {
  return (
    <Navbar bg="light" expand="sm">
      <button
        type="button"
        id="sidebarCollapse"
        className="btn btn-info"
        onClick={collapse}
      >
        <i className="fas fa-align-left"></i>
      </button>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Link href="/#">Home</Nav.Link>
          <Nav.Link href="/#/project">Projects</Nav.Link>
          <Nav.Link onClick={logOut} href="/#">
            Logout
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

TopMenu.propTypes = {
  logOut: PropTypes.func.isRequired,
  collapse: PropTypes.func.isRequired,
};

export default TopMenu;
