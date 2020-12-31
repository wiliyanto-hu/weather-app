import React, {useContext} from 'react'
import {Grid, Paper} from "@material-ui/core"
import {WeatherContext} from './context/weatherContext.jsx'
const WeatherHeader = () => {
  const {cityName,countryID,icon,weather,temperature} = useContext(WeatherContext)
  
  return(
    <Grid container justify='center'    >
       <Grid item lg={10} md={10} sm={10} xs={10}>
         <Paper style={{textAlign: 'left', padding:'0.8rem', marginTop:'1rem'}} elevation={3} >
           <div style={{display:'flex', alignItems:"center"}}>
             <img src={`http://openweathermap.org/img/wn/${icon}@2x.png` } alt='weather_icon' /><span style={{fontSize: '1.3rem', marginLeft:'1.3rem'}}>{`${temperature}°C`}</span>
             </div>
            <h1 style={{fontWeight: '800'}}>{cityName}, {countryID}</h1>
            <h3 style={{textTransform:'capitalize', fontFamily: 'Nunito, sans-serif'}}>{weather}</h3>
         </Paper>
       </Grid>
       </Grid>    ) 
}

export default WeatherHeader;