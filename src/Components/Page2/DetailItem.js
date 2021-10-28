import classes from "./DetailItem.module.css";
import { useDispatch } from "react-redux";
import { detalActions } from "../../Store/Index";


const DetailItem = (props) => {
  const dispatch = useDispatch();



  return (
    <div className={classes.overlay}>
      <form className={classes.form} >
        <input
          className={classes.input}
          type="email"
          placeholder="test@gmail.com"
        />

        <input
          className={classes.input}
          type="password"
          placeholder="Enter Password"
        />

        <button className={`${classes.bttn} ${classes.signup}`}>Login</button>
        <button className={`${classes.bttn} ${classes.signup}`}>Close</button>
      </form>
      </div>
  );
};


export default DetailItem;
