import classes from "./Login.module.css";
import { useDispatch } from "react-redux";
import { authActions } from "../Store/Index";
import { loginAction } from "../Store/Index";
import { useState, useRef} from "react";
import {  signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { auth } from "..";
import GoogleButton from "react-google-button";
import {  Typography } from "@material-ui/core";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const signDispatch = useDispatch();

  const closeHandler = () => {
    dispatch(authActions.logout());
  };

  
  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = ()=>{
    signInWithPopup(auth, googleProvider).then(res => {
      // console.log(user);
      closeHandler();
      signDispatch(loginAction.loggedIn())
      alert(`welcome ${res.user.displayName}`)
    })
  }

  const submitHandler = (e) => {
    e.preventDefault();

    let enteredEmail = emailRef.current.value;

    let enteredPassword = passwordRef.current.value;

    localStorage.setItem("email", enteredEmail);
    localStorage.setItem("password", enteredPassword);

    setLoading(true);

    // const auth = getAuth();
    signInWithEmailAndPassword(auth, enteredEmail, enteredPassword)
      .then((userCredential) => {
        // Signed in

        const user = userCredential.user;
        console.log(user);

        // checking wheteher signed in or

        closeHandler();
        signDispatch(loginAction.loggedIn());
        dispatch(loginAction.loggedIn());
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage || "Invalid Credentials");
      });



    emailRef.current.value = "";
    passwordRef.current.value = "";
    setLoading(false);
  

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

        {!loading && (
          <button className={`${classes.bttn} ${classes.signup}`}>Login</button>
        )}

        {!loading && (
          <button
            onClick={closeHandler}
            className={`${classes.bttn} ${classes.signup}`}
          >
            Close
          </button>
        )}

        <Typography style={{color:'#FFF',marginTop:'20px'}}> OR </Typography>
        <div className={classes.googleContainer}>

          <GoogleButton
            style={{ width: "100%", outline: "none" }}
            onClick={signInWithGoogle}
          />
        </div>

        {loading && <p className={classes.loading}>Loading...</p>}
      </form>
    </div>
  );
};

export default Login;
