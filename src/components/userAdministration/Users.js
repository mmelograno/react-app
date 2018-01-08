import React from 'react';
import PropTypes from 'prop-types';
import UserGrid from './UserGrid';
import AdministrationContainer from '../../containers/administrationContainer';

class Users extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2 style={{ textAlign: 'center' }}>Users</h2>
        <UserGrid users={this.props.users} />
      </div>
    );
  }
}

Users.propTypes = {
  users: PropTypes.array.isRequired,
};

export default AdministrationContainer(Users);
