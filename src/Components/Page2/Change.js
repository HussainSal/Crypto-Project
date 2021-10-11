import classes from "./Change.module.css";

const Change = (props) => {
  return (
    <div>
      <h3>Change</h3>
      <div className={classes.changeBox}>
        {props.change &&
          Object.keys(props.change).map((e, i) => {
            let change = props.change[e].ath_change_percentage;
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
