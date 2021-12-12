import "./App.css";
import Page1 from "./Components/Page1/Page1";
import Page2 from "./Components/Page2/Page2";
import Page3 from "./Components/Page3/Page3";
import Page4 from "./Components/Page4/Page4";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import LoggedIn from "./Components/Logged/LoggedIn";
import { useSelector } from "react-redux";
import Header from "./Components/Page1/Header";
import CommonFooter from "./Components/CommonFooter/CommonFooter";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from ".";
import { loginAction } from "./Store/Index";
import { useDispatch } from "react-redux";
import React, { Suspense } from "react";

// const Login = React.lazy(() => import("./Components/Login"));
// const Signup = React.lazy(() => import("./Components/Signup"));
// const LoggedIn = React.lazy(() => import("./Components/Logged/LoggedIn"));

function App() {
  const signinDispatch = useDispatch();
  const login = useSelector((state) => state.logg.loggedIn);

  const isAuth = useSelector((state) => state.auth.login);

  const isSign = useSelector((state) => state.auth.signup);

  return (
    <div className="App">
      {isAuth && <Login />}
      {isSign && <Signup />}
      {login && <LoggedIn />}

      {onAuthStateChanged(auth, (user) => {
        if (user) {
          signinDispatch(loginAction.loggedIn());

          // ...
        } else {
          signinDispatch(loginAction.loggedout());

          // User is signed out
          // ...
        }
      })}

      <Header />

      {!login && <Page1 />}
      {!login && <Page2 />}
      {!login && <Page3 />}
      {!login && <Page4 />}

      {login && <CommonFooter />}
    </div>
  );
}

export default App;
// #2F0092
