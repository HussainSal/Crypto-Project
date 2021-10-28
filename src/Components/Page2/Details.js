import classes from "./Details.module.css";
import DetailItem from "./DetailItem";




const Details = () => {

  const detailHandler = ()=>{
    <DetailItem />
  }

  return (
    <div className={classes.mainBox}>
      <div className={classes.box}>
        <h3>Details</h3>
        <button onClick={detailHandler} className={classes.bttn}> Details </button>
        <button onClick={detailHandler} className={classes.bttn}> Details </button>
        <button onClick={detailHandler} className={classes.bttn}> Details </button>
        <button onClick={detailHandler} className={classes.bttn}> Details </button>
        <button onClick={detailHandler} className={classes.bttn}> Details </button>
        <button onClick={detailHandler} className={classes.bttn}> Details </button>
        <button onClick={detailHandler} className={classes.bttn}> Details </button>
      </div>
    </div>
  );
};

export default Details;
