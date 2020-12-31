import React from "react";
import { Paper,Grid} from "@material-ui/core";
import WeatherHeader from './WeatherHeader.jsx'
import WeatherDetailContainer from './WeatherDetailContainer.jsx'
const Weather = () => {
  return(
  <Grid container justify='center' >
    <Grid item lg={6} md={6} sm={8} xs={11}style={{marginTop : '5%'}} >
      <Paper elevation={3} style={{boxShadow: '0px 13px 24px 1px rgba(255,255,255,0.25)'}}>
        <WeatherHeader/>
        
      <WeatherDetailContainer/>
      </Paper>
    </Grid>
  </Grid>)
  
};

export default Weather;
