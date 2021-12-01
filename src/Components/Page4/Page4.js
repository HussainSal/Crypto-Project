// import { mergeClasses } from "@material-ui/styles";
import classes from "./Page4.module.css";
import SubComponents from "./SubComponents";

const Page4 = () => {
  return (
    <div id='more' className={classes.page4}>
      <div className={classes.mainHeading}>
        <h1>Start trading now</h1>

        {/* <button className={classes.bttn}> Sign Up</button> */}

        <button onClick={()=> alert('Trading is only allowed if user is logged in')} className={`${classes.bttn} ${classes.signup}`}>
          Trade Now
        </button>

      </div>
      <div className={classes.subContainer}>
      <SubComponents />
      </div>
      

    </div>
  );
};

export default Page4;
