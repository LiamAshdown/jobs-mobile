// store/reducers.js
import { combineReducers } from "redux";

import authReducer from "./auth/reducer";
import jobsReducer from "./jobs/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  jobs: jobsReducer,
  // Add more reducers here if needed
});

export default rootReducer;
