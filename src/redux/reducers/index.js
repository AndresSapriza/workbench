import { combineReducers } from "redux";
import apiStatusReducer from "./apiStatusReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  apiStatus: apiStatusReducer,
  auth: authReducer,
});

export default rootReducer;
