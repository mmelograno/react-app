import * as types from './actionTypes';
import userApi from '../api/UserApi';
import { ajaxCallError } from './ajaxStatusActions';

export function loadUsersSuccess(users) {
  return {
    type: types.LOAD_USER_SUCCESS,
    users,
  };
}

export function loadUsers() {
  return function(dispatch) {
    return userApi.getUsers()
      .then(users => {
        dispatch(loadUsersSuccess(users));
      })
      .catch(err => {
        dispatch(ajaxCallError(err));
        throw(err);
      });
  };
}
