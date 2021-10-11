import classes from "./SubComponents.module.css";

const SubComponents = () => {
  return (
    <div className={classes.grid}>
      <div className={`${classes.item} ${classes.w}`}>
        About us
        <div className={classes.category}>
          <p>About Us</p>
          <p>Team members</p>
          <p>Career</p>
          <p>FAQ</p>
          <p>Referal Program</p>
          <p>Announcements</p>
          <p>Terms</p>
          <p>Privacy</p>
        </div>
      </div>
      <div className={classes.item}>
        Products
        <div className={classes.category}>
          <p>Bitdroplet</p>
          <p>Fixed Income Plan</p>
          <p>Bitbns Academy(Coming Soon)</p>
        </div>
      </div>
      <div className={`${classes.item} ${classes.w3}`}>
        Services
        <div className={classes.category}>
          <p>BNS</p>
          <p>Trading Mechanism</p>
          <p>Margin Trading</p>
          <p>API Trading</p>
          <p>Ticker API</p>
          <p>Node Status</p>
          <p>Stop Limit</p>
          <p>Arbitrage - profit finder</p>
        </div>
      </div>
      <div className={classes.item}>
        Contact
        <div className={classes.category}>
          <p>Customer support</p>
        </div>
      </div>

      <div className={classes.item}>
        Useful links
        <div className={classes.category}>
          <p>EOS RAM price USD</p>
          <p>Bitcoin to USD</p>
          <p>Buy Bitcoin with AED</p>
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
          Our certain features and processes require KYC documents. complete KYC verification to unlock the most of Bitbns.
          </p>

        </div>
        
    </div>
  );
};
export default SubComponents;
