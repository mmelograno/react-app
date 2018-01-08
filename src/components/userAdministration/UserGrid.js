import React from 'react';
import PropTypes from 'prop-types';

import { Table } from 'react-bootstrap';
import UserRow from './UserRow';

const UserGrid = (props) => {
  return (
    <div style={{ paddingLeft: '20px', paddingRight: '20px' }} >
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
            {
              props.users.map(user => {
                return (
                  <UserRow key={user.id} user={user} />
                );
              })
            }
        </tbody>
      </Table>
    </div>
  );
};

UserGrid.propTypes = {
  users: PropTypes.array.isRequired,
};

export default UserGrid;
