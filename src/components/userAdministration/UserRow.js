import React from 'react';
import PropTypes from 'prop-types';

const UserRow = (props) => {
  return (
    <tr>
      <td>{props.user.id}</td>
      <td>{props.user.firstName}</td>
      <td>{props.user.lastName}</td>
      <td>{props.user.email}</td>
      <td>{props.user.role}</td>
    </tr>
  );
};

UserRow.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserRow;
