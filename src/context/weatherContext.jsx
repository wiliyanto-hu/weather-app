import React, {createContext, useState, useEffect} from 'react'
import axios from 'axios'

const key='92a4d62a3c83965a7d90cc295ef0d3af'

export const WeatherContext = createContext();

export function WeatherProvider (props){
const [city,setCity] = useState('jakarta')
  const [details,setDetails] = useState({})

const changeCity = () => {
    setCity('pekanbaru')
}  
 useEffect(() => {
    async function getWeather (){
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        const {data} = res
        console.log(data)
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
    getWeather()
 }, [city]) 
  
return(
    <WeatherContext.Provider value={{...details, changeCity}}>
        {props.children}
    </WeatherContext.Provider>
    )

}