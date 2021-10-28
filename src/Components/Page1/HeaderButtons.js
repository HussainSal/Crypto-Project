import classes from "./HeaderButtons.module.css";

import { useDispatch } from "react-redux";
import { authActions } from "../../Store/Index";

const HeaderButtons = () => {
  const dispatch = useDispatch();

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(authActions.login());
  };

  const signupHandler = (e) => {
    e.preventDefault();
    dispatch(authActions.signup());
  };

  const homeHandler = () => {
    document.getElementById("home").scrollIntoView({ behavior: "smooth" });
  };

  const marketHandler = () => {
    document.getElementById("market").scrollIntoView({ behavior: "smooth" });
  };

  const journeyHandler = () => {
    document.getElementById("journey").scrollIntoView({ behavior: "smooth" });
  };

  const moreHandler = () => {
    document.getElementById("more").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={classes.container}>
      <div className={classes.nav}>
        <p onClick={homeHandler} className={classes.para}>
          Home
        </p>
        <p onClick={marketHandler} className={classes.para}>
          Market
        </p>

        <p onClick={journeyHandler} className={classes.para}>
          Steps involved
        </p>
        <p onClick={moreHandler} className={classes.para}>
          More
        </p>
      </div>
      <div>
        <button onClick={loginHandler} className={classes.bttn}>
          {" "}
          Login{" "}
        </button>
        <button
          onClick={signupHandler}
          className={`${classes.bttn} ${classes.signup}`}
        >
          {" "}
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default HeaderButtons;
