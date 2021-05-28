import { combineReducers } from "redux";
import apiStatusReducer from "./apiStatusReducer";
import authReducer from "./authReducer";
import projectReducer from "./projectReducer";

const rootReducer = combineReducers({
  apiStatus: apiStatusReducer,
  auth: authReducer,
  projectReducer: projectReducer,
});

export default rootReducer;
