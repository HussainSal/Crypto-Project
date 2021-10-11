import classes from "./HeaderButtons.module.css";
// import Button from "@material-ui/core/Button";

const HeaderButtons = () => {
  const homeHandler = () => {
    document.getElementById("home").scrollIntoView({ behavior: "smooth" });
  };

  const marketHandler = () => {
    document.getElementById("market").scrollIntoView({ behavior: "smooth" });
  };

  const journeyHandler = () => {
    document.getElementById("journey").scrollIntoView({ behavior: "smooth" });
  };

  const moreHandler = () => {
    document.getElementById("more").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={classes.container}>
      <div className={classes.nav}>
        <p onClick={homeHandler} className={classes.para}>
          Home
        </p>
        <p onClick={marketHandler} className={classes.para}>
          Market
        </p>
        
        <p onClick={journeyHandler} className={classes.para}>
          Steps involved
        </p>
        <p onClick={moreHandler} className={classes.para}>
          More
        </p>
      </div>
      <div>
        <button className={classes.bttn}> Login </button>
        <button className={`${classes.bttn} ${classes.signup}`}>
          {" "}
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default HeaderButtons;
