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
      <DropdownMenu className="NavbarDrop">
        <DropdownItem>
          <FaHome></FaHome> My Workouts
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem>
          <BsStopwatch></BsStopwatch> Activity
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem>
          <FaSearch></FaSearch> Search
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem>
          <FaUser></FaUser> My Profile
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem>
          <FaGithub /> Github
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem>
          <RiLogoutBoxRLine /> Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default NavbarDrop;
