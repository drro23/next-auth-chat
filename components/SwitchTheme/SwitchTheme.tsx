import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Icon } from "@material-ui/core";
import { toggleTheme } from "../../slices/appSlice";
import changeTheme from "../../util/changeTheme";

const mapState = ({ counter, app}) => {
  return { counter: counter, isDark: app.isDark };
};

const actionCreators = {
  toggleTheme,
};

function SwitchTheme(props) {
  const { isDark } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    changeTheme(isDark);
  }, [isDark]);

  return (
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
  );
}

export default connect(mapState, actionCreators)(SwitchTheme);
