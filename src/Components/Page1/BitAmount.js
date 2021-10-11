import React from "react";
import classes from "./BitAmount.module.css";
// import Textfield from "@material-ui/core/Textfield";

const BitAmount = () => {
  /*
    const currencies = [
        {
          value: 'USD',
          label: '$',
        },
        {
          value: 'EUR',
          label: '€',
        },
        {
          value: 'BTC',
          label: '฿',
        },
        {
          value: 'JPY',
          label: '¥',
        },
      ];

      const [currency , setCurrency] = React.useState('EUR');

      const currencyHandler = e=> {setCurrency(e.target.value)
}
 */
  return (
    <div className={classes.container}>
      <div className={classes.amount}>
        <label className={classes.label} htmlFor={"amt"}>
          I can spend
          <input
            id={"amt"}
            placeholder="Enter Amount"
            className={classes.input}
            list='currency'
          />
        </label>
        <datalist id="currency">
          <option>$</option>
          <option>€</option>
          <option>¥</option>
          <option>₹</option>

          
        </datalist>
      </div>
      <div className={classes.btc}>
        <label className={classes.label} htmlFor={"amt"}>
          I want to buy
          <input
            list="coin"
            id={"amt"}
            placeholder="BTC"
            className={classes.input}
          />{" "}
        </label>
        <datalist id="coin">
          <option>BTC</option>
          <option>ETH</option>
          <option>DOGE</option>
          <option>LTC</option>
          <option>XRP</option>
          <option>ADA</option>
          <option>SOL</option>
        </datalist>
      </div>
      <button className={`${classes.bttn} ${classes.signup}`}>Buy BTC</button>
    </div>
  );
};

export default BitAmount;
