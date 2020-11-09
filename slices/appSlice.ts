import { createSlice } from "@reduxjs/toolkit";
import appReducer from "../reducers/appReducer";


export interface AppState {
    loading: boolean
}

const initialState: AppState = {
    loading: false
}

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: appReducer,
});

export const { toggleLoading } = appSlice.actions;

export default appSlice.reducer;
