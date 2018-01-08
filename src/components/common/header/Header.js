import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav } from 'react-bootstrap';

import './styles.css';
import User from './User';
import UserNotification from './UserNotification';

const Header = (props) => {
  return (
    <Navbar collapseOnSelect fixedTop fluid className="header">
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#" className="header-text">React App</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          {props.isLoggedIn ? <UserNotification notifications={props.loggedUser.notifications} /> : null}
          {props.isLoggedIn ? <User user={props.loggedUser} signout={props.signout} /> : <li><a href="/">Sign In</a></li>}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

Header.propTypes = {
  loggedUser: PropTypes.object.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  signout: PropTypes.func.isRequired,
};

export default Header;
