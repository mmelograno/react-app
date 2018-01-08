import * as types from '../actions/actionTypes';

const getUser = () => (localStorage.getItem('user') ?
    {
      loggedUser: JSON.parse(localStorage.getItem('user')),
      isLoggedIn: true,
    }
    :
    {
      loggedUser: {
        firstName: '',
        lastName: '',
        notifications: [],
      },
      isLoggedIn: false,
    });

export default function userReducer(state = getUser(), action) {

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
