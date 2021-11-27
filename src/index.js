import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./Store/Index";
import {BrowserRouter} from  "react-router-dom"
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getAuth } from "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCulRahzdLSXbJkYkkMPbo8JVRe19KC_ow",
  authDomain: "crypto-c7536.firebaseapp.com",
  databaseURL: "https://crypto-c7536-default-rtdb.firebaseio.com",
  projectId: "crypto-c7536",
  storageBucket: "crypto-c7536.appspot.com",
  messagingSenderId: "673627619865",
  appId: "1:673627619865:web:bb89e49835979104492088"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)

export {auth , db}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);


reportWebVitals();
