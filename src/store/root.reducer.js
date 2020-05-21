import { combineReducers } from "redux";

import { careCheckReducer } from "./care-check/reducers/care-check.reducers";

export const rootReducer = combineReducers({
  careCheckReducer,
});
