import React from 'react'
import {Grid} from "@material-ui/core"
import WeatherDetail from './WeatherDetail.jsx'
const WeatherDetailContainer = () => (
    <Grid container justify='space-around'    >
       <WeatherDetail/>
       <WeatherDetail/>
       <WeatherDetail/>
       <WeatherDetail/>
       </Grid>     
)

export default WeatherDetailContainer;