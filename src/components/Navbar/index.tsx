
import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/">
            Information
          </NavLink>
          <NavLink to="/about">
            About
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;