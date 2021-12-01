import { createTheme } from "@material-ui/core";
import { green  } from "@material-ui/core/colors";

const theme = createTheme({
  typography: {
    fontFamily: "Fira+Sans",
    lineHeight: "1.15",

    subtitle1: {
      fontSize: "1.2rem",
      fontWeight: "600",
    },

    body2: {
      fontSize: "1rem",
    },
  },
  palette:{
    primary: {
      main:'#61DBFB'
    },
    secondary:green,
   
   
  }

  

});

export default theme