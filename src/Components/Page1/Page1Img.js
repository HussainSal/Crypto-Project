import classes from "./Page1Img.module.css";
import logo from './backgroundMain.png';

const Page1Img = () => {
  return <div className={classes.imgBox}>
      <img src={logo} className={classes.img} alt='' />
  </div>;
};

export default Page1Img;
