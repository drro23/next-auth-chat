import { connect } from "react-redux";
import { useDispatch } from 'react-redux'
import { useEffect } from "react";
import { Icon } from "@material-ui/core";
import { toggleTheme } from '../../slices/darkSlice';

const mapState = (state) => {
  return { counter: state.counter, isDark: state.isDark };
};

const actionCreators = {
  toggleTheme,
};

function SwitchTheme(props) {
  const { isDark } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    const htmlEl = document.getElementsByTagName("html");
    const darkTheme = localStorage.getItem("isDark");

    if (
      !isDark &&
      darkTheme === "true" &&
      !htmlEl[0].classList.contains("mode-dark")
    )
      dispatch(toggleTheme());
  }, [isDark]);

  return (
    <div className="flex justify-end mb-2">
      <button
        className="focus:outline-none"
        onClick={() => dispatch(toggleTheme())}
      >
        <Icon
          className={`${
            !isDark ? "far fa-sun" : "fas fa-moon"
          } fill-current text-black dark:text-white`}
        />
      </button>
    </div>
  );
}

export default connect(mapState, actionCreators)(SwitchTheme);
