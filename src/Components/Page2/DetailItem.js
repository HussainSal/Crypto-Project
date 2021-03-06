import classes from "./DetailItem.module.css";

const DetailItem = () => {
  return (
    <div className={classes.overlay}>
      <form className={classes.form}>
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
