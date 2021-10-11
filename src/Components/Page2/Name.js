import classes from './Name.module.css'

const Name = (props) => {
  return (
    <div>
      <h3 className={classes.name}>Name</h3>
      <div className={classes.coin}>
       <span className={classes.span}>BTC<p className={classes.p}>Bitcoin</p></span>
       <span className={classes.span}>ETH<p className={classes.p}>Ethereum</p></span>
       <span className={classes.span}>LTC<p className={classes.p}>Litecoin</p></span>
       <span className={classes.span}>XRP<p className={classes.p}>Ripple</p></span>
       <span className={classes.span}>ADA<p className={classes.p}>Cardano</p></span>
       <span className={classes.span}>SOL<p className={classes.p}>Solana</p></span>
       <span className={classes.span}>DOGE<p className={classes.p}>Doge</p></span>
      </div>
    </div>
  );
};

export default Name;
