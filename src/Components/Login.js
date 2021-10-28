import classes from "./Login.module.css";
import { useDispatch } from "react-redux";
import { authActions } from "../Store/Index";

const Login = () => {
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(authActions.logout());
  };

 

  return (
    <div className={classes.overlay}>
      <form className={classes.form} onSubmit={submitHandler}>
        <input
          className={classes.input}
          type="email"
          placeholder="test@gmail.com"
        />

        <input
          className={classes.input}
          type="password"
          placeholder="Enter Password"
        />

        <button className={`${classes.bttn} ${classes.signup}`}>Login</button>
        <button className={`${classes.bttn} ${classes.signup}`}>Close</button>
      </form>
      </div>
  );
};

export default Login;
