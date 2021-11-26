import classes from "./Signup.module.css";
import { useDispatch } from "react-redux";
import { authActions } from "../Store/Index";
import { useRef, useState } from "react";
import { loginAction } from "../Store/Index";


const Signup = () => {
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();

  const dispatch = useDispatch();
  const signDispatch = useDispatch();


  const closeHandler = () => {
    dispatch(authActions.signoff());
  };

  const submitHandler = (e) => {
    e.preventDefault();

    let enteredEmail = emailRef.current.value;

    let enteredPassword = passwordRef.current.value;

    emailRef.current.value = "";
    passwordRef.current.value = "";

    // closeHandler();

    setLoading(true);
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAozhom4BH2VA8q9rT77IUqW2XpY650rAA",
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
        signDispatch(loginAction.loggedIn())
        
        

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
  };

  return (
    <div className={classes.overlay}>
      <form className={classes.form} onSubmit={submitHandler}>
        <input
          className={classes.input}
          type="text"
          placeholder="Email Address"
          ref={emailRef}
          required
        />

        <input
          className={classes.input}
          type="password"
          placeholder="Enter Password"
          ref={passwordRef}
          required
        />

        {!loading && (
          <button className={`${classes.bttn} ${classes.signup}`}>
            Sign Up
          </button>
        )}

        {!loading && (
          <button
            onClick={closeHandler}
            className={`${classes.bttn} ${classes.signup}`}
          >
            Close
          </button>
        )}

        {loading && <p className={classes.loading}>Loading...</p>}
      </form>
    </div>
  );
};

export default Signup;
