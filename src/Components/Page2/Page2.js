import classes from "./Page2.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Typography } from "@material-ui/core";
import { apiDataAction } from "../../Store/Index";

import { Table } from "@material-ui/core";
import { TableBody } from "@material-ui/core";
import { TableCell } from "@material-ui/core";
import { TableContainer } from "@material-ui/core";
import { TableHead } from "@material-ui/core";
import { TableRow } from "@material-ui/core";
import { Paper } from "@material-ui/core";

// const useStyle = makeStyles({
//   gridItem: {
//     textAlign: "center",
//   },
// });

const Page2 = (props) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [coin, setCoin] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
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
        let list = response.data;

        dispatch(apiDataAction.getCoinData(list));

        let transformedData = {
          bitcoin: list[0],
          ethereum: list[1],
          cardano: list[4],
          solana: list[5],
          ripple: list[6],
          dogecoin: list[9],
          litecoin: list[15],
        };

        let convertedToArray = Object.keys(transformedData).map((key) => {
          return transformedData[key];
        });

        setCoin(convertedToArray);
      })
      .catch(function (error) {
        setError(true);
      });
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="market" className={classes.box}>
      <div className={classes.container}>
        <TableContainer
          style={{ backgroundColor: "#3C1161" }}
          component={Paper}
        >
          {!loading && !error && (
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell style={{ color: "#FFFFFF" }}>NAME</TableCell>
                  <TableCell style={{ color: "#FFFFFF" }} align="right">
                    PRICE
                  </TableCell>
                  <TableCell style={{ color: "#FFFFFF" }} align="right">
                    24H CHANGE
                  </TableCell>
                  <TableCell style={{ color: "#FFFFFF" }} align="right">
                    24H PRICE CHANGE{" "}
                  </TableCell>
                  <TableCell style={{ color: "#FFFFFF" }} align="right">
                    TRADE
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {coin &&
                  coin.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell
                        style={{ color: "#FFFFFF" }}
                        component="th"
                        scope="row"
                      >
                        <div className={classes.nameContainer}>
                          <img
                            width="40px"
                            height="40px"
                            src={row.image}
                            alt=""
                          />
                          <div className={classes.nameSubcontainer}>
                            <Typography style={{ textTransform: "uppercase" }}>
                              <b> {row.symbol} </b>{" "}
                            </Typography>
                            <Typography
                              style={{ color: "rgba(204, 197, 197, 0.829)" }}
                            >
                              {row.name}
                            </Typography>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell style={{ color: "#FFFFFF" }} align="right">
                        {row.current_price}
                      </TableCell>
                      <TableCell
                        style={{
                          color:
                            row.price_change_percentage_24h > 0
                              ? `#25B196`
                              : `#CD1818`,
                        }}
                        align="right"
                      >
                        {row.price_change_percentage_24h}
                      </TableCell>
                      <TableCell style={{ color: "#FFFFFF" }} align="right">
                        {row.price_change_24h}
                      </TableCell>
                      <TableCell style={{ color: "#FFFFFF" }} align="right">
                        {
                          <Button
                            onClick={() =>
                              alert(
                                "Trading is only allowed if user is logged in"
                              )
                            }
                            style={{
                              backgroundColor: "#25B196",
                              color: "white",
                            }}
                          >
                            {" "}
                            buy{" "}
                          </Button>
                        }
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          )}
        </TableContainer>
      </div>
    </section>
  );
};

export default Page2;
