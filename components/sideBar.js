import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  mytypoStyle: {
    variant: "h1",
    align: "left"
  },
  footerPaperStyle: {
    backgroundColor: "#355C7D"
  },
  footerPaperLinkStyle: {
    backgroundColor: "#355C7D"
  }
});

const SideBar = props => {
  const classes = useStyles();

  return (
    <Hidden xsDown>
      <Grid item xs={2} align="center">
        <Paper
          variant="outlined"
          elevation={2}
          className={classes.paperStyleGutter}
        >
          Col 1
        </Paper>
      </Grid>
    </Hidden>
  );
};

export default SideBar;
