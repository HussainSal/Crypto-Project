import classes from "./DetailItem.module.css";
import { detailActions } from "../../../Store/Index";
import { useDispatch } from "react-redux";

function DetailItem(props) {
  const dispatch = useDispatch();

  const closeHandler = () => {
    dispatch(detailActions.notVisible());
  };

  return (
    <section>
      <div className={classes.container}>
        <div className={classes.detailBox}>
          <h2>Details</h2>

          <div className={classes.paraBox}>
          
            {props.coin && Object.keys(props.coin).map((curr, i) => {
              
            let high = props.coin[curr].high_24h;
            let low = props.coin[curr].low_24h;
            let change = props.coin[curr].price_change_24h;
            let supply = props.coin[curr].circulating_supply;
            let rank = props.coin[curr].market_cap_rank;
              
             return <div key={i}>
                <div>
                 <p> Today's High : {high} </p>
                 <p> Today's low : {low} </p>
                 <p> Price Change (24 hour) : {change} </p>
                 <p> Circulating Supply :{supply} </p>
                 <p> Market Rank: {rank}  </p>
                </div>
               <div className={classes.img}>
                 <p>img</p>
               </div>
              </div>

            })}
           
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
