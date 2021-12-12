import React from "react";
import classes from "./Market.module.css";
import { Button } from "@material-ui/core";
import { Table } from "@material-ui/core";
import { TableBody } from "@material-ui/core";
import { TableCell } from "@material-ui/core";
import { TableContainer } from "@material-ui/core";
import { TableHead } from "@material-ui/core";
import { TableRow } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { Typography } from "@material-ui/core";
import { detailActions } from "../../../Store/Index";
import { Pagination } from "@mui/material";

const Market = (props) => {
  const dispatch = useDispatch();
  const coinList = useSelector((state) => state.coinData.response);

  const [page, setPage] = React.useState(1);

  const pageHandleChange = (event, value) => {
    setPage(value);

    document
      .getElementById("paginationTop")
      .scrollIntoView({ behavior: "smooth" });
  };

  const detailHandler = () => {
    dispatch(detailActions.visible());
  };

  function singleCoin(row) {
    detailHandler();

    props.data(row);
  }

  return (
    <section>
      <div className={classes.container}>
        <TableContainer
          id="paginationTop"
          style={{ backgroundColor: "#4C0081" }}
          component={Paper}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ color: "#FFFFFF" }}>NAME</TableCell>
                <TableCell style={{ color: "#FFFFFF" }} align="right">
                  PRICE
                </TableCell>
                <TableCell style={{ color: "#FFFFFF" }} align="right">
                  24H %CHANGE
                </TableCell>
                <TableCell style={{ color: "#FFFFFF" }} align="right">
                  24H PRICE CHANGE{" "}
                </TableCell>
                <TableCell style={{ color: "#FFFFFF" }} align="right">
                  DETAILS
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {coinList &&
                coinList.slice((page - 1) * 10, page * 10).map((row) => (
                  <TableRow
                    id={row.id}
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
                      ${Math.round(row.current_price * 100) / 100}
                    </TableCell>
                    <TableCell
                      style={{
                        color:
                          Math.round(row.price_change_percentage_24h) > 0
                            ? `#25B196`
                            : `#CD1818`,
                      }}
                      align="right"
                    >
                      {Math.round(row.price_change_percentage_24h * 100) / 100}
                    </TableCell>
                    <TableCell style={{ color: "#FFFFFF" }} align="right">
                      {Math.round(row.price_change_24h * 100) / 100}
                    </TableCell>
                    <TableCell style={{ color: "#FFFFFF" }} align="right">
                      {
                        <Button
                          id={row.id}
                          onClick={() => {
                            singleCoin(row);
                          }}
                          style={{ backgroundColor: "#25B196", color: "white" }}
                        >
                          {" "}
                          DETAIL{" "}
                        </Button>
                      }
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Pagination
          className={classes.pagination}
          page={page}
          onChange={pageHandleChange}
          count={Math.ceil(coinList.length / 10)}
          shape="rounded"
        />
      </div>
    </section>
  );
};

export default Market;
