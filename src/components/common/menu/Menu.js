import React from 'react';
import PropTypes from 'prop-types';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

import './styles.css';

const Menu = () => {
  return (
    <Nav bsStyle="pills" className="sidebar">
      <Navbar.Collapse style={{paddingLeft: '0px', paddingRight: '0px'}}>
        <NavItem href="/" eventKey={1} className="menu-item">Home</NavItem>
        <NavItem href="/users" eventKey={2} className="menu-item">Users</NavItem>
        <NavItem href="#" eventKey={3} className="menu-item">Support</NavItem>
        <NavItem href="#" eventKey={4} className="menu-item">Contact</NavItem>
      </Navbar.Collapse>
    </Nav>
  );
};

Menu.propTypes = {
  users: PropTypes.array,
};

export default Menu;
