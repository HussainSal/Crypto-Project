import classes from "./DetailItem.module.css";
import { detailActions } from "../../../Store/Index";
import { useDispatch } from "react-redux";
import { Typography } from "@material-ui/core";

function DetailItem(props) {
  const dispatch = useDispatch();

  const closeHandler = () => {
    dispatch(detailActions.notVisible());
  };

  let data = props.data;

  return (
    <section>
      <div className={classes.container}>
        <div className={classes.detailBox}>
          <Typography variant="h4" style={{ color: "#FFF" }}>
            Details
          </Typography>
          <div className={classes.paraBox}>
            <Typography style={{ paddingBottom: "25px" }}>
              Name : {data.name}
            </Typography>
            <Typography style={{ paddingBottom: "25px" }}>
              24h High : ${data.high_24h}
            </Typography>
            <Typography style={{ paddingBottom: "25px" }}>
              24h Low : ${data.low_24h}
            </Typography>
            <Typography style={{ paddingBottom: "25px" }}>
              Volume : {data.total_volume}
            </Typography>
            <Typography style={{ paddingBottom: "25px" }}>
              Rank : {data.market_cap_rank}
            </Typography>
          </div>
          <div className={classes.image}>
            <img width="200px" height="200px" src={data.image} alt="" />
          </div>

          <button
            onClick={closeHandler}
            className={`${classes.bttn} ${classes.signup}`}
          >
            Close
          </button>
        </div>
      </div>
    </section>
  );
}

export default DetailItem;
