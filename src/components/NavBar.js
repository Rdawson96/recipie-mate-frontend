import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import styles from '../styles/NavBar.module.css'
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
      <Navbar className={styles.NavBar} expand="md" fixed="top">
        <Container>
        <NavLink to="/">
          <Navbar.Brand>
            Recipie Mate
          </Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            <NavLink to="/" className={({ isActive }) => isActive ? `${styles.NavLink} ${styles.Active}` : styles.NavLink}>Home</NavLink>
            <NavLink to="/signin" className={({ isActive }) => isActive ? `${styles.NavLink} ${styles.Active}` : styles.NavLink}>Sign In</NavLink>
            <NavLink to="/signup" className={({ isActive }) => isActive ? `${styles.NavLink} ${styles.Active}` : styles.NavLink}>Sign Up</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  };

export default NavBar;

