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
            <NavbarBrand href="/">ExerciseList</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ms-auto" navbar>
                <NavItem>
                  <NavLink href="/">Home Page</NavLink>
                </NavItem>
		<NavItem>
                  <NavLink href="/RegisterPage">Create a New Profile</NavLink>
                </NavItem>
		<NavItem>
                  <NavLink href="/LoginPage">Log in to Profile</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/MainProfilePage">Main Profile Page</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/SearchPage">Search Profiles</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/44cjohnson">Github</NavLink>
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
