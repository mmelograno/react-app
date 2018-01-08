import React from 'react';
import PropTypes from 'prop-types';
import { MenuItem } from 'react-bootstrap';
import './styles.css';

const Message = (props) => {
  return (
    <MenuItem className="notification">
        <h5 className="title">{props.notification.title}<small className="time">{props.notification.timestamp}</small></h5>
        <p className="message">{props.notification.message}</p>
    </MenuItem>
  );
};

Message.propTypes = {
  notification: PropTypes.object,
};

export default Message;
