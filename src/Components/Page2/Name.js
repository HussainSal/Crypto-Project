import classes from "./Name.module.css";

const Name = (props) => {
  return (
    <div>
    <div>
      <h3 className={classes.name}>Name</h3>
      <div className={classes.coin}>
        {props.detail &&
          Object.keys(props.detail).map((e, i) => {
            let name = props.detail[e].name;
            let logo = props.detail[e].image.replace("large", "thumb");

            return (
              <div className={classes.container}>
                <span key={i} className={classes.span}>
                  {props.detail && <img src={logo} />}
                </span>
                <p className={classes.p}>{name}</p>
              </div>
            );
          })}
      </div>
    </div>
    </div>
  );
};

export default Name;

/*<span className={classes.span}>
          ETH<p className={classes.p}>Ethereum</p>
        </span>
        <span className={classes.span}>
          ADA<p className={classes.p}>Cardano</p>
        </span>
        <span className={classes.span}>
          SOL<p className={classes.p}>Solana</p>
        </span>
        <span className={classes.span}>
          XRP<p className={classes.p}>Ripple</p>
        </span>
        <span className={classes.span}>
          DOGE<p className={classes.p}>Doge</p>
        </span>
        <span className={classes.span}>
          LTC<p className={classes.p}>Litecoin</p>
        </span> */
