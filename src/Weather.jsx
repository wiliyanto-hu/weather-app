import React, {useContext} from "react";
import { Paper,Grid} from "@material-ui/core";
import WeatherHeader from './WeatherHeader.jsx'
import WeatherDetailContainer from './WeatherDetailContainer.jsx'
import {WeatherContext} from './context/weatherContext.jsx'

const Weather = () => {
  const {changeCity} = useContext(WeatherContext)
  return(
  <Grid container justify='center' >
    <Grid item lg={6} md={6} xs={8}style={{marginTop : '1rem'}} >
      <Paper elevation={3}>
        <WeatherHeader/>
        <h3 onClick={changeCity}> Change Location</h3>
      <WeatherDetailContainer/>
      </Paper>
    </Grid>
  </Grid>)
  
};

export default Weather;
