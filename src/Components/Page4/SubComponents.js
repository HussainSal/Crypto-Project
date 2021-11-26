import classes from "./SubComponents.module.css";
import { Link, makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  link: {
    color: "rgba(204, 197, 197, 0.829)",
    cursor: "pointer",
    margin: ".9rem 0rem",
    lineHeight: "100%",
  },
});

const SubComponents = () => {
  const style = useStyle();

  return (
    <div className={classes.grid}>
      <div className={`${classes.item} ${classes.w}`}>
        About us
        <div className={classes.category}>
          <Link className={style.link}>About Us</Link>
          <Link className={style.link}>Team members</Link>
          <Link className={style.link}>Career</Link>
          <Link className={style.link}>FAQ</Link>
          <Link className={style.link}>Referal program</Link>
          <Link className={style.link}>Announcements</Link>
          <Link className={style.link}>Terms</Link>
          <Link className={style.link}>Privacy</Link>
        </div>
      </div>
      <div className={classes.item}>
        Products
        <div className={classes.category}>
          <Link className={style.link}>Bitdroplet</Link>
          <Link className={style.link}>Fixed Income Plan</Link>
          <Link className={style.link}>Bitbns Academy(Coming Soon)</Link>
        </div>
      </div>
      <div className={`${classes.item} ${classes.w3}`}>
        Services
        <div className={classes.category}>
          <Link className={style.link}>BNS</Link>
          <Link className={style.link}>Trading Mechanism</Link>
          <Link className={style.link}>Margin Trading</Link>
          <Link className={style.link}>API Trading</Link>
          <Link className={style.link}>Ticker API</Link>
          <Link className={style.link}>Node Status</Link>
          <Link className={style.link}>Stop Limit</Link>
          <Link className={style.link}>Arbitrage - profit finder</Link>
        </div>
      </div>
      <div className={classes.item}>
        Contact
        <div className={classes.category}>
          <Link className={style.link}>Customer support</Link>
        </div>
      </div>

      <div className={classes.item}>
        Useful links
        <div className={classes.category}>
          <Link className={style.link}>EOS RAM price USD</Link>
          <Link className={style.link}>Bitcoin to USD</Link>
          <Link className={style.link}>Buy Bitcoin with AED</Link>
        </div>
      </div>

      <div className={classes.item}>social Media</div>

      <div className={classes.nav}>
        <div className={classes.disclaimer}>
          Disclaimer
          <p className={classes.disclaimerText}>
            Trading in cryptocurrencies are subject to market,technical and
            legal risks. The price fluctuate based on local demand and supply.
          </p>
        </div>
      </div>
      <div className={classes.disclaimerText2}>
        @ 2021 Bitbns.com. All rights reserved
      </div>

      <div className={classes.link}>
        Link
        <p className={classes.linkText}>
          Our certain features and processes require KYC documents. complete KYC
          verification to unlock the most of Bitbns.
        </p>
      </div>
    </div>
  );
};
export default SubComponents;
