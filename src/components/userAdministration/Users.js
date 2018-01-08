import React from 'react';
import PropTypes from 'prop-types';
import UserGrid from './UserGrid';

class Users extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: Object.assign({}, props.users),
    };
  }

  render() {
    return (
      <div>
        <h2>Users</h2>
        <UserGrid users={this.state.users} />
      </div>
    );
  }
}

Users.propTypes = {
  users: PropTypes.array.isRequired,
};

export default Users;
