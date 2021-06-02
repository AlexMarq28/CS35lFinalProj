import { Nav, NavItem, NavLink, Container} from "reactstrap";
import Logout from "./auth/Logout";

import { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { FaCaretDown, FaHome } from "react-icons/fa";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { FaUser, FaSearch, FaGithub } from "react-icons/fa";
import "./NavbarDrop.css";
import { BsStopwatch } from "react-icons/bs";

const NavbarDrop = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle color="dark">
        <FaCaretDown size="1.5em" />
      </DropdownToggle>
      <DropdownMenu className="NavbarDrop" >
        <DropdownItem>
            <NavLink  style={{marginLeft: "-5px", color: "black"}} href="/MainProfilePage">
              <FaHome/> Home
            </NavLink>
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem>
          <NavLink  style={{marginLeft: "-5px", color: "black"}} href="/StopwatchPage">
            <BsStopwatch></BsStopwatch> Activity
          </NavLink>
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem>
          <NavLink  style={{marginLeft: "-5px", color: "black"}} href="/SearchPage">
            <FaSearch></FaSearch> Search
          </NavLink>
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem>
          <NavLink  style={{marginLeft: "-5px", color: "black"}} href="/ProfilePage">
            <FaUser></FaUser> My Profile
          </NavLink>
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem>
          <NavLink style={{marginLeft: "-5px", color: "black"}} href="https://github.com/44cjohnson/CS35lFinalProj">
            <FaGithub /> Github
          </NavLink>
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem >
          <Logout/> Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default NavbarDrop;
