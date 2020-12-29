import React, {useContext} from 'react'
import {WeatherContext} from './context/weatherContext.jsx'
import {Grid} from "@material-ui/core"
import WeatherDetail from './WeatherDetail.jsx'



const WeatherDetailContainer = () => {
const {humidity,windSpeed,maxTemp,minTemp} = useContext(WeatherContext)
    return(
    <Grid container justify='space-around'    >
       <WeatherDetail detail={humidity}/>
       <WeatherDetail detail={windSpeed} iconClass="fas fa-wind"/>
       <WeatherDetail detail={maxTemp}/>
       <WeatherDetail detail={minTemp}/>
       </Grid>     )
}

export default WeatherDetailContainer;