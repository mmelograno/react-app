import React from 'react';
import PropTypes from 'prop-types';
import { Glyphicon, NavDropdown } from 'react-bootstrap';

import './styles.css';
import Message from './Message';

const UserNotification = (props) => {
  const navDropdownTitle = (
    <Glyphicon glyph="envelope">
      <span className="label label-success custom">{props.notifications.length}</span>
    </Glyphicon>);
  return (
    <NavDropdown title={navDropdownTitle} noCaret id="basic-nav-dropdown">
      {props.notifications.map(notification => <Message key={notification.id} notification={notification} />)}
    </NavDropdown>
  );
};

UserNotification.propTypes = {
  notifications: PropTypes.array,
};

export default UserNotification;
