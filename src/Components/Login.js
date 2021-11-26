import classes from "./Login.module.css";
import { useDispatch } from "react-redux";
import { authActions } from "../Store/Index";
import { loginAction } from "../Store/Index";
import { useState, useRef } from "react";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const signDispatch = useDispatch();


  const closeHandler = () => {
    dispatch(authActions.logout());
  };

  const submitHandler = (e) => {
    e.preventDefault();

    let enteredEmail = emailRef.current.value;

    let enteredPassword = passwordRef.current.value;

    emailRef.current.value = "";
    passwordRef.current.value = "";

    setLoading(true);
    fetch(
      " https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAozhom4BH2VA8q9rT77IUqW2XpY650rAA",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      setLoading(false);
      if (res.ok) {
        closeHandler();
        signDispatch(loginAction.loggedIn());
        dispatch(loginAction.loggedIn());

        //..
      } else {
        return res.json().then((data) => {
          let errorMessage = "Authentication Failed";

          if (data && data.error && data.error.message) {
            errorMessage = data.error.message;
          }
          console.log(data);
          alert(errorMessage);
        });
      }
    });

    dispatch(authActions.logout());
  };

  return (
    <div className={classes.overlay}>
      <form className={classes.form} onSubmit={submitHandler}>
        <input
          className={classes.input}
          type="email"
          placeholder="test@gmail.com"
          required
          ref={emailRef}
        />

        <input
          className={classes.input}
          type="password"
          placeholder="Enter Password"
          required
          ref={passwordRef}
        />

       {!loading && <button className={`${classes.bttn} ${classes.signup}`}>Login</button>}

        {!loading && <button
          onClick={closeHandler}
          className={`${classes.bttn} ${classes.signup}`}
        >
          Close
        </button>}

        {loading && <p className={classes.loading}>Loading...</p>}
      </form>
    </div>
  );
};

export default Login;
