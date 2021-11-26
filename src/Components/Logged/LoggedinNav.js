import React from "react";
import classes from "./LoggedinNav.module.css";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import logo from "./img/bitbns.png";
import { useDispatch } from "react-redux";
import { loginAction } from "../../Store/Index";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import { Menu } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";

const useStyles = makeStyles({
  bttns: {
    color: "#fff",
    paddingRight: "1.5rem",

    "&:hover": {
      backgroundColor: "#360457",
    },
  },
});

const LoggedinNavigation = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(loginAction.loggedout());
  };

  const sty = useStyles();

  return (
    <div className={classes.navigation}>
      <div className={classes.buttons}>
        {<img className={classes.logo} src={logo} />}

        <Button className={sty.bttns}>Markets</Button>
        <Button className={sty.bttns}> Trade </Button>
        <Button className={sty.bttns}> Margin </Button>
        <Button className={sty.bttns}> Options </Button>
        <Button className={sty.bttns}> Fixed Income </Button>
        <Button className={sty.bttns}> Finance </Button>
        <Button className={sty.bttns}> More </Button>
      </div>
      <div className={classes.options}>
        <Button className={sty.bttns}> Orders </Button>
        <Button className={sty.bttns}> Wallets </Button>
        <Button className={sty.bttns}>
          <NotificationsNoneIcon />
        </Button>

        <Button
          id="basic-button"
          aria-controls="basic-menu"
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <AccountCircleOutlinedIcon className={sty.bttns} /> salman
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={logoutHandler}>Logout</MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default LoggedinNavigation;
/*

*/
