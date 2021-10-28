import classes from "./Page2.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

import Name from "./Name";
import Price from "./Price";
import Change from "./Change";
import Buy from "./Buy";
import Details from "./Details";

const Page2 = (props) => {
  const [price, setPrice] = useState();
  const [change, setChange] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://coingecko.p.rapidapi.com/coins/markets",
      params: {
        vs_currency: "usd",
        page: "1",
        per_page: "100",
        order: "market_cap_desc",
      },
      headers: {
        "x-rapidapi-host": "coingecko.p.rapidapi.com",
        "x-rapidapi-key": "4cc28901c5msh78f8ff0af3ed3f4p1732c5jsn2adeb50731fc",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);

        let list = response.data;
        let transformedData = {
          bitcoin: list[0],
          ethereum: list[1],
          cardano: list[2],
          ripple: list[5],
          solana: list[6],
          dogecoin: list[8],
          litecoin: list[15],
        };
        console.log(transformedData);

        setPrice(transformedData);
        setChange(transformedData);
      })
      .catch(function (error) {
        console.error(error);
        setError(true);
      });
  }, []);

  return (
    <div id="market" className={classes.box}>
      

      <div className={`${error ? classes.notHide : classes.hide}`}>
        <p className={classes.errorMessage}> Check your Internet connection</p>
        <button className={classes.bttn}> Try Again </button>
      </div>
      <div className={`${!error ? classes.mainContainer : classes.hide}`}>
        <Name />
        <Price price={price} />
        <Change change={change} />
        <Details />
        <Buy />
      </div>
    </div>
  );
};

export default Page2;
