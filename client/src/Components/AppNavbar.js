import React, { Component, Fragment } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import RegisterModal from "./auth/RegisterModal";
import LoginModal from "./auth/LoginModal";
import Logout from "./auth/Logout";

class AppNavbar extends Component {
  state = {
    isOpen: false,
  };
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  static propTypes = {
    auth: PropTypes.object.isRequired,
  };

  //Info for navbar below
  //dark in Navbar lets bar know that back is dark so the text will be light
  //expand creates the menu on small screens
  //classNames can be added (mb-5) <- move everything down under Navbar
  //container so navelements go in middle
  //NavbarBrand href contains url
  //NavbarToggler toggles onClick event handler
  //Collapse isOpen set to isOpen state (of isOpen), specify its part of a navbar
  //  and within it give a Nav with a "ml-auto", margin-left auto which alligns left automatically

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <Fragment>
        <NavItem>
          <span className="navbar-text mr-4">
            <strong>{user ? `Welcome ${user.name}` : ""}</strong>
          </span>
        </NavItem>
        <NavItem>
          <NavLink href="/">Home Page</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/SearchPage">Search Profiles</NavLink>
        </NavItem>
        <NavItem>
          <Logout />
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/44cjohnson">Github</NavLink>
        </NavItem>
      </Fragment>
    );

    const guestLinks = (
      <Fragment>
        <NavItem>
          <RegisterModal></RegisterModal>
        </NavItem>
        <NavItem>
          <LoginModal></LoginModal>
        </NavItem>
      </Fragment>
    );

    return (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/">Exercise Routine</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ms-auto" navbar>
                {isAuthenticated ? authLinks : guestLinks}
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(AppNavbar);
