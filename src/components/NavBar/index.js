
import React, { useState } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, Collapse} from "reactstrap";
import logo from "../../assets/images/logo1.gif"
import { FiMenu } from 'react-icons/fi';
import {
  Link,
} from "react-scroll";

const NavBar = () => {

    const [collapsed, setCollapsed] = useState(true)
  const toggleNavbar = () => setCollapsed(!collapsed)
  

    return (
      <Navbar expand="lg">
        <div className="d-flex container-fluid">
          <div className="navbar-collapse flex-row justify-content-between">
            <NavbarBrand>
              <div className="logoimg d-flex justify-content-between align-items-center">
                <img src={logo} alt="logo" width={150} />
                <button
                  aria-expanded={collapsed}
                  className="navbar-toggler popbutton"
                  onClick={toggleNavbar}
                >
                  <FiMenu color="black" size="24" />
                </button>
              </div>
            </NavbarBrand>
          </div>
          <Collapse isOpen={!collapsed} navbar className="position-nav">
            <div className="d-flex flex-column flex-lg-row justifty-content-start justifty-content-lg-between bg-service p-4 mt-3 align-items-center align-items-lg-center">
              <Nav className="nav-link-space d-flex flex-column flex-lg-row ff-bold">
                <NavItem className="nav-link">
                  <Link
                    to="home"
                    className="navbar-options"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    Home
                  </Link>
                </NavItem>
                <NavItem className="nav-link">
                  <Link
                    to="about"
                    className="navbar-options"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    About
                  </Link>
                </NavItem>
                <NavItem className="nav-link">
                  <Link
                    to="skills"
                    className="navbar-options"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    Skills
                  </Link>
                </NavItem>
                <NavItem className="nav-link">
                  <Link
                    className="navbar-options"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    Projects
                  </Link>
                </NavItem>
                <NavItem className="nav-link">
                  <Link
                    to="contact"
                    className="navbar-options"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    Contact
                  </Link>
                </NavItem>
              </Nav>
            </div>
          </Collapse>
        </div>
      </Navbar>
    );
}

export default NavBar