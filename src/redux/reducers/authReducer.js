import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function authReducer(state = initialState.userSession, action) {
  switch (action.type) {
    case types.SIGNUP_SUCCESS:
    case types.LOGIN_SUCCESS:
      localStorage.setItem("token", action.userSession.token);
      return {
        ...state,
        isAuthenticated: true,
        user: action.userSession.user,
        token: action.userSession.token,
      };
    case types.USER_LOGGED_SUCCESS:
      return { ...state, isAuthenticated: true, user: action.user };
    case types.AUTH_ERROR:
    case types.LOGIN_FAIL:
    case types.LOGOUT_SUCCESS:
    case types.SIGNUP_FAIL:
      localStorage.removeItem("token");
      return { ...state, isAuthenticated: false, user: null, token: null };
    default:
      return state;
  }
}
