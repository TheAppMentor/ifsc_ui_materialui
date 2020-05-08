import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
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

const LinkContainerColumn = props => {
  const classes = useStyles();

  return (
    <Grid container direction="column" className={classes.footerPaperStyle}>
      {props.links.map(eachLink => {
        return (
          <Grid
            item
            align="flex-start"
            xs={4}
            className={classes.footerPaperLinkStyle}
          >
            <Paper className={classes.footerPaperStyle}>
              <Typography>
                <Link href="#">{eachLink.displayName}</Link>
              </Typography>
            </Paper>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default LinkContainerColumn;
