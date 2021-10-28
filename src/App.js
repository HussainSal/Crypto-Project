import "./App.css";
import Page1 from "./Components/Page1/Page1";
import Page2 from "./Components/Page2/Page2";
import Page3 from "./Components/Page3/Page3";
import Page4 from "./Components/Page4/Page4";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { useSelector } from "react-redux";

function App() {
  const isAuth = useSelector((state) => state.auth.login);

  const isSign = useSelector((state) => state.auth.signup);

  return (
    <div className="App">
      {isAuth && <Login />}
      {isSign && <Signup />}

      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
    </div>
  );
}

export default App;
// #2F0092
