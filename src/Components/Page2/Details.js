import classes from "./Details.module.css";
import { detailActions } from "../../Store/Index";
import { useDispatch } from "react-redux";


const Details = () => {
  const dispatch = useDispatch();
  const detailHandler = (e) => {
    dispatch(detailActions.visible());

    console.log(e.target.value === 'clicked')

  };

  return (
    <div className={classes.mainBox}>
      <div className={classes.box}>
        <h3 className={classes.h3}>Details</h3>
        <button  onClick={detailHandler} className={classes.bttn}>
          {" "}
          Details{" "}
        </button>
        <button onClick={detailHandler} className={classes.bttn}>
          {" "}
          Details{" "}
        </button>
        <button onClick={detailHandler} className={classes.bttn}>
          {" "}
          Details{" "}
        </button>
        <button onClick={detailHandler} className={classes.bttn}>
          {" "}
          Details{" "}
        </button>
        <button onClick={detailHandler} className={classes.bttn}>
          {" "}
          Details{" "}
        </button>
        <button onClick={detailHandler} className={classes.bttn}>
          {" "}
          Details{" "}
        </button>
        <button onClick={detailHandler} className={classes.bttn}>
          {" "}
          Details{" "}
        </button>
      </div>
    </div>
  );
};

export default Details;
