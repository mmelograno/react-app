import * as types from './actionTypes';
import userApi from '../api/UserApi';
import { ajaxCallError } from './ajaxStatusActions';

export function loginUserSuccess(user) {
  return {
    type: types.USER_SIGNIN_SUCCESS,
    user,
  };
}

export function signin(user) {
  return function(dispatch) {
    return userApi.singin(user)
      .then(user => {
        localStorage.setItem('user', JSON.stringify(user));
        dispatch(loginUserSuccess(user));
      })
      .catch(err => {
        dispatch(ajaxCallError(err));
        throw(err);
      });
  };
}

export function logoutUserSuccess() {
  return {
    type: types.USER_SIGNOUT_SUCCESS,
  };
}

export function signout() {
  return function(dispatch) {
    localStorage.removeItem('user');
    dispatch(logoutUserSuccess());
  };
}
