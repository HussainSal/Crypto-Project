import "./App.css";
import Page1 from "./Components/Page1/Page1";
import Page2 from "./Components/Page2/Page2";
import Page3 from "./Components/Page3/Page3";
import Page4 from "./Components/Page4/Page4";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { useSelector } from "react-redux";
import LoggedIn from "./Components/Logged/LoggedIn";
import Header from "./Components/Page1/Header";
import CommonFooter from "./Components/CommonFooter/CommonFooter";


function App() {
  const login = useSelector((state) => state.logg.loggedIn);

  const isAuth = useSelector((state) => state.auth.login);

  const isSign = useSelector((state) => state.auth.signup);

  
 

  return (
    <div className="App">
      {isAuth && <Login />}
      {isSign && <Signup />}
      {login && <LoggedIn />}

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
