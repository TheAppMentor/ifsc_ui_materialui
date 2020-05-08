import Link from "next/link";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles } from "@material-ui/core";

import Body from "../components/body";
import PageFooter from "../components/pageFooter";
import SideBar from "../components/sideBar";
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

export default function(props) {
  const classes = useStyles(props);
  // console.log(classes);
  //const classes = useStyles()
  return (
    <Grid container direction="row" spacing={1} justify="center">
      <SideBar />
      <Grid item xs={12} sm={8}>
        <Grid container direction="row" spacing={1}>
          <Grid item align="center" xs={12}>
            <Paper variant="outlined" elevation={2}>
              <Typography variant="h3">Header Section</Typography>
            </Paper>
          </Grid>
          <Body />
          <PageFooter />
        </Grid>
      </Grid>
      <SideBar />
    </Grid>
  );
}
