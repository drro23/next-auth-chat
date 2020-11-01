import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/counterSlice";
import darkReducer from "../slices/darkSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  isDark: darkReducer,
});

export default configureStore({
  reducer: rootReducer,
  devTools: true,
});

