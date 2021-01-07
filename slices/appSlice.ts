import { createSlice } from "@reduxjs/toolkit";
import {appReducer} from "../reducers/appReducer";

export interface AppState {
    loading: boolean,
    isDark: boolean,
    user: object,
    isLoggedIn: boolean
}

const initialState : AppState = {
    loading: false,
    isDark: false,
    user: {},
    isLoggedIn: false
}

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: appReducer
});

export const { toggleTheme } = appSlice.actions;

export default appSlice.reducer;
