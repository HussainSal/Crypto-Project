import classes from "./FirstBar.module.css";
import img1 from "./img/bitbnsItem1.png";
import img2 from "./img/bitbnsItem2.png";
import img3 from "./img/bitbnsItem3.png";
import img4 from "./img/bitbnsItem4.png";

const FirstBar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.subhead}>
        <span className={classes.shadow} />
        <img className={classes.image} src={img1} alt='' />
      </div>
      <div className={classes.subhead}>
        <span className={classes.shadow} />
        <img className={classes.image} src={img2} alt='' />
      </div>
      <div className={classes.subhead}>
        <span className={classes.shadow} />
        <img className={classes.image} src={img3} alt='' />
      </div>
      <div className={classes.subhead}>
        <span className={classes.shadow} />
        <img className={classes.image} src={img4} alt='' />
      </div>
    </div>
  );
};

export default FirstBar;