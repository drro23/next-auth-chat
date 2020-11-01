import changeTheme from "../util/changeTheme";


const darkThemeReducer = {
    toggleTheme: (isDark: boolean) => {
      changeTheme();
      return !isDark
    },
  };
  
  export default darkThemeReducer;
  