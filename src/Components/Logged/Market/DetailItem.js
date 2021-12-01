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
  console.log(data);

  return (
    <section>
      <div className={classes.container}>
        <div className={classes.detailBox}>
         <Typography variant='h4' style={{color:'#FFF'}}>Details</Typography>
          <div className={classes.paraBox}>
            <Typography style={{paddingBottom:'25px'}}>Name :      {data.name}</Typography>
            <Typography style={{paddingBottom:'25px'}}>24h High :     ${data.high_24h}</Typography>
            <Typography style={{paddingBottom:'25px'}}>24h Low : ${data.low_24h}</Typography>
            <Typography style={{paddingBottom:'25px'}}>Volume :  {data.total_volume}</Typography>
            <Typography style={{paddingBottom:'25px'}}>Rank :  {data.market_cap_rank}</Typography>

          </div>
          <div className={classes.image} >
            <img width='200px' height='200px' src={data.image} alt='' />
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

{/* {props.coin && Object.keys(props.coin).map((curr, i) => {
  
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

})} */}