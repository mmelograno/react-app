import React from 'react';
import PropTypes from 'prop-types';

import UserContainer from '../../containers/userContainer';
import Login from '../login/Login';

import './styles.css';

class Home extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      user: {
        email: '',
        password: '',
      },
    };

    this.onChange = this.onChange.bind(this);
    this.signin = this.signin.bind(this);
  }

  onChange(event) {
    const field = event.target.name;
    const user = Object.assign({}, this.state.user);
    user[field] = event.target.value;
    return this.setState({
      user,
    });
  }

  signin(event) {
    event.preventDefault();

    this.props.actions.signin(this.state.user);

    this.setState({
      user: {
        email: '',
        password: '',
      }
    });
  }

  render() {
    return (
      <div>
        <h2 className="home">Welcome! {this.props.loggedUser && this.props.loggedUser.firstName}</h2>
        {!this.props.isLoggedIn ?
          <Login
            signin={this.signin}
            user={this.state.user}
            onChange={this.onChange}
          /> : null
        }
      </div>
    );
  }
}

Home.propTypes = {
  loggedUser: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};

export default UserContainer(Home);
