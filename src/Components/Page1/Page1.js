import React from "react";
import Header from "./Header";
import classes from "./Page1.module.css";
import Page1Content from "./Page1Content";
import Page1Img from "./Page1Img";

const Page1 = () => {
  return (
    <div id="home">
      <Header />
      <div className={classes.page1}>
        <Page1Content />
        <Page1Img />
      </div>
    </div>
  );
};

export default Page1;
