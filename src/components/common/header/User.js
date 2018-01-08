import React from 'react';
import PropTypes from 'prop-types';
import { Glyphicon, NavDropdown, MenuItem } from 'react-bootstrap';

const User = (props) => {
  const navDropdowUser = (
    <Glyphicon glyph="user">
      <span style={{paddingLeft: '5px', wordSpacing: '-10px'}}>{props.user.firstName} {props.user.lastName}</span>
    </Glyphicon>);
  return (
    <NavDropdown eventKey={3} title={navDropdowUser} id="basic-nav-dropdown">
      <MenuItem><h5 className="title">Profile</h5></MenuItem>
      <MenuItem><h5 className="title">Help</h5></MenuItem>
      <MenuItem divider />
      <MenuItem><h5 className="title" onClick={props.signout}>Sign Out</h5></MenuItem>
    </NavDropdown>
  );
};

User.propTypes = {
  user: PropTypes.object.isRequired,
  signout: PropTypes.func.isRequired,
};

export default User;
