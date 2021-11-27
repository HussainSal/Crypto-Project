import classes from "./HeaderButtons.module.css";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { authActions } from "../../Store/Index";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Height } from "@material-ui/icons";
import { useHistory } from "react-router";

const useStyles = makeStyles({
  bttns: {
    color: "#fff",
    textDecoration:'none',
    height:'65px'
  },
});

const HeaderButtons = () => {
  const sty = useStyles();
  const history = useHistory();

  const dispatch = useDispatch();

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(authActions.login());
    
  };

  const signupHandler = (e) => {
    e.preventDefault();
    dispatch(authActions.signup());
  };

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
          <Button onClick={()=> homeHandler() } className={`${classes.para} ${sty.bttns}`} >Home</Button>
        
      
        <Button onClick={()=> marketHandler() }  className={`${classes.para} ${sty.bttns}`} >
            Market
        </Button>

     
        <Button onClick={()=> journeyHandler() }  className={`${classes.para} ${sty.bttns}`} >
            Steps involved
        </Button>
        <Button onClick={()=> moreHandler() }  className={`${classes.para} ${sty.bttns}`} >
            More
        </Button>
        
      </div>
      <div>
        <button onClick={loginHandler} className={classes.bttn}>
          {" "}
          Login{" "}
        </button>
        <button
          onClick={signupHandler}
          className={`${classes.bttn} ${classes.signup}`}
        >
          {" "}
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default HeaderButtons;
