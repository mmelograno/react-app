import * as types from '../actions/actionTypes';

export default function administrationReducer(state = [], action) {

  switch (action.type) {
    case types.LOAD_USER_SUCCESS:
      return action.users;

    default:
      return state;
  }
}
