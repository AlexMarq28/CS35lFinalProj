/* ----------------------------------------------------------------------------------------------------*/
/* Ernest (5:00PM 5/29/2021)
Description:
Installed react-icons, then imported some of them for use in AppNavBar.js.
For each Navlink, I've replaced the text with the icons so as to clean up the Navbar a bit.

IMPORTANT:
Please install react-icons as such before attempting to run, otherwise you'll run into compile errors:
Ernests-MBP:client ernestkim$ npm install react-icons
*/
import { FaUser, FaHome, FaGithub, FaSearch } from "react-icons/fa";
import "./AppNavbar.css";
/* ----------------------------------------------------------------------------------------------------*/
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
        <NavItem className="icons">
          <NavLink href="/SearchPage">
            <FaSearch size="1.2em" />
          </NavLink>
        </NavItem>
        <NavItem>
          <Logout />
        </NavItem>
        <NavItem className="icons">
          <NavLink href="https://github.com/44cjohnson/CS35lFinalProj">
            <FaGithub size="1.2em" />
          </NavLink>
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
