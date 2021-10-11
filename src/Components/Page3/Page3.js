import classes from "./Page3.module.css";
import img from './page3_logos.png'

const Page3 = () => {
  return (
    <div id='journey' className={classes.page3}>
      <h1 className={classes.mainHeading}>Kickoff Your Journey</h1>
      <div className={classes.mainContainer}>

        <div className={classes.subContainer}>
          <h3 className={classes.subHeading}>1.Sign Up</h3>
          <p>
            Barely takes a minute, fairly easy to complete. Sign up with Bitbns
            to explore the world of carefully-vetted cryptocurrencies from
            across the globe
          </p>
        </div>

        <div className={classes.subContainer}>
          <h3 className={classes.subHeading}>2.Complete your KYC </h3>
          <p>
            Our certain features and processes require KYC documents. complete
            KYC verification to unlock the most of Bitbns.
          </p>
        </div>

        <div className={classes.subContainer}>
          <h3 className={classes.subHeading}>3.Start Trading </h3>
          <p>
            Check out markets,trading opportunities,and use advanced tools like
            Bracket Orders,Margin Trading and more,to your advantage. Trading on
            Bitbns begins here{" "}
          </p>
        </div>
      </div>
      <div className={classes.logo}>
          <img className={classes.img} src= {img} />
      </div>
    </div>
  );
};

export default Page3;
