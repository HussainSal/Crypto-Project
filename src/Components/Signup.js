import classes from "./Signup.module.css";
import { useDispatch } from "react-redux";
import { authActions } from "../Store/Index";

const Signup = () => {
  const dispatch = useDispatch();

  const signupHandler = (e) => {
    e.preventDefault();

    dispatch(authActions.signoff());
  };

  return (
    <div className={classes.overlay}>
      <form className={classes.form}>
        <input className={classes.input} type="text" placeholder="First Name" />

        <input className={classes.input} type="text" placeholder="Last Name" />

        <input
          className={classes.input}
          type="text"
          placeholder="Email Address"
        />

        <input
          className={classes.input}
          type="password"
          placeholder="Enter Password"
        />

        <button
          onClick={signupHandler}
          className={`${classes.bttn} ${classes.signup}`}
        >
          Sign Up
        </button>

        {/* <img src='./sprite.svg'></img> */}

        <button
          onClick={signupHandler}
          className={`${classes.bttn} ${classes.signup}`}
        >
          Close
        </button>
      </form>
    </div>
  );
};

export default Signup;
