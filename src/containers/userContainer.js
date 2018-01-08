import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as userActions from '../actions/userActions';

function mapStateToProps(state) {
  if (localStorage.getItem('user')) {
    state.user = JSON.parse(localStorage.getItem('user'))
    state.user.isLoggedIn = true;
    return {
      loggedUser: JSON.parse(localStorage.getItem('user')),
      isLoggedIn: true,
    };
  }

  return {
    loggedUser: state.user.loggedUser,
    isLoggedIn: state.user.isLoggedIn,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch),
  };
}


export default connect(mapStateToProps, mapDispatchToProps);
