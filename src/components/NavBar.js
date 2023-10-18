// Bootstrap imports
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
// Component imports
import logo from "../assets/logo.png";
import { removeTokenTimestamp } from "../utils/utils";
// CSS imports
import styles from "../styles/NavBar.module.css";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../contexts/CurrentUserContext";
// React imports
import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
// Axios imports
import axios from "axios";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  // Variables to toggle open and closed mobile navbar burger menu
  const [toggleNavBar, setToggleNavBar] = useState(false);

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
      removeTokenTimestamp();
    } catch (err) {
      //console.log(err);
    }
  };

  const addIcons = (
    <>
      <div>
        <NavLink
          className={styles.AddIconLink}
          activeClassName={styles.Active}
          to="/posts/create"
        >
          <i className="far fa-plus-square"></i>Add post
        </NavLink>
        <NavLink
          className={styles.AddIconLink}
          activeClassName={styles.Active}
          to="/events/create"
        >
          <i className="fa-regular fa-calendar-plus"></i>Add event
        </NavLink>
      </div>
    </>
  );
  const loggedInIcons = (
    <>
      <NavDropdown
        id={styles.dropdownMenu}
        title=<span className={`${styles.dropdownText} d-sm-inline-column`}>
          <i className="fas fa-stream"></i>
          Feed
        </span>
      >
        <NavDropdown.Item
          id={styles.dropdownItem}
          as={Link}
          className={styles.NavLink}
          to="/postsfeed"
          onClick={() => {
            setToggleNavBar(!toggleNavBar);
          }}
        >
          <i className="fa-solid fa-bullhorn"></i>Posts
        </NavDropdown.Item>
        <NavDropdown.Item
          id={styles.dropdownItem}
          className={styles.NavLink}
          as={Link}
          to="/eventsfeed"
          onClick={() => {
            setToggleNavBar(!toggleNavBar);
          }}
        >
          <i className="fa-regular fa-calendar-days"></i>Events
        </NavDropdown.Item>
      </NavDropdown>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/bookmarked"
      >
        <i className="fa-regular fa-bookmark"></i>Bookmarks
      </NavLink>
      <NavLink className={styles.NavLink} to="/" onClick={handleSignOut}>
        <i className="fas fa-sign-out-alt"></i>Sign out
      </NavLink>
      <NavLink
        className={styles.NavLink}
        to={`/profiles/${currentUser?.profile_id}`}
      >
        <i className="fa-solid fa-user"></i>
        {currentUser?.username}
      </NavLink>
    </>
  );
  const loggedOutIcons = (
    <>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/signin"
      >
        <i className="fas fa-sign-in-alt"></i>Sign in
      </NavLink>
      <NavLink
        to="/signup"
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        <i className="fas fa-user-plus"></i>Sign up
      </NavLink>
    </>
  );

  return (
    <Navbar
      className={styles.NavBar}
      expand="md"
      fixed="top"
      expanded={toggleNavBar}
      collapseOnSelect
    >
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo" height="45" />
          </Navbar.Brand>
        </NavLink>
        {currentUser && addIcons}
        <Navbar.Toggle
          onClick={() => {
            setToggleNavBar(!toggleNavBar);
          }}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-right">
            <NavDropdown
              id={styles.dropdownMenu}
              title=<span
                className={`${styles.dropdownText} d-sm-inline-column`}
              >
                <i className="fa-regular fa-compass"></i>
                Discover
              </span>
            >
              <NavDropdown.Item
                id={styles.dropdownItem}
                as={Link}
                className={styles.NavLink}
                to="/"
                onClick={() => {
                  setToggleNavBar(!toggleNavBar);
                }}
              >
                <i className="fa-solid fa-bullhorn"></i>Posts
              </NavDropdown.Item>
              <NavDropdown.Item
                id={styles.dropdownItem}
                className={styles.NavLink}
                as={Link}
                to="/eventspage"
                onClick={() => {
                  setToggleNavBar(!toggleNavBar);
                }}
              >
                <i className="fa-regular fa-calendar-days"></i>Events
              </NavDropdown.Item>
            </NavDropdown>

            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
