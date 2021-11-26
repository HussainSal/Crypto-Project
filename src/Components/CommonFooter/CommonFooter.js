import { Container, Grid, Link, Typography } from "@material-ui/core";
import React from "react";
import classes from "./CommonFooter.module.css";
import { makeStyles } from "@material-ui/core";

const company = [
  "About Us",
  "Bitbns FAQs",
  "More FAQs",
  "Bug Bounty",
  "Fees",
  "Referral Program",
  "How it works",
];

const products = [
  " Bitdroplet",
  "Ascent",
  " Fixed Deposits",
  " Bitbns Academy",
];

const services = [
  "BNS",
  "Trading Mechanism",
  "Margin Trading",
  " API Trading",
  "Ticker API",
  " Stop Limit",
];

const useStyle = makeStyles({
  link: {
    color: "rgba(204, 197, 197, 0.829)",
    cursor: "pointer",
    margin: ".9rem 0rem",
    lineHeight: "200%",
    textDecoration: "none",
  },
});

const CommonFooter = () => {
  const style = useStyle();

  return (
    <div className={classes.container}>
      <Container>
        <Grid container style={{ padding: "45px" , color:'#FFFFFF' }}>
          <Grid item md={3}>
           <Typography variant='h6' style={{paddingBottom:'10px'}}> Company </Typography>
            {company.map((item) => {
              return (
                <div>
                  {" "}
                  <Link className={style.link}> {item} </Link> <br />{" "}
                </div>
              );
            })}
          </Grid>
          <Grid item md={3}>
          <Typography variant='h6' style={{paddingBottom:'10px'}}> Products </Typography>
            {products.map((item) => {
              return (
                <div>
                  {" "}
                  <Link className={style.link}> {item} </Link> <br />{" "}
                </div>
              );
            })}
          </Grid>
          <Grid item md={3}>
          <Typography variant='h6' style={{paddingBottom:'10px'}}> Services </Typography>
            {services.map((item) => {
              return (
                <div>
                  {" "}
                  <Link className={style.link}> {item} </Link> <br />{" "}
                </div>
              );
            })}
          </Grid>
          <Grid item md={3}>
          <Typography variant='h6' style={{paddingBottom:'10px'}}> Contact </Typography>
            <Link className={style.link}>Customer Support </Link>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default CommonFooter;
