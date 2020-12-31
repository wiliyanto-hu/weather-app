import React, {useContext} from 'react'
import {WeatherContext} from './context/weatherContext.jsx'
import {Grid} from "@material-ui/core"
import WeatherDetail from './WeatherDetail.jsx'



const WeatherDetailContainer = () => {
const {humidity,windSpeed,maxTemp,minTemp} = useContext(WeatherContext)
    return(
    <Grid container justify='space-around'    >
       <WeatherDetail detail={humidity} iconClass='fas fa-tint fa-2x' detailText="Humidity(%)" iconColor='CornflowerBlue'/>
       <WeatherDetail detail={windSpeed} iconClass="fas fa-wind fa-2x" detailText="Wind(m/s)" iconColor='gray'/>
       <WeatherDetail detail={maxTemp} iconClass="fas fa-arrow-up fa-2x" detailText="Max Temp(°C)" iconColor='orange'/>
       <WeatherDetail detail={minTemp} iconClass="fas fa-arrow-down fa-2x" detailText="Min Temp(°C)" iconColor='aqua'/>
       </Grid>     )
}

export default WeatherDetailContainer;