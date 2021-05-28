import * as types from "./actionTypes";
import * as projectApi from "../../api/projectApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function projectCreated(project) {
  return { type: types.PROJECT_CREATED_SUCCESS, project };
}
export function createProject(project) {
  return function (dispatch) {
    dispatch(beginApiCall());

    return projectApi
      .createProject(project)
      .then((newProject) => {
        dispatch(projectCreated(newProject));
      })
      .catch((error) => {
        dispatch(apiCallError());
        throw error;
      });
  };
}
