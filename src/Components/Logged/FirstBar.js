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
        <img className={classes.image} src={img1} />
      </div>
      <div className={classes.subhead}>
        <span className={classes.shadow} />
        <img className={classes.image} src={img2} />
      </div>
      <div className={classes.subhead}>
        <span className={classes.shadow} />
        <img className={classes.image} src={img3} />
      </div>
      <div className={classes.subhead}>
        <span className={classes.shadow} />
        <img className={classes.image} src={img4} />
      </div>
    </div>
  );
};

export default FirstBar;

// <div>
//     <div></div>
//     <ing/ >
// </div>
{
  /* <img className={classes.items} src={img2} />
  <img className={classes.items} src={img3} />
  <img className={classes.items} src={img4} /> */
}
