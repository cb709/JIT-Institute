import React from "react";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../images/logo.png";

const navlinks = [
  {
    name: "হোম",
    link: "/",
  },
  {
    name: "আমাদের সম্পর্কে",
    link: "/about-us",
  },
  {
    name: "সাফল্যের গল্প",
    link: "/success-stories",
  },
  {
    name: "যোগাযোগ",
    link: "/contact",
  },
  {
    name: "সাপোর্ট",
    link: "/support",
  }
];

const Header = () => {
  return (
    <div className="header">
      <Navbar expand="lg" className="navbar py-4 py-sm-5">
        <Container>
          <Navbar.Brand>
            <Link to={"/"}>
              <Image src={logo}></Image>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="flex-grow-0">
            <Nav className="me-auto">
              {navlinks.map((item, index) => (
                <NavLink className="header-nav-link mt-3 mt-lg-0 ms-0 ms-lg-2 text-decoration-none px-3 py-2 rounded" to={item.link}>{item.name}</NavLink>
              ))}

              <NavLink className="header-nav-link mt-3 mt-lg-0 ms-0 ms-lg-2 text-decoration-none px-3 py-2 rounded active-nav" to="/courses">কোর্স সমূহ</NavLink>
              
              <NavLink className="header-nav-link mt-3 mt-lg-0 ms-0 ms-lg-2 text-decoration-none px-3 py-2 rounded" to="/login">লগইন</NavLink>


            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
