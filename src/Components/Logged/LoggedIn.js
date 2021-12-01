import FirstBar from "./FirstBar";
import classes from "./LoggedIn.module.css";
import LoggedinNavigation from "./LoggedinNav";
import Market from "./Market/Market";
import SecondBar from "./SecondBar";
import { useSelector } from "react-redux";
import DetailItem from "./Market/DetailItem";
import { useState } from "react";



const LoggedIn = () => {
  const [coin, setCoin]= useState()

  const detailVisible = useSelector((state) => state.detail.visible);

  const singleCoinData = (row) => {
      setCoin(row)
  };

  return (
    <div className={classes.container}>
      <LoggedinNavigation />
      <FirstBar />
      <SecondBar />
      <Market data={singleCoinData} />
      {detailVisible && <DetailItem data={coin} />}
    </div>
  );
};

export default LoggedIn;
