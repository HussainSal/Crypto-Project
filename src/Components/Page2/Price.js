import classes from "./Price.module.css";

const Price = (props) => {
  return (
    <div>
      <h3>Price</h3>
      <div className={classes.priceBox}>
        {props.price &&
          Object.keys(props.price).map((key, index) => {
            let response = props.price[key];
            return <p key={index} className={classes.price}>$ {response.current_price}</p>;
          })}
      </div>
    </div>
  );
};

export default Price;
