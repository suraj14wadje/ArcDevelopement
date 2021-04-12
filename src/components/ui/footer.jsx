import React from "react";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/styles/makeStyles";
import footerAdornment from "../../assets/Footer Adornment.svg";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    position: "fixed",
    bottom: "0",
    width: "100%",
    zIndex: 2000,
  },
  gridContainer: {
    position: "absolute",
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontWeight: "bold",
    fontSize: "0.75rem",
    textDecoration: "none",
  },
  columnContainer: {
    margin: "3em",
  },
  adornment: {
    width: "25em",
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
      <Grid container className={classes.gridContainer} justify="space-evenly">
        <Grid item>
          <Grid
            container
            spacing={2}
            direction="column"
            className={classes.columnContainer}
          >
            <Grid item className={classes.link} component={Link} to="/">
              Home
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            spacing={2}
            direction="column"
            className={classes.columnContainer}
          >
            <Grid item className={classes.link} component={Link} to="/services">
              Services
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              to="/appDevelopeMent"
            >
              Custom Software Development
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              to="/mobiledevelopement"
            >
              Mobile Development
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              to="/webdevelopement"
            >
              Website Development
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            spacing={2}
            direction="column"
            className={classes.columnContainer}
          >
            <Grid
              item
              className={classes.link}
              component={Link}
              to="/revolution"
            >
              The Revolution
            </Grid>
            <Grid item className={classes.link} component={Link} to="/vision">
              Vision
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              to="/technology"
            >
              Technology
            </Grid>
            <Grid item className={classes.link} component={Link} to="/process">
              Process
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            spacing={2}
            direction="column"
            className={classes.columnContainer}
          >
            <Grid item className={classes.link} component={Link} to="/about">
              About us
            </Grid>
            <Grid item className={classes.link} component={Link} to="/history">
              History
            </Grid>
            <Grid item className={classes.link} component={Link} to="/team">
              Team
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <img src={footerAdornment} alt="footer" className={classes.adornment} />
    </footer>
  );
}
