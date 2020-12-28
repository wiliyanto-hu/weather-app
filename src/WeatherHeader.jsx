import React from 'react'
import {Grid, Paper} from "@material-ui/core"
const WeatherHeader = () => (
    <Grid container justify='center'    >
       <Grid item lg={10}>
         <Paper style={{textAlign: 'left'}} >
             <h3>Icon</h3>
            <h1>City</h1>
            <p>some text gilberish dll abac asdjsaljd</p>
         </Paper>
       </Grid>
       </Grid>     
)

export default WeatherHeader;