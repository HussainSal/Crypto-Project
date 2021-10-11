import classes from "./Page1Img.module.css";
import logo from './page1_2.jpg';

const Page1Img = () => {
  return <div className={classes.imgBox}>
      <img src={logo} className={classes.img} />
  </div>;
};

export default Page1Img;
