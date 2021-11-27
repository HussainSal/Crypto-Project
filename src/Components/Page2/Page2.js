import classes from "./Page2.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core";

import Name from "./Name";
import Price from "./Price";
import Change from "./Change";
import Buy from "./Buy";
import Details from "./Details";
import DetailItem from "./Details/DetailItem";
import { Grid } from "@material-ui/core";


const useStyle = makeStyles({
  gridItem:{
    textAlign:'center'
  }

})

const Page2 = (props) => {

  const style = useStyle()
  const [loading , setLoading] = useState(false);
  const [price, setPrice] = useState();
  const [change, setChange] = useState();
  const [name, setName] = useState();
  const [coinDetail, setCoinDetail] = useState();
  const [error, setError] = useState(false);

  const details = useSelector((state) => state.detail.visible);

  useEffect(() => {
    setLoading(true)
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
          cardano: list[4],
          solana: list[5],
          ripple: list[6],
          dogecoin: list[9],
          litecoin: list[15],
        };
        console.log(transformedData);

        setPrice(transformedData);
        setChange(transformedData);
        setName(transformedData);
        setCoinDetail(transformedData);
      })
      .catch(function (error) {
        console.error(error);
        setError(true);
      });
      setLoading(false)

  }, []);



  return (
    <div id="market" className={classes.box}>
      <div className={`${error ? classes.notHide : classes.hide}`}>
        <p className={classes.errorMessage}> Check your Internet connection</p>
        <button onClick={()=> window.location.reload()} className={classes.bttn}> Try Again </button>
      </div>

      <div className={`${!error ? classes.mainContainer : classes.hide}`}>
        <Grid container>
          <Grid className={style.gridItem} item md={3}>
            <Name detail={name} />
          </Grid>
          <Grid className={style.gridItem} item md={3}>
            <Price price={price} />
          </Grid>
          <Grid className={style.gridItem} item md={3}>
            <Change change={change} />
          </Grid>
          <Grid className={style.gridItem} item md={3}>
            <Buy detail={name} />
          </Grid>
          {/* <Grid item md={2}>
            <Details />
          </Grid> */}
        </Grid>
        {/* {details && <DetailItem coin={coinDetail} />} */}
      </div>
    </div>
  );
};

export default Page2;
