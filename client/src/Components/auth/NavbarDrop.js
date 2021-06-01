
import { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { RiLogoutBoxRLine } from "react-icons/ri";
import { FaCaretDown } from "react-icons/fa";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { FaUser, FaGithub } from "react-icons/fa";
import "./NavbarDrop.css";

const NavbarDrop = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);
    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle color="dark">
            <FaCaretDown size="1.5em"/>
          </DropdownToggle>
            <DropdownMenu className="NavbarDrop">
                <DropdownItem><FaUser></FaUser>{' '}My profile</DropdownItem>
                <DropdownItem divider />
                <DropdownItem><FaGithub/>{' '}Github</DropdownItem>
                <DropdownItem divider />
                <DropdownItem><RiLogoutBoxRLine/>{' '}Log Out</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}

export default NavbarDrop;