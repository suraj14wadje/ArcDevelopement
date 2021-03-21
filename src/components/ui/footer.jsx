import React from "react";
import makeStyles from "@material-ui/styles/makeStyles";
import footerAdornment from "../../assets/Footer Adornment.svg";
const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    position: "fixed",
    bottom: "0",
    width: "100%",
    zIndex: 2000,
  },
  adornment: {
    width: "23em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "18em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "12em",
    },
  },
}));
export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <img src={footerAdornment} alt="footer" className={classes.adornment} />
    </footer>
  );
}
