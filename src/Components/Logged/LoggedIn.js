import Finished from "./Finished";
import FirstBar from "./FirstBar";
import classes from "./LoggedIn.module.css";
import LoggedinNavigation from "./LoggedinNav";
import SecondBar from "./SecondBar";


const LoggedIn = () => {
  return (
    <div className={classes.container}>
      <LoggedinNavigation />
      <FirstBar />
      <SecondBar />
      <Finished />
    </div>
  );
};

export default LoggedIn;
