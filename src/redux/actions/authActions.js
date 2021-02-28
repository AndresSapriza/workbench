import * as types from "./actionTypes";
import * as authApi from "../../api/authApi";
import * as userApi from "../../api/userApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function userLogged(user) {
  return { type: types.USER_LOGGED_SUCCESS, user };
}

export function signUpSuccess(userSession) {
  return { type: types.SIGNUP_SUCCESS, userSession };
}

export function loginSuccess(userSession) {
  return { type: types.LOGIN_SUCCESS, userSession };
}

export function loadLoggedUser() {
  return function (dispatch) {
    dispatch(beginApiCall());

    return authApi
      .getUserLogged()
      .then((user) => {
        dispatch(userLogged(user));
      })
      .catch((error) => {
        dispatch(apiCallError());
        dispatch({ type: types.AUTH_ERROR });
        throw error;
      });
  };
}

export function signUp(user) {
  return function (dispatch) {
    dispatch(beginApiCall());

    return userApi
      .signUp(user)
      .then((userSession) => {
        dispatch(signUpSuccess(userSession));
      })
      .catch((error) => {
        dispatch(apiCallError());
        dispatch({ type: types.SIGNUP_FAIL });
        throw error;
      });
  };
}

export function login(user) {
  return function (dispatch) {
    dispatch(beginApiCall());

    return authApi
      .login(user)
      .then((userSession) => {
        dispatch(loginSuccess(userSession));
      })
      .catch((error) => {
        dispatch(apiCallError());
        dispatch({ type: types.LOGIN_FAIL });
        throw error;
      });
  };
}

export function logOut() {
  return function (dispatch) {
    dispatch({ type: types.LOGOUT_SUCCESS });
  };
}
