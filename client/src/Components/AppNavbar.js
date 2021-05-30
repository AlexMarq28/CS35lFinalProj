/* ----------------------------------------------------------------------------------------------------*/
/* Ernest (5:00PM 5/29/2021)
Description:
Installed react-icons, then imported some of them for use in AppNavBar.js.
For each Navlink, I've replaced the text with the icons so as to clean up the Navbar a bit.

IMPORTANT:
Please install react-icons as such before attempting to run, otherwise you'll run into compile errors:
Ernests-MBP:client ernestkim$ npm install react-icons
*/
import { FaShoePrints, FaUser, FaHome, FaGithub, FaSearch } from "react-icons/fa";
import './AppNavbar.css';
/* ----------------------------------------------------------------------------------------------------*/

import React, { Component } from "react";

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

class AppNavbar extends Component {
  state = {
    isOpen: false,
  };
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
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
    return (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
            <div className="navbarBrand" >
              <NavbarBrand className="font-link" href="/" style={{ fontSize: 36}}>
              <FaShoePrints className="logo" size="1em"/>
              milestone
              </NavbarBrand>
            </div>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ms-auto" navbar>
                <NavItem className="icons">
                  <NavLink href="/"><FaHome size="1.2em"/></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/RegisterPage">Create a New Profile</NavLink>
                </NavItem>
		            <NavItem>
                  <NavLink href="/LoginPage">Log in to Profile</NavLink>
                </NavItem>
                <NavItem className="icons">
                  <NavLink href="/MainProfilePage"><FaUser size="1.2em" /></NavLink>
                </NavItem>
                <NavItem className="icons">
                  <NavLink href="/SearchPage">< FaSearch size="1.2em"/></NavLink>
                </NavItem>
                <NavItem className="icons">
                  <NavLink href="https://github.com/44cjohnson/CS35lFinalProj"><FaGithub size="1.2em"/></NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;
