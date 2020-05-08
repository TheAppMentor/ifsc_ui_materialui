import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import LinkContainerColumn from "./linkContaianer";

const useStyles = makeStyles({
  mytypoStyle: {
    variant: "h1",
    align: "left"
  },
  footerPaperStyle: {
    backgroundColor: "#355C7D"
  },
  footerPaperLinkStyle: {
    backgroundColor: "#ff2298"
  }
});

const PageFooter = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.footerPaperStyle}>
      <Grid item xs={4}>
        <LinkContainerColumn
          links={[
            { displayName: "Hello-1" },
            { displayName: "Hello-2" },
            { displayName: "Hello-3" }
          ]}
        />
      </Grid>

      <Grid item xs={4}>
        <LinkContainerColumn
          links={[
            { displayName: "Hello-4" },
            { displayName: "Hello-5" },
            { displayName: "Hello-6" }
          ]}
        />
      </Grid>

      <Grid item xs={4}>
        <LinkContainerColumn
          links={[
            { displayName: "Hello-7" },
            { displayName: "Hello-8" },
            { displayName: "Hello-9" }
          ]}
        />
      </Grid>

      <Grid item align="center" xs={12}>
        <Paper
          variant="outlined"
          elevation={2}
          square
          className={classes.footerPaperStyle}
        >
          <Typography variant="h5">copyright @ifsc.today</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default PageFooter;
