import React, {createContext, useState, useEffect} from 'react'
import axios from 'axios'

const key='92a4d62a3c83965a7d90cc295ef0d3af'

export const WeatherContext = createContext();

export function WeatherProvider (props){
const [city,setCity] = useState('jakarta')
  const [details,setDetails] = useState({})

const changeCity = (city='pekanbaru') => {
    setCity(city)
}  
 useEffect(() => {
    async function getWeather (){
      try {
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        const {data} = res
        const {name, main, weather,sys, wind} = data
        setDetails({
          cityName:name,
          countryID: sys.country,
          icon: weather[0].icon,
          temperature:(main.temp - 273.15).toFixed(2),
          weather:weather[0].description,
          humidity:main.humidity,
          windSpeed:wind.speed,
          maxTemp:(main.temp_max - 273.15).toFixed(2),
          minTemp:(main.temp_min - 273.15).toFixed(2),
        })
      }
        catch (error){
          if (error.response) {
            const {message} = error.response.data
            setDetails({
              cityName:message,
              weather:"Please select another city",
              countryID: 'X',
              icon: 'X',
              temperature:'X',
              
              humidity:'X',
              windSpeed:'X',
              maxTemp:'X',
              minTemp:'X',
            })
        } 
        console.log('this is the ERROR',error);
        }
    }
    getWeather()
 }, [city]) 
  
return(
    <WeatherContext.Provider value={{...details, changeCity}}>
        {props.children}
    </WeatherContext.Provider>
    )

}