import React from 'react'
import {Grid, Paper} from "@material-ui/core"
const WeatherDetails = ({detail,iconClass}) => {

  return(
       <Grid item lg={2} >
         <Paper style={{textAlign: 'left'}} >
            <i className={iconClass}></i>
            <p>{detail}</p>
         </Paper>
       </Grid>   )     
}

export default WeatherDetails;