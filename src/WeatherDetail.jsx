import React from 'react'
import {Grid, Paper} from "@material-ui/core"


const WeatherDetails = ({detail,iconClass,detailText,iconColor}) => {

  return(
       <Grid item lg={2} xs={5} justify='center' elevation={2} >
         <Paper style={{textAlign: 'center'}} >
           <p style={{fontFamily: 'Nunito, sans-serif'}}>{detailText}</p>
            <i className={iconClass} style={{color:iconColor }}></i>
            <p style={{fontFamily: 'Nunito, sans-serif'}}>{detail}</p>
         </Paper>
       </Grid>   )     
}

export default WeatherDetails;