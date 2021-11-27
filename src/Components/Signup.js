import classes from "./Signup.module.css";
import { useDispatch } from "react-redux";
import { authActions } from "../Store/Index";
import { useRef, useState } from "react";
import { loginAction } from "../Store/Index";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import GoogleButton from "react-google-button";
import { auth } from "..";
import { Typography } from "@material-ui/core";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState([]);
  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();
  const phoneNumber = useRef()

  const dispatch = useDispatch();
  const signDispatch = useDispatch();

  const closeHandler = () => {
    dispatch(authActions.signoff());
  };

  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider).then((res) => {
      // console.log(user);
      closeHandler();
      signDispatch(loginAction.loggedIn());
      alert(`welcome ${res.user.displayName}`);
    });
  };




  const submitHandler = (e) => {
    e.preventDefault();

    let enteredEmail = emailRef.current.value;

    let enteredPassword = passwordRef.current.value;

    let enteredName = nameRef.current.value;

    // closeHandler();

    setLoading(true);

    createUserWithEmailAndPassword(auth, enteredEmail, enteredPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        user.displayName = enteredName;
        closeHandler();
        signDispatch(loginAction.loggedIn());
        alert(`welcome ${user.displayName}`);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage || "Invalid Credentials");
        // ..
      });

    // createUserWithEmailAndPassword(auth, enteredEmail, enteredPassword)
    //   .then((userCredential) => {
    //     // Signed in
    //     const user = userCredential.user;
    //     user.displayName = enteredName
    //     console.log(user);
    //     closeHandler();
    //     signDispatch(loginAction.loggedIn())
    //     alert(`welcome ${user.displayName}`);

    //     // ...
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     alert(errorMessage || "Invalid Credentials");
    //     // ..
    //   });

    emailRef.current.value = "";
    passwordRef.current.value = "";
    nameRef.current.value = "";
    setLoading(false);
  };

  return (
    <div className={classes.overlay}>
      <form className={classes.form} onSubmit={submitHandler}>
        <input
          className={classes.input}
          type="text"
          placeholder="Full Name"
          ref={nameRef}
          required
        />

        <input
          className={classes.input}
          type="text"
          placeholder="Email Address"
          ref={emailRef}
          required
        />

        <input
          className={classes.input}
          type="number"
          placeholder="Phone Number"
          ref={phoneNumber}
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

export default Signup;
