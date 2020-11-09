import { createSlice } from "@reduxjs/toolkit";
import authReducer from "../reducers/authReducer";


interface AuthState {
    user: object
    isLoggedIn: boolean
}

const initialState: AuthState = {
    user: {},
    isLoggedIn: false
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: authReducer,
});

export const { login, signOut } = authSlice.actions;

export default authSlice.reducer;
