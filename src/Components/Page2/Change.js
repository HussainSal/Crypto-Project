import classes from "./Change.module.css";
import { Button } from "@material-ui/core";

const Change = (props) => {
  return (
    <div>
      <h3 className={classes.h3}>Change</h3>
      <div className={classes.changeBox}>
        {props.change &&
          Object.keys(props.change).map((e, i) => {
            let change = props.change[e].price_change_percentage_24h;
            console.log(change);
            return (
              <p key={i}
                className={`${
                  props.change && change > 0
                    ? classes.change
                    : classes.changes
                }`}
              >
                {props.change && change}%
              </p>
            );
          })}

      </div>
    </div>
  );
};

export default Change;
