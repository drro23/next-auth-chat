import { AppState } from '../slices/appSlice';

const appReducer = {
  toggleLoading: (state: AppState) => {
    return !state.loading;
  },
};

export default appReducer;
