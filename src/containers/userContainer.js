import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as userActions from '../actions/userActions';

function mapStateToProps(state) {
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
