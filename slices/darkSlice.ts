import { createSlice } from "@reduxjs/toolkit";
import darkThemeReducer from "../reducers/darkThemeReducer";

const darkThemeSlice = createSlice({
  name: 'isDark',
  initialState: false,
  reducers: darkThemeReducer,
});

export const { toggleTheme } = darkThemeSlice.actions;

export default darkThemeSlice.reducer;
