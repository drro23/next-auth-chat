import { AppState } from "../slices/appSlice";


const appReducer = {
  toggleTheme: (state: AppState) => {
    state.isDark = !state.isDark;
  },
};

export { appReducer };
