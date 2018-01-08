import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as administrationActions from '../actions/administrationActions';

function mapStateToProps(state) {
  return {
    users: state.users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(administrationActions, dispatch),
  };
}


export default connect(mapStateToProps, mapDispatchToProps);
