import React, {useContext} from "react";
import { Paper,Grid} from "@material-ui/core";
import WeatherHeader from './WeatherHeader.jsx'
import WeatherDetailContainer from './WeatherDetailContainer.jsx'
import Modals from './Modals.jsx' 
const Weather = () => {
  return(
  <Grid container justify='center' >
    <Grid item lg={6} md={6} xs={8}style={{marginTop : '1rem'}} >
      <Paper elevation={3}>
        <WeatherHeader/>
        <Modals />
      <WeatherDetailContainer/>
      </Paper>
    </Grid>
  </Grid>)
  
};

export default Weather;
