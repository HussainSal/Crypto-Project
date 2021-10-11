import classes from "./Page1Content.module.css";
import BitAmount from "./BitAmount";

const Page1Content = () => {
  return (
    <div className={classes.mainBox}>
      <div className={classes.textBox}>
        <p className={classes.topic}>Trade Crypto like it's meant to be</p>

        <p className={classes.subTopic}>
          Bitbns (think BITcoin Buy aNd Sell) is the most effortless way of
          trading cryptocurrencies
        </p>
      </div>

      <BitAmount  />
    </div>
  );
};

export default Page1Content;
