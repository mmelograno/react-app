import * as types from '../actions/actionTypes';

export default function userReducer(state = {
  loggedUser: {
    firstName: '',
    lastName: '',
    notifications: [],
  },
  isLoggedIn: false,
}, action) {

  switch (action.type) {
    case types.USER_SIGNIN_SUCCESS: return {
      ...state,
      loggedUser: action.user,
      isLoggedIn: true,
    };

    case types.USER_SIGNOUT_SUCCESS: return {
      ...state,
      loggedUser: {
        firstName: '',
        lastName: '',
        notifications: [],
      },
      isLoggedIn: false,
    };

    default:
      return state;
  }
}
