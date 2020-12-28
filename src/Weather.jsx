import React from "react";
import { Paper,Grid} from "@material-ui/core";
import WeatherHeader from './WeatherHeader.jsx'
import WeatherDetailContainer from './WeatherDetailContainer.jsx'
const Weather = () => (
  <Grid container justify='center' >
    <Grid item lg={6} md={6} xs={8}style={{marginTop : '1rem'}} >
      <Paper elevation={3}>
        <WeatherHeader/>
        <h3> Change Location</h3>
      <WeatherDetailContainer/>
      </Paper>
    </Grid>
  </Grid>
  
);

export default Weather;
