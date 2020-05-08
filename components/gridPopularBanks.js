import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import GridListTile from "@material-ui/core/GridListTile";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import PopularBankCard from "./popularBankCard";
//import sbiImage from "./logo/SBI_100x75_small.png";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 200,
    height: 200
  }
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     cols: 2,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */

export default function GridPopularBanks() {
  const classes = useStyles();

  return (
    <Grid container>
      {gridData.map(eachBank => {
        return (
          <Grid item xs={4}>
            <Paper variant="outlined" elevation={3}>
              <PopularBankCard />
            </Paper>
          </Grid>
        );
      })}
    </Grid>
  );
}

const gridData = [
  {
    displayName: "State Bank of India",
    logo: "SBI_100x75_small",
    cols: 1
  },
  {
    displayName: "Indian Overseas Bank",
    logo: "SBI_100x75_small",
    cols: 2
  },
  {
    displayName: "Indian Overseas Bank",
    logo: "SBI_100x75_small",
    cols: 3
  },
  {
    displayName: "Indian Overseas Bank",
    logo: "SBI_100x75_small",
    cols: 1
  },
  {
    displayName: "Indian Overseas Bank",
    logo: "SBI_100x75_small",
    cols: 2
  },
  {
    displayName: "Indian Overseas Bank",
    logo: "SBI_100x75_small",
    cols: 3
  }
];

/*
import Grid from '@material-ui/core/Grid';

const popularBankNames = ["State Bank Of India (SBI)","Punjab National Bank (PNB)","Indian Overseas Bank (IOB)","Allahabad Bank","Axis Bank Ltd","Bank Of Baroda (BOB)","HDFC Bank","ICICI Bank LTD", "Union Bank"]
const popularBankLogos = ["SBI_100x75_small","PNB_100x75_small","IOB_100x75_small","Allahabad_100x75_small","Axis_100x75_small","BOB_100x75_small","HDFC_100x75_small","ICICI_100x75_small","Union_100x75_small"]

const data = Array.from(new Array(9)).map((_val, i) => ({
    icon: '../logo/' + popularBankLogos[i] + '.png',
    text: popularBankNames[i],
}));




export default GridPopularBanks = () => {
return(
  <div>
      <Grid data={data} columnNum={3} 
          renderItem={dataItem => (
              <div style={{ padding: '12.5px', paddingTop : '25px'}}>
                  <img src={dataItem.icon} style={{ width: '50px', height: '37.5px' }} alt="" />
                  <div style={{ color: '#108EE9', fontSize: '12px', marginTop: '12px' }}>
                      <span>{dataItem.text}</span>
                  </div>
              </div>
          )}
                  onClick={this.props.userSelectedBank}
              />
  </div>
)
          };

          */
