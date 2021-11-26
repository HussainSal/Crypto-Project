import classes from "./SecondBar.module.css";
import kyc from "./img/kyc.png";
import bitbns5 from "./img/bitbnsItem5.png";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  bttn: {
    color: 'white',
    background: "#25B196",

    '&:hover':{
      background:' #40dabb'

    }
  },
});

const SecondBar = () => {
  const sty = useStyles();

  return (
    <div className={classes.container}>
     <div>
      <div className={classes.kyc}>
        <img src={kyc} />
      </div>
      <Button variant="contained" className={`${sty.bttn} ${classes.button}`}>
        start kyc{" "}
      </Button>
     </div>

      <div className={classes.subContainer}>
        <span className={classes.shadow}></span>
         <img className={classes.bitbns5} src={bitbns5} />
      </div>
    </div>
  );
};

export default SecondBar;
