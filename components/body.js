import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import GridPopularBanks from "./gridPopularBanks";

const useStyles = makeStyles({
  mytypoStyle: {
    variant: "h1",
    align: "left"
  },
  paperStyle: {
    backgroundColor: "#ff9922"
  },
  paperStyleGutter: {
    backgroundColor: "#112233"
  }
});

const Body = () => {
  const classes = useStyles();

  return (
    <Grid container align="center" spacing={3}>
      <Grid item xs={12}>
        <GridPopularBanks />
      </Grid>
      <Grid item xs={4}>
        <Paper
          className={classes.paperStyle}
          variant="outlined"
          color="secondary"
        >
          Body Section 1
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper variant="outlined" className={classes.paperStyle}>
          Body_Section_2
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper variant="outlined" className={classes.paperStyle}>
          Body_Section_3
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Body;
