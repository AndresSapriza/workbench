import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function projectReducer(state = initialState, action) {
  switch (action.type) {
    case types.PROJECT_CREATED_SUCCESS:
      return {
        ...state,
        project: action.project,
      };
    default:
      return state;
  }
}
