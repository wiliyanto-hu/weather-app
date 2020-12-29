import React, {useContext} from 'react'
import {Grid, Paper} from "@material-ui/core"
import {WeatherContext} from './context/weatherContext.jsx'
const WeatherHeader = () => {
  const {cityName,countryID,icon,weather,temperature} = useContext(WeatherContext)
  
  return(
    <Grid container justify='center'    >
       <Grid item lg={10}>
         <Paper style={{textAlign: 'left'}} >
             <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} /><span>{`${temperature}°C`}</span>
            <h1>{cityName}, {countryID}</h1>
            <p style={{textTransform:'capitalize'}}>{weather}</p>
         </Paper>
       </Grid>
       </Grid>    ) 
}

export default WeatherHeader;