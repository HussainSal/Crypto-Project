import classes from "./Login.module.css";

const Login = (props) => {
  return <div className={classes.overlay}>{props.chlidren}</div>;
};

export default Login;
