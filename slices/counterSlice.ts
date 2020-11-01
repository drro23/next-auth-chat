import { createSlice } from "@reduxjs/toolkit";
import counterReducer from "../reducers/counterReducer";

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: counterReducer,
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
