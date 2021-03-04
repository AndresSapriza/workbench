import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Navbar, Nav } from "react-bootstrap";
import { newUser } from "../../../tools/mockData";
import * as authActions from "../../redux/actions/authActions";

const HomePage = ({ user, logOut }) => {
  return (
    <>
      <Navbar bg="light" expand="sm">
        <Navbar.Brand href="/">doitCRM</Navbar.Brand>
        <Navbar.Text>{`Welcome ${user.name}`}</Navbar.Text>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link onClick={logOut} href="#">
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

HomePage.propTypes = {
  user: PropTypes.object.isRequired,
  logOut: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const user = state.auth.user ? state.auth.user : newUser;
  return {
    user,
  };
}

const mapDispatchToProps = {
  logOut: authActions.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
